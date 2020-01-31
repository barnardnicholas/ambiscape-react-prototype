import React, { Component } from "react";
import Transport from "./Transport";
import ChannelList from "./ChannelList";
import * as utils from "./utils/utils";
import * as engine from "./utils/audio-engine";
import scenarios from "./data/scenarios";
import sounds from "./data/sounds";

class SingleScenario extends Component {
  state = {
    name: "",
    slug: "",
    creator_id: null,
    color_scheme: [],
    is_public: null,
    likes: null,
    channels: [],
    playing: false,
    highlightedChannel: "",
    soloChannel: ""
  };

  startScenario = () => {
    const { randomSoundSpawner } = this;
    const { playing, name, channels } = this.state;
    console.log(`Starting scenario: ${name}`);
    if (!playing) {
      this.setState({ playing: true });
      engine.unmuteAll();
      engine.playBackgroundHowls(channels);
      const randomChannels = channels.filter(channel => {
        return channel.type === "random";
      });
      randomChannels.forEach(channel => {
        const { slug } = channel;
        const { playQueue, frequency } = channel;
        // engine.randomSoundSpawner(playerFunction, slug, playing);
        engine.startRandomHowls();
        engine.loop(slug, frequency, this.playNextRandomSound);
      });
    }
  };

  stopScenario = () => {
    const { playing } = this.state;
    const { name, channels } = this.state;
    console.log(`Stopping scenario: ${name}`);
    if (playing) {
      this.setState({ playing: false });
    }
    engine.muteAll();
    engine.stopRandomHowls();

    channels.forEach(channel => {
      const { slug, type } = channel;
      // if (type === "background") {
      engine.stopHowl(slug);
      // }
    });
  };

  playNextRandomSound = slug => {
    const { channels } = this.state;
    const thisChannel = channels.filter(channel => {
      return channel.slug === slug;
    })[0];
    const otherChannels = channels.filter(channel => {
      return channel.slug !== slug;
    });
    const { volume, pan, urls } = thisChannel;
    const newPlayQueue = [...thisChannel.playQueue];
    const thisURL = newPlayQueue.shift();
    let newVolume = volume * Math.random();
    let newPan = Math.random() * 2 - 1 * pan;
    if (newPan < -0.8) {
      newPan = -0.8;
    } else if (newPan > 0.8) {
      newPan = 0.8;
    }
    engine.playHowl(thisURL, newVolume, newPan);
    if (newPlayQueue.length > 0) {
      thisChannel.playQueue = newPlayQueue;
    } else {
      const shuffledURLs = urls.sort(() => Math.random() - 0.5);
      thisChannel.playQueue = shuffledURLs;
    }
    const newChannels = [thisChannel, ...otherChannels];
    newChannels.sort((a, b) => {
      return a.id - b.id;
    });
    this.setState({
      channels: newChannels
    });
  };

  toggleHighlightedChannel = slug => {
    const { highlightedChannel } = this.state;
    this.setState({
      highlightedChannel: highlightedChannel === slug ? "" : slug
    });
  };

  toggleSoloChannel = slug => {
    const { soloChannel } = this.state;
    this.setState({
      soloChannel: soloChannel === slug ? "" : slug
    });
  };

  changeVolume = (slug, value) => {
    console.log("change volume");
    const { channels } = this.state;
    const thisChannel = channels.filter(channel => {
      return channel.slug === slug;
    })[0];
    const otherChannels = channels.filter(channel => {
      return channel.slug !== slug;
    });
    const { volume, ...keys } = thisChannel;
    const newChannel = { ...keys, volume: value };
    const newChannels = [...otherChannels, newChannel];
    newChannels.sort((a, b) => {
      return a.id - b.id;
    });
    this.setState({ channels: newChannels });
    engine.changeVolumeOfHowl(slug, value);
  };

  changePan = (slug, value) => {
    console.log("change pan");
    const { channels } = this.state;
    const thisChannel = channels.filter(channel => {
      return channel.slug === slug;
    })[0];
    const otherChannels = channels.filter(channel => {
      return channel.slug !== slug;
    });
    const { pan, ...keys } = thisChannel;
    const newChannel = { ...keys, pan: value };
    const newChannels = [...otherChannels, newChannel];
    newChannels.sort((a, b) => {
      return a.id - b.id;
    });
    this.setState({ channels: newChannels });
    engine.changePanOfHowl(slug, value);
  };

  changeFrequency = (slug, value) => {
    console.log("change frequency");
    const { channels } = this.state;
    const thisChannel = channels.filter(channel => {
      return channel.slug === slug;
    })[0];
    const otherChannels = channels.filter(channel => {
      return channel.slug !== slug;
    });
    const { frequency, ...keys } = thisChannel;
    const newChannel = { ...keys, frequency: value };
    const newChannels = [...otherChannels, newChannel];
    newChannels.sort((a, b) => {
      return a.id - b.id;
    });
    this.setState({ channels: newChannels });
  };

  render() {
    const { channels, playing, highlightedChannel, soloChannel } = this.state;
    return (
      <div className="SingleScenario">
        <Transport
          startScenario={this.startScenario}
          stopScenario={this.stopScenario}
        />
        <ChannelList
          channels={channels}
          playing={playing}
          toggleHighlightedChannel={this.toggleHighlightedChannel}
          toggleSoloChannel={this.toggleSoloChannel}
          highlightedChannel={highlightedChannel}
          soloChannel={soloChannel}
          changeVolume={this.changeVolume}
          changeFrequency={this.changeFrequency}
          changePan={this.changePan}
          playNextRandomSound={this.playNextRandomSound}
        />
      </div>
    );
  }

  componentDidMount() {
    const { scenario_id } = this.props;
    const filteredScenario = scenarios.filter(scenario => {
      return scenario.slug === scenario_id;
    })[0];
    const {
      name,
      slug,
      creator_id,
      color_scheme,
      is_public,
      likes
    } = filteredScenario;
    const newChannels = [];
    filteredScenario.sounds.forEach(sound => {
      const { id } = sound;
      const filteredSound = sounds.filter(sound => {
        return sound.id === id;
      })[0];
      const newChannel = {
        ...filteredSound,
        ...sound,
        playQueue: filteredSound.urls
      };
      newChannels.push(newChannel);
    });
    newChannels.sort((a, b) => {
      return a.id - b.id;
    });
    this.setState({
      name: name,
      slug: slug,
      creator_id: creator_id,
      color_scheme: color_scheme,
      is_public: is_public,
      likes: likes,
      channels: newChannels
    });
    engine.loadAllHowls(newChannels);
  }

  componentDidUpdate() {}
}

export default SingleScenario;

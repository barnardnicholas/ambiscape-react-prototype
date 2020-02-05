import React, { Component } from "react";
import Transport from "./Transport";
import ChannelList from "./ChannelList";
import * as utils from "../utils/utils";
import * as api from "../utils/api";
import * as engine from "../utils/audio-engine";
import scenarios from "../data/scenarios";
import sounds from "../data/sounds";
import Header from "./Header";

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

  loadScenario = () => {
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
        playQueue: filteredSound.urls.sort(() => Math.random() - 0.5)
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
  };

  startScenario = () => {
    // const { randomSoundSpawner } = this;
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
        const { frequency } = channel;
        // engine.startRandomHowls();
        engine.startOneRandomChannel(slug, frequency, this.playNextRandomSound);
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
      if (type === "random") {
        engine.stopOneRandomChannel(channel);
      }
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

    // console.log(
    //   `playNextRandomSound URL - ${thisURL} VOL - ${newVolume} PAN - ${newPan}`
    // );
    engine.playHowl(thisURL, volume, pan);
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
    const { soloChannel, channels } = this.state;
    if (soloChannel === slug) {
      this.setState({
        soloChannel: ""
      });
      engine.unSoloChannel(channels);
    } else {
      this.setState({
        soloChannel: slug
      });
      const filteredChannel = channels.filter(channel => {
        return channel.slug === slug;
      })[0];
      engine.soloChannel(filteredChannel);
    }
  };

  toggleMuteChannel = urls => {
    urls.forEach(url => {
      engine.toggleMuteHowl(url);
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

  addChannel = sound => {
    console.log(sound);
    const newChannel = {
      ...sound,
      volume: 0.5,
      pan: 0
    };
    if (sound.type === "random") {
      newChannel.frequency = 0.2;
      newChannel.playQueue = sound.urls.sort(() => Math.random() - 0.5);
    }
    this.setState(currentState => {
      return {
        ...currentState,
        channels: [...currentState.channels, newChannel].sort((a, b) => {
          return a.id - b.id;
        })
      };
    });
    engine.loadHowlsForOneChannel(newChannel);
    setTimeout(() => {
      const { type, urls, slug, frequency } = newChannel;
      if (type === "background") {
        engine.playHowl(urls[0], 0.5, 0);
      } else {
        engine.startOneRandomChannel(slug, frequency, this.playNextRandomSound);
      }
    });
  };

  deleteChannel = slug => {
    const { channels } = this.state;
    const channelsToNotDelete = channels.filter(channel => {
      return channel.slug !== slug;
    });
    const channelToDelete = channels.filter(channel => {
      return channel.slug === slug;
    })[0];
    channelToDelete.urls.forEach(url => {
      engine.stopHowl(url);
      if (channelToDelete.type === "random") {
        engine.stopOneRandomChannel(channelToDelete);
      }
    });
    this.setState({
      channels: channelsToNotDelete.sort((a, b) => {
        return a.id - b.id;
      })
    });
  };

  saveScenario = user_id => {
    const { name, slug, is_public, channels } = this.state;
    const newSounds = channels.map(channel => {
      const { id, slug, volume, pan, frequency } = channel;
      const thisSound = {
        id: id,
        slug: slug,
        volume: volume,
        pan: pan
      };
      if (frequency) {
        thisSound.frequency = frequency;
      }
      return thisSound;
    });
    const newScenario = {
      name: name,
      slug: slug,
      is_public: is_public,
      creator_id: user_id,
      sounds: newSounds
    };
    api.postScenario(newScenario);
    console.log(scenarios);
  };

  render() {
    const {
      name,
      channels,
      playing,
      highlightedChannel,
      soloChannel
    } = this.state;
    return (
      <>
        <div className="singlescenario">
          <Header headerText={name} />
          <ChannelList
            channels={channels}
            playing={playing}
            toggleHighlightedChannel={this.toggleHighlightedChannel}
            toggleSoloChannel={this.toggleSoloChannel}
            toggleMuteChannel={this.toggleMuteChannel}
            highlightedChannel={highlightedChannel}
            soloChannel={soloChannel}
            changeVolume={this.changeVolume}
            changeFrequency={this.changeFrequency}
            changePan={this.changePan}
            playNextRandomSound={this.playNextRandomSound}
            addChannel={this.addChannel}
            deleteChannel={this.deleteChannel}
          />
          <Transport
            startScenario={this.startScenario}
            stopScenario={this.stopScenario}
            saveScenario={this.saveScenario}
          />
        </div>
      </>
    );
  }

  componentDidMount() {
    this.loadScenario();
  }

  componentDidUpdate() {}

  componentWillUnmount() {
    const { channels } = this.state;
    engine.muteAll();
    channels.forEach(channel => {
      const { urls } = channel;
      urls.forEach(url => {
        engine.stopHowl(url);
      });
    });
    this.setState({
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
    });
  }
}

export default SingleScenario;

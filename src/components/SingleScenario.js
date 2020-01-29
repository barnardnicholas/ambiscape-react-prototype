import React, { Component } from "react";
import Transport from "./Transport";
import ChannelList from "./ChannelList";
import * as api from "./utils/api";
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
    const { playing } = this.state;
    const { name, sounds } = this.state.scenario;
    console.log(`Starting scenario: ${name}`);
    if (!playing) {
      this.setState({ playing: true });
    }
    const bgSounds = sounds.filter(sound => {
      return sound.type === "background";
    });
    engine.playBgSounds(["italianbirds"]);
  };

  stopScenario = () => {
    const { playing } = this.state;
    const { name, sounds } = this.state.scenario;
    console.log(`Stopping scenario: ${name}`);
    if (playing) {
      this.setState({ playing: false });
    }
    const bgSounds = sounds.filter(sound => {
      return sound.type === "background";
    });
    engine.stopBgSounds(["italianbirds"]);
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

  changeVolume = (target_id, value) => {
    console.log("change volume");
  };

  changePan = () => {
    console.log("change pan");
  };

  changeFrequency = () => {
    console.log("change frequency");
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
        />
      </div>
    );
  }

  componentDidMount() {
    const { scenario_id } = this.props;
    const filteredScenarios = scenarios.filter(scenario => {
      return scenario.slug === scenario_id;
    });
    const {
      name,
      slug,
      creator_id,
      color_scheme,
      is_public,
      likes
    } = filteredScenarios[0];
    const newChannels = [];
    filteredScenarios[0].sounds.forEach(sound => {
      const { id } = sound;
      const filteredSound = sounds.filter(sound => {
        return sound.id === id;
      })[0];
      const newChannel = { ...filteredSound, ...sound };
      newChannels.push(newChannel);
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
  }
}

export default SingleScenario;

import React, { Component } from "react";
import Transport from "./Transport";
import ChannelList from "./ChannelList";
import * as api from "./utils/api";
import * as engine from "./utils/audio-engine";

class SingleScenario extends Component {
  state = {
    scenario: {
      name: "",
      slug: "",
      creator_id: null,
      color_scheme: [],
      is_public: null,
      likes: null,
      sounds: []
    },
    playing: false
  };

  startScenario = () => {
    // need comprehensive channel list, currently in ChannelList
    // sounds doesn't have enough information
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
    // need comprehensive channel list, currently in ChannelList
    // sounds doesn't have enough information
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

  loadScenario = slug => {
    const fetchedScenario = api.getScenarioBySlug(slug);
    this.setState({ scenario: fetchedScenario });
  };

  render() {
    const { scenario, playing } = this.state;
    return (
      <div className="SingleScenario">
        <Transport
          startScenario={this.startScenario}
          stopScenario={this.stopScenario}
        />
        <ChannelList scenario={scenario} playing={playing} />
      </div>
    );
  }

  componentDidMount() {
    this.loadScenario("italianbirds");
  }
}

export default SingleScenario;

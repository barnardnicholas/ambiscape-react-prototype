import React, { Component } from "react";
import Transport from "./Transport";
import ChannelList from "./ChannelList";
import * as api from "./utils/api";

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
    const { playing } = this.state;
    const { name } = this.state.scenario;
    console.log(`Starting scenario: ${name}`);
    if (!playing) {
      this.setState({ playing: true });
    }
  };

  stopScenario = () => {
    const { playing } = this.state;
    const { name } = this.state.scenario;
    console.log(`Stopping scenario: ${name}`);
    if (playing) {
      this.setState({ playing: false });
    }
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

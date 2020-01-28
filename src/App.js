import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Transport from "./components/Transport";
import ChannelList from "./components/ChannelList";
import * as api from "./components/utils/api";

class App extends Component {
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
    if (!playing) {
      this.setState({ playing: true });
    }
  };

  stopScenario = () => {
    const { playing } = this.state;
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
      <div className="App">
        <Header />
        <Transport
          startScenario={this.startScenario}
          stopScenario={this.stopSceanrio}
        />
        <ChannelList scenario={scenario} playing={playing} />
      </div>
    );
  }

  componentDidMount() {
    this.loadScenario("italianbirds");
  }
}

export default App;

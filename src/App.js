import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Transport from "./components/Transport";
import ChannelList from "./components/ChannelList";

class App extends Component {
  state = {
    scenario: "italianbirds"
  };

  render() {
    const { scenario } = this.state;
    return (
      <div className="App">
        <Header />
        <Transport />
        <ChannelList scenario={scenario} />
      </div>
    );
  }
}

export default App;

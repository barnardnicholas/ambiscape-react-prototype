import React, { Component } from "react";
import ChannelCard from "./ChannelCard";
import * as api from "./utils/api";

class ChannelList extends Component {
  state = {
    highlightedChannel: "",
    scenarioName: "",
    scenarioSlug: "",
    creatorId: "",
    colorScheme: [],
    isPublic: null,
    likes: null,
    channels: [
      {
        id: 1,
        name: "Italian Birds",
        slug: "italianbirds",
        type: "background",
        loop: true,
        volume: 0.7
      },
      {
        id: 2,
        name: "Blackbird",
        slug: "blackbird",
        type: "random",
        loop: false,
        volume: 0.7,
        pan: 0.5
      },
      {
        id: 3,
        name: "Song Thrush",
        slug: "songthrush",
        type: "random",
        loop: false,
        volume: 0.7,
        pan: 0.5
      },
      {
        id: 4,
        name: "Cuckoo",
        slug: "cuckoo",
        type: "random",
        loop: false,
        volume: 0.7,
        pan: 0.5
      },
      {
        id: 5,
        name: "Chaffinch",
        slug: "chaffinch",
        type: "random",
        loop: false,
        volume: 0.7,
        pan: 0.5
      }
    ]
  };

  highlightChannel = channelSlug => {
    this.setState({ highlightedChannel: channelSlug });
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

  toggleHighlightedChannel = slug => {
    const { highlightedChannel } = this.state;
    this.setState({
      highlightedChannel: highlightedChannel === slug ? "" : slug
    });
  };

  getChannel = sound => {
    const { id, volume, pan } = sound;
    const thisSound = api.getSoundById(id);
    const { name, slug, type, urls } = thisSound;
    return {
      id: id,
      volume: volume,
      pan: pan,
      name: name,
      slug: slug,
      type: type,
      urls: urls
    };
  };

  loadChannelList = () => {
    const { scenario } = this.props;
    return scenario.sounds.map(sound => {
      return this.getChannel(sound);
    });
  };

  loadScenario = () => {
    const {
      name,
      slug,
      creator_id,
      color_scheme,
      is_public,
      likes,
      sounds
    } = this.props.scenario;
    this.setState({
      scenarioName: name,
      scenarioSlug: slug,
      creatorId: creator_id,
      colorScheme: color_scheme,
      isPublic: is_public,
      likes: likes
    });
  };

  componentDidMount() {
    this.loadScenario();
  }

  componentDidUpdate() {
    const { channels } = this.state;
    if (channels.length === 0) {
      this.setState({
        channels: this.loadChannelList()
      });
    }
  }

  renderChannelCard(sound) {
    const { highlightedChannel } = this.state;
    return (
      <ChannelCard
        sound={sound}
        key={sound.id}
        changeVolume={this.changeVolume}
        changeFrequency={this.changeFrequency}
        changePan={this.changePan}
        highlightChannel={this.highlightChannel}
        isHighlighted={highlightedChannel === sound.slug ? true : false}
        toggleHighlight={this.toggleHighlightedChannel}
      />
    );
  }

  render() {
    const styling = {
      // border: "1px solid",
      listStyle: "none",
      padding: "0px",
      backgroundColor: "#D3E298"
    };

    const { channels, highlightedChannel } = this.state;
    if (channels.length > 0) {
      return (
        <div>
          <ul style={styling}>
            <li key="bglabel">Background Sounds</li>
            {channels.map(sound => {
              if (sound.type === "background") {
                return this.renderChannelCard(sound);
              }
            })}
            <li>+</li>
            <li key="randomlabel">Random Sounds</li>
            {channels.map(sound => {
              if (sound.type === "random") {
                return this.renderChannelCard(sound);
              }
            })}
            <li>+</li>
          </ul>
        </div>
      );
    } else {
      return (
        <div className="loading">
          <p>LOADING</p>
        </div>
      );
    }
  }
}

export default ChannelList;

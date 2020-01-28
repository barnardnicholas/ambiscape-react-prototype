import React, { Component } from "react";
import audioData from "./data/sounds-index";

class ChannelCard extends Component {
  state = {
    id: 2,
    name: "Blackbird",
    slug: "blackbird",
    type: "random",
    loop: false,
    urls: [
      "blackbird-sprite.ogg",
      "blackbird-sprite.m4a",
      "blackbird-sprite.mp3",
      "blackbird-sprite.ac3"
    ],
    sprite: {
      blackbird1: [0, 3342.2222222222226],
      blackbird2: [5000, 2602.0861678004535],
      blackbird3: [9000, 2793.650793650794],
      blackbird5: [13000, 3789.2063492063494],
      blackbird6: [18000, 2099.9546485260757],
      blackbird7: [22000, 2515.011337868479],
      blackbird8: [26000, 3121.6326530612264],
      blackbird9: [31000, 2935.873015873014],
      blackbird10: [35000, 4482.902494331064],
      blackbird11: [41000, 4009.795918367345],
      blackbird12: [47000, 3243.537414965985],
      blackbird13: [52000, 3112.9251700680243],
      blackbird14: [57000, 4018.5034013605473],
      blackbird15: [63000, 2950.385487528351],
      blackbird16: [67000, 2973.605442176876]
    },
    volume: 0.7,
    pan: 0.5,
    frequency: 0.5,
    mute: false
  };

  componentDidMount() {
    const {
      name,
      slug,
      id,
      type,
      loop,
      sprite,
      volume,
      pan,
      frequency
    } = this.props.sound;
    console.log(frequency);
    this.setState({
      name,
      id,
      slug,
      type,
      loop,
      sprite,
      volume,
      pan,
      frequency
    });
  }

  handleChangeVolume = event => {
    const { value } = event.target;
    const { changeVolume } = this.props;
    const { id } = this.state;
    this.setState({ volume: value });
    changeVolume(id, value);
  };

  handleChangePan = event => {
    const { value } = event.target;
    const { changePan } = this.props;
    const { id } = this.state;
    this.setState({ pan: value });
    changePan(id, value);
  };

  handleChangeFrequency = event => {
    const { value } = event.target;
    const { changeFrequency } = this.props;
    const { id } = this.state;
    this.setState({ frequency: value });
    changeFrequency(id, value);
  };

  handleToggleHighlight = () => {
    const { slug } = this.state;
    const { toggleHighlight } = this.props;
    toggleHighlight(slug);
  };

  handleToggleMute = () => {};

  handleToggleSolo = () => {};

  render() {
    const { name, id, slug, type, loop, sprite } = this.state;
    const { isHighlighted, highlightChannel } = this.props;

    const styling = {
      backgroundColor: "#CDE7BE"
    };

    const renderChannelVolume = () => {
      return (
        <label>
          Volume
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={this.state.volume}
            onChange={this.handleChangeVolume}
          ></input>
        </label>
      );
    };

    const renderChannelButtons = () => {
      return (
        <>
          <button>M</button>
          <button>S</button>
        </>
      );
    };

    const renderChannelPan = () => {
      return (
        <label>
          Pan
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={this.state.pan}
            onChange={this.handleChangePan}
          ></input>
        </label>
      );
    };

    const renderChannelFrequency = () => {
      return (
        <label>
          Frequency
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={this.state.frequency}
            onChange={this.handleChangeFrequency}
          ></input>
        </label>
      );
    };

    if (isHighlighted) {
      return (
        <li key={id} style={styling}>
          <label>{name}</label>
          <br />
          {renderChannelButtons()}
          <br />
          {renderChannelVolume()}
          <br />
          {type === "random" && renderChannelPan()}
          <br />
          {type === "random" && renderChannelFrequency()}
          <button onClick={this.handleToggleHighlight}>^</button>
        </li>
      );
    } else {
      return (
        <li key={id} style={styling}>
          <label>{name}</label>
          <br />
          {renderChannelVolume()}
          <button onClick={this.handleToggleHighlight}>v</button>
        </li>
      );
    }
  }
}

export default ChannelCard;

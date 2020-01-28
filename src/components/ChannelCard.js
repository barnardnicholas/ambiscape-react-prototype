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
    frequency: 0.5
  };

  componentDidMount() {
    const { name, slug, id, type, loop, sprite } = this.props.sound;
    this.setState({ name, id, slug, type, loop, sprite });
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
    this.setState({ Frequency: value });
    changeFrequency(id, value);
  };

  handleToggleHighlight = () => {
    const { slug } = this.state;
    const { toggleHighlight } = this.props;
    toggleHighlight(slug);
  };

  render() {
    const { name, id, slug, type, loop, sprite } = this.state;
    const { isHighlighted, highlightChannel } = this.props;

    const styling = {
      // border: "1px solid",
      backgroundColor: "#CDE7BE"
    };

    if (isHighlighted) {
      return (
        <li key={id} style={styling}>
          <label>{name}</label>
          <button>M</button>
          <button>S</button>
          <br />
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
          <br />
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
          <br />
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
          <br />
          <button onClick={this.handleToggleHighlight}>^</button>
        </li>
      );
    } else {
      return (
        <li key={id} style={styling}>
          <label>{name}</label>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={this.state.volume}
            onChange={this.handleChangeVolume}
          ></input>
          <button onClick={this.handleToggleHighlight}>v</button>
        </li>
      );
    }
  }
}

export default ChannelCard;

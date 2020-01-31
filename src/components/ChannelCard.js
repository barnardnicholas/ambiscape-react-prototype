import React, { Component } from "react";
import * as engine from "./utils/audio-engine";

class ChannelCard extends Component {
  state = {
    id: 2,
    name: "",
    slug: "",
    type: "",
    loop: false,
    urls: [],
    volume: 0,
    pan: 0,
    frequency: 0.5,
    mute: false,
    isPlaying: false,
    loopCanStart: true,
    loopIsRunning: false
  };

  componentDidMount() {
    const {
      name,
      slug,
      id,
      type,
      loop,
      urls,
      volume,
      pan,
      frequency
    } = this.props.sound;
    const { playing } = this.props;
    this.setState({
      name,
      id,
      slug,
      type,
      loop,
      urls,
      volume,
      pan,
      frequency
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      const { playing } = this.props;
      const { urls } = this.state;
      // if (urls.length > 0 && playQueue.length <= 1) {
      //   const newPlayQueue = urls.sort(() => Math.random() - 0.5);
      //   this.setState({ playQueue: newPlayQueue });
    }
    // if (isPlaying && !loopRunning) {
    //   this.loop();
    // }
    // if (!isPlaying && loopRunning) {
    //   this.setState({ loopRunning: false });
    // }

    //   if (type === "random") {
    //     if (playing && !loopIsRunning) {
    //       this.setState({ loopIsRunning: true });
    //       this.loop();
    //     } else if (!playing) {
    //       this.setState({
    //         loopisRunning: false,
    //         loopCanStart: true,
    //         isPlaying: false
    //       });
    //     }
    //   }
    // }
  }

  handleChangeVolume = event => {
    const { value } = event.target;
    const { changeVolume } = this.props;
    const { slug } = this.state;
    this.setState({ volume: value });
    changeVolume(slug, value);
  };

  handleChangePan = event => {
    const { value } = event.target;
    const { changePan } = this.props;
    const { slug } = this.state;
    this.setState({ pan: value });
    changePan(slug, value);
  };

  handleChangeFrequency = event => {
    const { value } = event.target;
    const { changeFrequency } = this.props;
    const { slug } = this.state;
    this.setState({ frequency: value });
    changeFrequency(slug, value);
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
      backgroundColor: "#CDE7BE",
      margin: "4px"
    };

    const renderChannelVolume = () => {
      return (
        <label>
          {isHighlighted && "Volume"}
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
          <button onClick={this.handleToggleMute}>M</button>
          <button onClick={this.handleToggleSolo}>S</button>
        </>
      );
    };

    const renderChannelPan = () => {
      return (
        <label>
          Pan
          <input
            type="range"
            min="-1"
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
          {renderChannelPan()}
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

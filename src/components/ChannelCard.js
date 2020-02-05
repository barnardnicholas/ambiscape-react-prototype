import React, { Component } from "react";
import * as engine from "../utils/audio-engine";
import * as styles from "../styles";
import expand from "../assets/gui/expand.png";
import collapse from "../assets/gui/collapse.png";
import solo from "../assets/gui/solo.png";
import mute from "../assets/gui/mute.png";
import del from "../assets/gui/x.png";

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

  handleToggleMute = () => {
    const { toggleMuteChannel } = this.props;
    const { slug, urls } = this.state;
    console.log(`toggle mute for ${slug}`);
    toggleMuteChannel(urls);
  };

  handleToggleSolo = () => {
    const { slug } = this.state;
    const { toggleSoloChannel } = this.props;
    toggleSoloChannel(slug);
  };

  handleDelete = () => {
    const { deleteChannel } = this.props;
    const { slug } = this.state;
    deleteChannel(slug);
  };

  render() {
    const { name, id, type } = this.state;
    const { isHighlighted } = this.props;

    const renderChannelVolume = () => {
      return (
        <>
          <label style={styles.channelLabelStyling}>
            {isHighlighted && "Volume"}
          </label>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={this.state.volume}
            onChange={this.handleChangeVolume}
            style={{ margin: "0px 12px 0px 0px" }}
          ></input>
        </>
      );
    };

    const renderChannelButtons = () => {
      return (
        <>
          <button
            onClick={this.handleToggleMute}
            style={{
              ...styles.channelButtonStyling,
              margin: "0px 8px",
              borderStyle: "solid"
            }}
          >
            {/* <img src={mute} alt="Mute" height="16px" width="16px" /> */}M
          </button>
          <button
            onClick={this.handleToggleSolo}
            style={{
              ...styles.channelButtonStyling,
              margin: "0px 8px",
              borderStyle: "solid"
            }}
          >
            {/* <img src={solo} alt="Solo" height="16px" width="16px" /> */}S
          </button>
        </>
      );
    };

    const renderChannelPan = () => {
      return (
        <>
          <label style={styles.channelLabelStyling}>Pan</label>
          <input
            type="range"
            min="-1"
            max="1"
            step="0.01"
            value={this.state.pan}
            onChange={this.handleChangePan}
          ></input>
        </>
      );
    };

    const renderChannelFrequency = () => {
      return (
        <>
          <label style={styles.channelLabelStyling}>Frequency</label>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={this.state.frequency}
            onChange={this.handleChangeFrequency}
          ></input>
        </>
      );
    };

    const tileSizeStyling = {
      width: "80%",
      height: isHighlighted ? "130px" : "56px",
      maxWidth: "300px"
    };

    if (isHighlighted) {
      return (
        <li key={id} style={styles.tileLIStyling}>
          <div
            style={{ ...styles.tileBackgroundStyling, ...tileSizeStyling }}
          ></div>
          <div style={styles.tileContentStyling}>
            <label style={styles.channelLabelStyling}>{name}</label>
            <br />
            {renderChannelButtons()}
            <br />
            {renderChannelVolume()}
            <br />
            {renderChannelPan()}
            <br />
            {type === "random" && renderChannelFrequency()}
            <button
              onClick={this.handleToggleHighlight}
              style={{
                ...styles.transportButtonStyling,
                borderStyle: "none",
                width: "20px",
                height: "20px"
              }}
            >
              <img
                src={collapse}
                alt="Collapse channel"
                height="16px"
                width="16px"
              />
            </button>
            <button
              onClick={this.handleDelete}
              style={styles.channelButtonStyling}
            >
              <img src={del} alt="Delete" height="16px" width="16px" />
            </button>
          </div>
        </li>
      );
    } else {
      return (
        <li key={id} style={styles.tileLIStyling}>
          <center>
            <div
              style={{ ...styles.tileBackgroundStyling, ...tileSizeStyling }}
            ></div>
          </center>
          <div style={styles.tileContentStyling}>
            <label style={styles.channelLabelStyling}>{name}</label>
            <br />
            <button
              onClick={this.handleToggleHighlight}
              style={{
                ...styles.transportButtonStyling,
                borderStyle: "none",
                width: "20px",
                height: "20px"
              }}
            >
              <img
                src={expand}
                alt="Expand channel"
                height="16px"
                width="16px"
              />
            </button>
            {renderChannelVolume()}

            <button
              onClick={this.handleDelete}
              style={styles.channelButtonStyling}
            >
              <img src={del} alt="Delete" height="16px" width="16px" />
            </button>
          </div>
        </li>
      );
    }
  }
}

export default ChannelCard;

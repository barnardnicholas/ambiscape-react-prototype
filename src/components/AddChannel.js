import React, { Component } from "react";
import * as styles from "../styles";
import sounds from "../data/sounds";
import * as api from "../utils/api";

export default class AddChannel extends Component {
  state = {
    adderOption: ""
  };

  handleToggleHighlight = () => {
    const { toggleHighlight, slug } = this.props;
    toggleHighlight(slug);
  };

  handleChange = event => {
    const { value } = event.target;
    this.setState({ adderOption: value });
  };

  handleAddChannel = () => {
    const { adderOption } = this.state;
    const { addChannel } = this.props;
    const thisChannel = api.getSoundBySlug(adderOption);
    addChannel(thisChannel);
    this.setState({ adderOption: "" });
  };

  getSoundsForAdder = () => {
    const { channels, type } = this.props;
    const thisTypeOfSounds = sounds.filter(sound => {
      return sound.type === type;
    });
    const soundsNotLoaded = thisTypeOfSounds.filter(sound => {
      const { id } = sound;
      let hasAlreadyLoaded = false;
      channels.forEach(channel => {
        if (channel.id === id) {
          hasAlreadyLoaded = true;
        }
      });
      if (!hasAlreadyLoaded) {
        return sound;
      }
    });
    return soundsNotLoaded;
  };

  renderPlusButton() {
    const tileSizeStyling = {
      width: "80%",
      height: "20px",
      maxWidth: "300px"
    };
    const customButtonStyling = {
      borderStyle: "none",
      width: "100%",
      height: "20px"
    };
    const { type } = this.props;
    return (
      <li key={`${type} adder`} style={styles.tileLIStyling}>
        <div
          style={{ ...styles.tileBackgroundStyling, ...tileSizeStyling }}
        ></div>
        <div style={{ ...styles.tileContentStyling, padding: "0px" }}>
          <button
            style={{ ...styles.listButtonStyling, ...customButtonStyling }}
            onClick={this.handleToggleHighlight}
          >
            +
          </button>
        </div>
      </li>
    );
  }

  renderFullTile() {
    const tileSizeStyling = {
      width: "80%",
      height: "56px",
      maxWidth: "300px"
    };
    const { type } = this.props;
    const soundsForAdder = this.getSoundsForAdder();
    return (
      <li key={`${type} adder`} style={styles.tileLIStyling}>
        <div
          style={{ ...styles.tileBackgroundStyling, ...tileSizeStyling }}
        ></div>
        <div style={styles.tileContentStyling}>
          <label>
            Add new channel:
            <select
              style={styles.selectStyling}
              onChange={this.handleChange}
              placeholder="Choose a channel"
            >
              {soundsForAdder.map(sound => {
                const { slug, name } = sound;
                return (
                  <option key={slug} value={slug}>
                    {name}
                  </option>
                );
              })}
            </select>
          </label>
          <button
            style={styles.listButtonStyling}
            onClick={this.handleAddChannel}
          >
            Add
          </button>
        </div>
      </li>
    );
  }

  render() {
    const { isHighlighted } = this.props;
    return (
      <>{isHighlighted ? this.renderFullTile() : this.renderPlusButton()}</>
    );
  }

  componentDidMount() {
    const defaultAdderOption = this.getSoundsForAdder()[0].slug;
    this.setState({ adderOption: defaultAdderOption });
  }
}

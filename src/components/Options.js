import React, { Component } from "react";

class Options extends Component {
  render() {
    const styling = {
      margin: 0,
      padding: "6px",
      position: "relative"
    };

    const listStyle = {
      position: "50% 50%",
      margin: "8px 16px",
      padding: "0px",
      width: "80%",
      maxWidth: "300px"
    };

    const backgroundStyling = {
      position: "absolute",
      width: "76%",
      height: "56px",
      margin: "0px",
      padding: "0px",
      borderRadius: "6px",
      borderWidth: "1px",
      borderStyle: "solid",
      borderColor: "#ffffff",
      backgroundColor: "#000000",
      opacity: "0.5",
      maxWidth: "300px"
    };

    return (
      <div style={listStyle}>
        <div style={backgroundStyling}></div>
        <div style={styling}>
          <h3>Options</h3>
        </div>
      </div>
    );
  }
}

export default Options;

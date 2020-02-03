import React, { Component } from "react";
import Header from "./Header";

export default class Login extends Component {
  render() {
    const pageStyle = {
      display: "flex",
      flexDirection: "column"
      // alignContent: "flex-end"
    };

    const styling = {
      margin: 0,
      padding: "6px",
      position: "relative"
    };

    const listStyle = {
      // position: "50% 50%",
      margin: "180px 16px 0px 16px",
      padding: "0px",
      width: "80%",
      maxWidth: "300px",
      listStyle: "none",
      alignSelf: "center"
    };

    const textBoxStyle = {
      backgroundColor: "transparent",
      borderStyle: "solid",
      borderWidth: "1px",
      borderRadius: "6px",
      color: "#ffffff",
      margin: "4px"
    };

    const backgroundStyling = {
      position: "absolute",
      width: "80%",
      height: "200px",
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
      <div style={pageStyle}>
        <Header headerText="Log In" />
        <ul style={listStyle}>
          <div style={backgroundStyling}></div>
          <div style={styling}>
            <h3>Enter credentials</h3>
            <label>
              Username
              <input type="text" style={textBoxStyle}></input>
            </label>
            <br />
            <label>
              Password
              <input type="password" style={textBoxStyle}></input>
            </label>
            <br />
            <button>Log In</button>
          </div>
        </ul>
      </div>
    );
  }
}

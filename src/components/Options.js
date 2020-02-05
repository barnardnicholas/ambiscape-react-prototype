import React, { Component } from "react";
import { Link } from "@reach/router";
import * as styles from "../styles";
import Header from "./Header";

class Options extends Component {
  render() {
    const styling = {
      margin: 0,
      padding: "6px",
      position: "relative"
    };

    const listStyle = {
      position: "50% 50%",
      margin: "100px 16px 16px 16px",
      padding: "0px",
      width: "80%",
      maxWidth: "300px",
      listStyle: "none"
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
      <center>
        <Header headerText="Options" />
        <ul style={listStyle}>
          <li>
            <Link to="/settings" className="reactlink">
              <div style={backgroundStyling}></div>
              <div style={styling}>
                <h3>Settings</h3>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/" className="reactlink">
              <div style={backgroundStyling}></div>
              <div style={styling}>
                <h3>Log Out</h3>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/help" className="reactlink">
              <div style={backgroundStyling}></div>
              <div style={styling}>
                <h3>Help</h3>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/about" className="reactlink">
              <div style={backgroundStyling}></div>
              <div style={styling}>
                <h3>About</h3>
              </div>
            </Link>
          </li>
        </ul>
      </center>
    );
  }
}

export default Options;

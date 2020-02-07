import React from "react";
import Header from "./Header";
import { Link } from "@reach/router";
import Footer from "./Footer";
import * as styles from "../styles";

const Home = ({ currentUser }) => {
  const listSizing = {
    margin: "0px 16px 0px 16px",
    width: "80%",
    maxWidth: "300px",
    alignSelf: "center"
  };

  const backgroundSizing = {
    width: "80%",
    height: "56px",
    maxWidth: "300px"
  };

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

  const renderLoginButton = () => {
    const { username, name } = currentUser;
    if (!username) {
      return (
        <Link to="/login" key="login" className="reactlink">
          <li>
            <div
              style={{ ...styles.tileBackgroundStyling, ...backgroundSizing }}
            ></div>
            <div style={styles.tileContentStyling}>
              <h3>Login</h3>
            </div>
          </li>
        </Link>
      );
    } else return null;
  };

  const renderSavedScenarios = () => {
    const { username } = currentUser;
    if (username) {
      return (
        <Link
          to={`/users/${username}/scenarios`}
          key="savedscenarios"
          className="reactlink"
        >
          <li>
            <div
              style={{ ...styles.tileBackgroundStyling, ...backgroundSizing }}
            ></div>
            <div style={styles.tileContentStyling}>
              <h3>Saved Scenarios</h3>
            </div>
          </li>
        </Link>
      );
    }
  };

  const renderFooter = () => {
    const { username, name } = currentUser;
    if (username) {
      console.log(username);
      return <Footer name={name} />;
    }
  };

  return (
    <center style={styles.pageStyle}>
      <header style={styles.titleSyle}>
        <h2 style={{ fontSize: "80px", margin: "120px 0px 20px 0px" }}>
          Ambiscape
        </h2>
        <h3 style={{ fontSize: "20px" }}>Ambient Soundscape Generator</h3>
      </header>
      <ul style={{ ...styles.tileULStyling, ...listSizing }}>
        <li>
          <Link to="/scenarios" key="scenarios" className="reactlink">
            <div
              style={{ ...styles.tileBackgroundStyling, ...backgroundSizing }}
            ></div>
            <div style={styles.tileContentStyling}>
              <h3>Preset Scenarios</h3>
            </div>
          </Link>
        </li>
        {renderSavedScenarios()}
        {renderLoginButton()}
        <li>
          <Link to="/about" className="reactlink">
            <div style={backgroundStyling}></div>
            <div style={styling}>
              <h3>About</h3>
            </div>
          </Link>
        </li>
      </ul>
      {renderFooter()}
    </center>
  );
};

export default Home;

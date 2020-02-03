import React from "react";
import Header from "./Header";
import { Link } from "@reach/router";
import Footer from "./Footer";

const Home = ({ currentUser }) => {
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
    margin: "0px 16px 0px 16px",
    padding: "0px",
    width: "80%",
    maxWidth: "300px",
    listStyle: "none",
    alignSelf: "center"
  };

  const titleSyle = {
    margin: "0px 0px 16px 0px",
    fontSize: "80px",
    opacity: "0.7",
    textShadow: "#ffffff 0 0 0.8rem",
    alignContent: "flex-center",
    justifyContent: "flex-center"
  };

  const backgroundStyling = {
    position: "absolute",
    width: "80%",
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
            <div style={backgroundStyling}></div>
            <div style={styling}>
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
            <div style={backgroundStyling}></div>
            <div style={styling}>
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
    <center style={pageStyle}>
      <header style={titleSyle}>
        <h2 style={{ fontSize: "80px", margin: "120px 0px 20px 0px" }}>
          Ambiscape
        </h2>
        <h3 style={{ fontSize: "20px" }}>Ambient Soundscape Generator</h3>
      </header>
      <ul style={listStyle}>
        <Link to="/scenarios" key="scenarios" className="reactlink">
          <li>
            <div style={backgroundStyling}></div>
            <div style={styling}>
              <h3>Preset Scenarios</h3>
            </div>
          </li>
        </Link>
        {renderLoginButton()}
        {renderSavedScenarios()}
      </ul>
      {renderFooter()}
    </center>
  );
};

export default Home;

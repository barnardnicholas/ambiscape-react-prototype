import React from "react";
import Header from "./Header";
import { Link } from "@reach/router";

const Home = () => {
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
    <>
      <Header headerText="Ambiscape" />
      <center>
        <ul style={listStyle}>
          <Link to="/scenarios" key="scenarios" className="reactlink">
            <li>
              <div style={backgroundStyling}></div>
              <div style={styling}>
                <h3>Preset Scenarios</h3>
              </div>
            </li>
          </Link>
        </ul>
      </center>
    </>
  );
};

export default Home;

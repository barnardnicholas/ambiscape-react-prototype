import React from "react";
import playbutton from "../assets/gui/playbutton3.png";
import stopbutton from "../assets/gui/stopbutton3.png";

const styling = {
  margin: 0,
  padding: "0px 1fr 0px 1fr",
  position: "relative",
  display: "flex",
  alignText: "center"
};

const backgroundStyling = {
  position: "absolute",
  width: "100%",
  height: "60px",
  borderWidth: "1px 0px 0px 0px",
  borderStyle: "solid",
  backgroundColor: "#000000",
  opacity: "0.5",
  cursorEvents: "none",
  margin: "0px",
  padding: "0px"
};

const Footer = ({ name }) => {
  return (
    <div className="transport">
      <div style={backgroundStyling}></div>
      <center>
        <div style={styling}>
          <h3>Logged in as {name}</h3>
        </div>
      </center>
    </div>
  );
};

export default Footer;

import React from "react";
import * as styles from "../styles";
import backarrow from "../assets/gui/backarrow.png";

const styling = {
  height: "60px",
  width: "100%",
  display: "flex",
  flexDirection: "space-between",
  textAlign: "center",
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: 5
};

const backgroundStyling = {
  position: "absolute",
  width: "100%",
  height: "60px",
  borderWidth: "0px 0px 1px 0px",
  borderStyle: "solid",
  backgroundColor: "#000000",
  opacity: "0.5"
};

const h1Styling = {
  textAlign: "center",
  position: "absolute",
  color: "#ffffff",
  zIndex: 2
};

const Header = ({ headerText }) => {
  const goBack = () => {
    console.log("back");
    window.history.back();
  };

  return (
    <header style={styling}>
      <div style={backgroundStyling}></div>
      <center>
        <h1 style={h1Styling}>{headerText}</h1>
      </center>
      <button
        onClick={goBack}
        style={{
          ...styles.transportButtonStyling,
          zIndex: 2,
          borderStyle: "none",
          padding: "4px"
        }}
      >
        <img src={backarrow} height="40px" width="40px" />
      </button>
    </header>
  );
};

export default Header;

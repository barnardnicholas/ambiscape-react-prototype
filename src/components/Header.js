import React from "react";
import * as styles from "../styles";
import backarrow from "../assets/gui/backarrow.png";
import menu from "../assets/gui/menu.png";

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
  // position: "absolute",
  color: "#ffffff"
};

const Header = ({ headerText }) => {
  const goBack = () => {
    console.log("back");
    window.history.back();
  };

  const goToMenu = () => {
    console.log("menu");
  };

  return (
    <header style={styling}>
      <div style={backgroundStyling}></div>
      <div
        style={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "70px 1fr 70px"
        }}
      >
        <button
          onClick={goBack}
          style={{
            ...styles.transportButtonStyling,
            zIndex: 2,
            borderStyle: "none",
            padding: "10px"
          }}
        >
          <img src={backarrow} alt="back" height="32px" width="32px" />
        </button>
        <div style={{ zIndex: 2 }}>
          <h1 style={h1Styling}>{headerText}</h1>
        </div>
        <button
          onClick={goToMenu}
          style={{
            ...styles.transportButtonStyling,
            zIndex: 2,
            borderStyle: "none",
            padding: "10px"
          }}
        >
          <img src={menu} alt="menu" height="32px" width="32px" />
        </button>
      </div>
    </header>
  );
};

export default Header;

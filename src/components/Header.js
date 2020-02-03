import React from "react";

const styling = {
  height: "60px",
  display: "flex",
  flexDirection: "space-between",
  textAlign: "center"
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
  return (
    <header style={styling}>
      <div style={backgroundStyling}></div>
      <center>
        <h1 style={h1Styling}>{headerText}</h1>
      </center>
    </header>
  );
};

export default Header;

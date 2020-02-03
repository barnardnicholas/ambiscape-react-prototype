import React from "react";

export default function ErrorPage() {
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
    // margin: "180px 0px 16px 0px",
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

  return (
    <div style={pageStyle}>
      <header style={titleSyle}>
        <h2 style={{ fontSize: "80px" }}>404</h2>
      </header>
      <ul style={listStyle}>
        <div style={backgroundStyling}></div>
        <div style={styling}>
          <h3>Oops! Nothing to see here...</h3>
        </div>{" "}
      </ul>
    </div>
  );
}

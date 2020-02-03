import React from "react";

const ScenarioCard = ({ scenario }) => {
  const styling = {
    margin: 0,
    padding: "6px",
    position: "relative"
  };

  const listStyle = {
    position: "50% 50%",
    margin: "8px 16px",
    width: "76%",
    maxWidth: "300px"
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

  const { name, slug, color_scheme, is_public, likes } = scenario;

  return (
    <li key={slug} style={listStyle}>
      <div style={backgroundStyling}></div>
      <div style={styling}>
        <h3>{name}</h3>
        {/* <p>{is_public ? "Public" : "Private"}</p>
      <p>{`${likes} likes`}</p> */}
      </div>
    </li>
  );
};

export default ScenarioCard;

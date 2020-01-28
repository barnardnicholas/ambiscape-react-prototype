import React from "react";

const ScenarioCard = ({ scenario }) => {
  const styling = {
    backgroundColor: "#CDE7BE",
    margin: "4px"
  };

  const { name, slug, color_scheme, is_public, likes } = scenario;

  return (
    <li key={slug} style={styling}>
      <h3>{name}</h3>
      <p>{is_public ? "Public" : "Private"}</p>
      <p>{`${likes} likes`}</p>
    </li>
  );
};

export default ScenarioCard;

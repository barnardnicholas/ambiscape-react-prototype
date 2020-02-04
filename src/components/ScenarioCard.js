import React from "react";
import { Link } from "@reach/router";
import * as styles from "../styles";

const ScenarioCard = ({ scenario }) => {
  const listStyle = {
    position: "50% 50%",
    margin: "8px 16px",
    width: "76%",
    maxWidth: "300px"
  };

  const tileSize = {
    maxWidth: "300px",
    width: "76%",
    height: "56px"
  };

  const { name, slug, color_scheme, is_public, likes } = scenario;

  return (
    <li key={slug} style={listStyle}>
      <Link to={`/scenarios/${slug}`} key={slug} className="reactlink">
        <div style={{ ...styles.tileBackgroundStyling, ...tileSize }}></div>
        <div style={styles.tileContentStyling}>
          <h3>{name}</h3>
          {/* <p>{is_public ? "Public" : "Private"}</p>
      <p>{`${likes} likes`}</p> */}
        </div>
      </Link>
    </li>
  );
};

export default ScenarioCard;

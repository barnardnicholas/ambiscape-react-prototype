import React from "react";
import * as styles from "../styles";

const ScenarioListFooter = ({ name }) => {
  return (
    <div className="transport">
      <div style={styles.footerBackgroundStyling}></div>
      <center>
        <div style={styles.footerStyling}>
          <button style={styles.listButtonStyling}>
            <h3>Preset Scenarios</h3>
          </button>
          <button style={styles.listButtonStyling}>
            <h3>My Saved Scenarios</h3>
          </button>
        </div>
      </center>
    </div>
  );
};

export default ScenarioListFooter;

import React from "react";
import * as styles from "../styles";

const ScenarioListFooter = props => {
  const { loadPresetScenarios, loadSavedScenarios } = props;

  const handleLoadPresets = () => {
    loadPresetScenarios();
  };

  const handleLoadSaved = () => {
    loadSavedScenarios();
  };

  return (
    <div className="transport">
      <div style={styles.footerBackgroundStyling}></div>
      <center>
        <div style={styles.footerStyling}>
          <button style={styles.listButtonStyling} onClick={handleLoadPresets}>
            <h3>Preset Scenarios</h3>
          </button>
          <button style={styles.listButtonStyling} onClick={handleLoadSaved}>
            <h3>My Saved Scenarios</h3>
          </button>
        </div>
      </center>
    </div>
  );
};

export default ScenarioListFooter;

import React from "react";
import * as styles from "../styles";
import playbutton from "../assets/gui/playbutton4.png";
import stopbutton from "../assets/gui/stopbutton4.png";
import save from "../assets/gui/save.png";

const styling = {
  margin: 0,
  padding: "6px",
  position: "relative"
  // display: "flex"
};

const buttonStyling = {
  display: "flex-block",
  height: "42px",
  width: "42px",
  margin: "0px 8px",
  alignContent: "center",
  overflow: "hidden",
  padding: 0,
  borderStyle: "none",
  backgroundColor: "transparent"
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

const Transport = ({ startScenario, stopScenario, saveScenario }) => {
  const handleStart = () => {
    startScenario();
  };

  const handleStop = () => {
    stopScenario();
  };

  const handleSave = () => {
    saveScenario();
  };

  return (
    <div className="transport">
      <div style={backgroundStyling}></div>
      <div style={styles.footerStyling}>
        <button
          onClick={handleStart}
          className="transportbutton"
          style={styles.transportButtonStyling}
        >
          <center>
            <img src={playbutton} alt="play" width="30px" height="30px" />
          </center>
        </button>
        <button
          onClick={handleStop}
          className="transportbutton"
          style={styles.transportButtonStyling}
        >
          <center>
            <img src={stopbutton} alt="stop" width="30px" height="30px" />
          </center>
        </button>
        <button
          onClick={handleSave}
          className="transportbutton"
          style={styles.transportButtonStyling}
        >
          <center>
            <img src={save} alt="save" width="30px" height="30px" />
          </center>
        </button>
      </div>
    </div>
  );
};

export default Transport;

import React from "react";
import playbutton from "../assets/gui/playbutton3.png";
import stopbutton from "../assets/gui/stopbutton3.png";

const styling = {
  margin: 0,
  padding: "6px",
  position: "relative",
  display: "flex"
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

const Transport = ({ startScenario, stopScenario }) => {
  const handleStart = () => {
    startScenario();
  };

  const handleStop = () => {
    stopScenario();
  };

  return (
    <div className="transport">
      <div style={backgroundStyling}></div>
      <div style={styling}>
        <button
          onClick={handleStart}
          className="transportbutton"
          style={buttonStyling}
        >
          <img src={playbutton} alt="play" width="42px" height="42px" />
        </button>
        <button
          onClick={handleStop}
          className="transportbutton"
          style={buttonStyling}
        >
          <img src={stopbutton} alt="stop" width="42px" height="42px" />
        </button>
      </div>
    </div>
  );
};

export default Transport;

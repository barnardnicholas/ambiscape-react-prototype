import React from "react";

const styling = {
  margin: 0,
  padding: "6px",
  position: "relative"
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
  padding: "0px",
}

const Transport = ({ startScenario, stopScenario }) => {
  const handleStart = () => {
    startScenario();
  };

  const handleStop = () => {
    stopScenario();
  };

  return (
    <div className="transport" >
      <div style={backgroundStyling}></div>
      <div style={styling} >
      <button onClick={handleStart} className="transportbutton">Start</button>
      <button onClick={handleStop} className="transportbutton">Stop</button>
      </div>
    </div>
  );
};

export default Transport;

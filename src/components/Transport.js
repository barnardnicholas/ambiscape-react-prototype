import React from "react";

const styling = {
  // border: "1px solid",
  backgroundColor: "#ECDD7B"
};

const Transport = ({ startScenario, stopScenario }) => {
  const handleStart = () => {
    startScenario();
  };
  const handleStop = () => {
    stopScenario();
  };

  return (
    <div className="transport" style={styling}>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
};

export default Transport;

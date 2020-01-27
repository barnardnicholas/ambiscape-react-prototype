import React from "react";

const styling = {
  // border: "1px solid",
  backgroundColor: "#ECDD7B"
};

const Transport = () => {
  return (
    <div className="transport" style={styling}>
      <button>Start</button>
      <button>Stop</button>
    </div>
  );
};

export default Transport;

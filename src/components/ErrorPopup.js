import React from "react";
import * as styles from "../styles";

const ErrorPopup = ({ code, message, closeError }) => {
  const tileSize = {
    // maxWidth: "300px",
    width: "90%",
    height: "110px"
  };

  return (
    <center>
      <div
        style={{ ...styles.tileULStyling, margin: "30px", alignSelf: "center" }}
      >
        <div style={styles.blockerStyling}></div>
        <center>
          <div
            style={{ ...styles.tileBackgroundStyling, ...tileSize, zIndex: 4 }}
          ></div>
        </center>
        <div style={{ ...styles.tileContentStyling, ...tileSize, zIndex: 5 }}>
          <h3 style={{ margin: "0" }}>{code || "Oops!"}</h3>
          <br />
          {message || "Something went wrong..."}
          <br />
          <button style={styles.listButtonStyling} onClick={closeError}>
            OK
          </button>
        </div>
      </div>
    </center>
  );
};

export default ErrorPopup;

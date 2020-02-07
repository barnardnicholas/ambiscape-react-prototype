import React from "react";
import * as styles from "../styles";

export default function ErrorPage() {
  const listStyle = {
    margin: "0px 16px 0px 16px",
    width: "80%",
    maxWidth: "300px",
    alignSelf: "center"
  };

  const backgroundSizeStyling = {
    position: "absolute",
    maxWidth: "300px",
    width: "80%",
    height: "120px"
  };

  return (
    <div style={styles.pageStyle}>
      <header style={styles.titleSyle}>
        <h2 style={{ fontSize: "80px" }}>404</h2>
      </header>
      <ul style={{ ...styles.tileULStyling, ...listStyle }}>
        <div
          style={{ ...styles.tileBackgroundStyling, ...backgroundSizeStyling }}
        ></div>
        <div style={styles.tileContentStyling}>
          <h3>Oops! Nothing to see here...</h3>
          <h3>We're still under construction, please bear with us!</h3>
        </div>{" "}
      </ul>
    </div>
  );
}

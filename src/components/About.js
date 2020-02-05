import React from "react";
import Header from "./Header";
import * as styles from "../styles";

const About = () => {
  const styling = {
    margin: 0,
    padding: "6px",
    position: "relative"
  };

  const listStyle = {
    position: "50% 50%",
    margin: "100px 16px 16px 16px",
    padding: "0px",
    width: "80%",
    maxWidth: "400px",
    listStyle: "none"
  };

  const backgroundStyling = {
    position: "absolute",
    width: "76%",
    height: "340px",
    margin: "0px",
    padding: "0px",
    borderRadius: "6px",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "#ffffff",
    backgroundColor: "#000000",
    opacity: "0.5",
    maxWidth: "400px"
  };

  const linkStyling = {
    color: "#66ffe5"
  };

  return (
    <center>
      <Header headerText="About Ambiscape" />
      <ul style={listStyle}>
        <li>
          <div style={backgroundStyling}></div>
          <div style={styling}>
            <p>
              This application was developed as the final project of our
              Northcoders coding bootcamp. We were given two and a half weeks to
              come up with an idea, test the viability of the technology and
              create the application you are currently accessing. We decided on
              a back end of PSQL and a front end of React and React Native for
              the web version and application respectively. We hope you enjoy
              it.
              <br />
              <br />
              If you wish to contact us for any reason you can find us on
              LinkedIn:
              <br />
              Sarah Vidler -
              <a
                style={linkStyling}
                href="https://www.linkedin.com/in/sarah-vidler-077644138/"
              >
                https://www.linkedin.com/in/sarah-vidler-077644138/
              </a>
              <br />
              Stella Martin -
              <a
                style={linkStyling}
                href="https://uk.linkedin.com/in/stella-martin-974469173/"
              >
                https://uk.linkedin.com/in/stella-martin-974469173/
              </a>
              <br />
              Robert Haworth-
              <a
                style={linkStyling}
                href="https://www.linkedin.com/in/robert-haworth-142b7a10a/"
              >
                https://www.linkedin.com/in/robert-haworth-142b7a10a/
              </a>
              <br />
              Nick Barnard-
              <a
                style={linkStyling}
                href="https://www.linkedin.com/in/barnardnicholas/"
              >
                https://www.linkedin.com/in/barnardnicholas/
              </a>
              <br />
              Sam The Mansplainer- (He’ll tell you later)
              <br />
              <br />
              If you wish to view the repo;
              <br />
              <a style={linkStyling} href="https://github.com/Team-Hypnotoad">
                https://github.com/Team-Hypnotoad
              </a>
            </p>
          </div>
        </li>
      </ul>
    </center>
  );
  return <div></div>;
};

export default About;

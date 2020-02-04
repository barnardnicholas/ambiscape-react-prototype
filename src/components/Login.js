import React, { Component } from "react";
import Header from "./Header";
import users from "../data/users";

export default class Login extends Component {
  state = {
    usernameInput: "",
    passwordInput: ""
  };

  handleChangeUserName = event => {
    const { value } = event.target;
    this.setState({ usernameInput: value });
  };

  handleChangePassword = event => {
    const { value } = event.target;
    this.setState({ passwordInput: value });
  };

  handleSubmit(event) {
    event.preventDefault();
  }

  handleLogIn = () => {
    const { usernameInput, passwordInput } = this.state;
    const { switchUser } = this.props;
    switchUser(usernameInput, passwordInput);
  };

  handleSignUp = () => {
    const { usernameInput, passwordInput } = this.state;
    const { createUser } = this.props;
    createUser(usernameInput, passwordInput);
  };

  render() {
    const pageStyle = {
      display: "flex",
      flexDirection: "column"
      // alignContent: "flex-end"
    };

    const styling = {
      margin: 0,
      padding: "6px",
      position: "relative"
    };

    const listStyle = {
      // position: "50% 50%",
      margin: "180px 16px 0px 16px",
      padding: "0px",
      width: "80%",
      maxWidth: "300px",
      listStyle: "none",
      alignSelf: "center"
    };

    const textBoxStyle = {
      backgroundColor: "transparent",
      borderStyle: "solid",
      borderWidth: "1px",
      borderRadius: "6px",
      color: "#ffffff",
      margin: "4px",
      outline: "none",
      padding: "2px"
    };

    const backgroundStyling = {
      position: "absolute",
      width: "80%",
      height: "200px",
      margin: "0px",
      padding: "0px",
      borderRadius: "6px",
      borderWidth: "1px",
      borderStyle: "solid",
      borderColor: "#ffffff",
      backgroundColor: "#000000",
      opacity: "0.5",
      maxWidth: "300px"
    };

    const { usernameInput, passwordInput } = this.state;
    return (
      <div style={pageStyle}>
        <Header headerText="Log In" />
        <ul style={listStyle}>
          <div style={backgroundStyling}></div>
          <form style={styling} onSubmit={this.handleSubmit}>
            <h3>Enter credentials</h3>
            <label>
              Username
              <input
                type="text"
                style={textBoxStyle}
                onChange={this.handleChangeUserName}
                value={usernameInput}
              ></input>
            </label>
            <br />
            <label>
              Password
              <input
                type="password"
                style={textBoxStyle}
                onChange={this.handleChangePassword}
                value={passwordInput}
              ></input>
            </label>
            <br />
            <button onClick={this.handleLogIn}>Log In</button>
            <button onClick={this.handleSignUp}>Sign Up</button>
          </form>
        </ul>
      </div>
    );
  }
}

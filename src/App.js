import React, { Component } from "react";
import "./App.css";
import { Router, navigate } from "@reach/router";
import SingleScenario from "./components/SingleScenario";
import ScenarioList from "./components/ScenarioList";
import Home from "./components/Home";
import Login from "./components/Login";
import users from "./data/users";
import ErrorPage from "./components/ErrorPage";
import * as firebase from "./utils/user-auth";
import ErrorPopup from "./components/ErrorPopup";

class App extends Component {
  state = {
    hasError: false,
    error: {
      code: "",
      message: ""
    },
    testUsers: false,
    currentUser: {
      username: "",
      fb_uid: "",
      email: "",
      user_id: 0,
      name: "",
      avatar_url: "",
      saved_scenarios: ""
    }
  };
  // state = {
  //   testUsers: true,
  //   currentUser: {
  //     username: "jessjelly",
  //     name: "Jess Jelly",
  //     avatar_url:
  //       "https://s-media-cache-ak0.pinimg.com/564x/39/62/ec/3962eca164e60cf46f979c1f57d4078b.jpg",
  //     saved_scenarios: ""
  //   }
  // };

  switchUser = (email, password) => {
    const { currentUser, testUsers } = this.state;
    if (testUsers) {
      const filteredUser = users.filter(user => {
        return user.email === email;
      })[0];
      if (filteredUser) {
        this.setState({ currentUser: filteredUser });
        navigate("/");
      } else {
        navigate("/error");
      }
    } else {
      firebase
        .signIn(email, password)
        .then(response => {
          const filteredUser = users.filter(user => {
            return user.fb_uid === response.user.uid;
          })[0];
          const {
            username,
            name,
            user_id,
            fb_uid,
            email,
            avatar_url,
            saved_scenarios
          } = filteredUser;
          this.setState({
            currentUser: {
              username: username,
              user_id: user_id,
              email: email,
              fb_uid: fb_uid,
              name: name,
              avatar_url: avatar_url,
              saved_scenarios: saved_scenarios
            }
          });
          navigate("/");
        })
        .catch(err => {
          const { code, message } = err;
          this.throwError(code, message);
        });
    }
  };

  createUser = (email, password) => {
    firebase.createUser(email, password);
  };

  throwError = (code, message) => {
    this.setState({
      hasError: true,
      error: { code: code, message: message }
    });
  };

  renderErrorPopup() {
    const { hasError, error } = this.state;
    if (hasError) {
      return (
        <ErrorPopup
          code={error.code}
          message={error.message}
          closeError={this.closeErrorPopup}
        />
      );
    }
  }

  closeErrorPopup = () => {
    const { hasError, error } = this.state;
    this.setState({ hasError: false, error: { code: "", message: "" } });
  };

  componentDidMount() {}

  render() {
    const { currentUser } = this.state;
    return (
      <center>
        <div className="App">
          <Router>
            <Home path="/" currentUser={currentUser} />
            <SingleScenario path="/scenarios/:scenario_id" />
            <ScenarioList path="/scenarios" currentUser={currentUser} />
            <ScenarioList
              path="/users/:username/scenarios"
              currentUser={currentUser}
            />
            <Login
              path="/login"
              switchUser={this.switchUser}
              createUser={this.createUser}
            />
            <ErrorPage path="/error" />
            <ErrorPage default />
          </Router>
          {this.renderErrorPopup()}
        </div>
      </center>
    );
  }
}

export default App;

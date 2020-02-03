import React, { Component } from "react";
import "./App.css";
import { Router, navigate } from "@reach/router";
import SingleScenario from "./components/SingleScenario";
import ScenarioList from "./components/ScenarioList";
import Home from "./components/Home";
import Login from "./components/Login";
import users from "./data/users";
import ErrorPage from "./components/ErrorPage";

class App extends Component {
  // state = {
  //   currentUser: {
  //     username: "",
  //     name: "",
  //     avatar_url: "",
  //     saved_scenarios: ""
  //   }
  // };
  state = {
    currentUser: {
      username: "jessjelly",
      name: "Jess Jelly",
      avatar_url:
        "https://s-media-cache-ak0.pinimg.com/564x/39/62/ec/3962eca164e60cf46f979c1f57d4078b.jpg",
      saved_scenarios: ""
    }
  };

  switchUser = username => {
    const { currentUser } = this.state;
    const filteredUser = users.filter(user => {
      return user.username === username;
    })[0];
    if (filteredUser) {
      this.setState({ currentUser: filteredUser });
      navigate("/");
    } else {
      navigate("/error");
    }
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
            <Login path="/login" switchUser={this.switchUser} />
            <ErrorPage path="/error" />
            <ErrorPage default />
          </Router>
        </div>
      </center>
    );
  }
}

export default App;

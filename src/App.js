import React, { Component } from "react";
import "./App.css";
import { Router } from "@reach/router";
import SingleScenario from "./components/SingleScenario";
import ScenarioList from "./components/ScenarioList";
import Home from "./components/Home";
import Login from "./components/Login";
import users from "./data/users";

class App extends Component {
  state = {
    currentUser: {
      username: "",
      name: "",
      avatar_url: "",
      saved_scenarios: ""
    }
  };

  switchUser = username => {
    const { currentUser } = this.state;
    const filteredUser = users.filter(user => {
      return user.username === username;
    })[0];
    this.setState({ currentUser: filteredUser });
  };

  componentDidMount() {}

  render() {
    return (
      <center>
        <div className="App">
          <Router>
            <Home path="/" />
            <SingleScenario path="/scenarios/:scenario_id" />
            <ScenarioList path="/scenarios" />
            <Login path="/login" switchUser={this.switchUser} />
          </Router>
        </div>
      </center>
    );
  }
}

export default App;

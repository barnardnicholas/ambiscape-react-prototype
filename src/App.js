import React, { Component } from "react";
import "./App.css";
import { Router, navigate } from "@reach/router";
import SingleScenario from "./components/SingleScenario";
import ScenarioList from "./components/ScenarioList";
import Home from "./components/Home";
import Login from "./components/Login";
import users from "./data/users";
import ErrorPage from "./components/ErrorPage";
import * as firebase from './utils/user-auth'

class App extends Component {
  state = {
    currentUser: {
      username: "",
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
    // if (testUsers) {
    //   const filteredUser = users.filter(user => {
    //     return user.username === username;
    //   })[0];
    //   if (filteredUser) {
    //     this.setState({ currentUser: filteredUser });
    //     navigate("/");
    //   } else {
    //     navigate("/error");
    //   }
    // } else {
      // this will be replaced with REST backend
      console.log(`password ${password}`)
      firebase.signIn(email, password).then(uid => {
        const filteredUser = users.filter(user => {
          return user.fb_uid === uid
        })[0];
        const {username, name, user_id, fb_uid, email, avatar_url, saved_scenarios } = filteredUser;
        this.setState({
          currentUser: {
            username: username,
            user_id: user_id,
            email: email,
            fb_uid: fb_uid,
            name: name,
            avatar_url:
              avatar_url,
            saved_scenarios: saved_scenarios
          }
        });
      })
      navigate("/");
    // }
  };

  createUser = (email, password) => {
    firebase.createUser(email, password)
  }

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
            <Login path="/login" switchUser={this.switchUser} createUser={this.createUser}/>
            <ErrorPage path="/error" />
            <ErrorPage default />
          </Router>
        </div>
      </center>
    );
  }
}

export default App;

import React from "react";
import "./App.css";
import { Router } from "@reach/router";
import SingleScenario from "./components/SingleScenario";
import ScenarioList from "./components/ScenarioList";
import Home from "./components/Home";
import Options from "./components/Options";
import Login from './components/Login'
import ErrorPage from "./components/ErrorPage";

const App = () => {
  return (
    <center>
      <div className="App">
        <Router>
          <Home path="/" />
          <ScenarioList path="/scenarios" />
          <SingleScenario path="/scenarios/:scenario_id" />
          <Options path="/options"/>
          <Login path="/login" />
          <ErrorPage default />
        </Router>
      </div>
    </center>
  );
};

export default App;

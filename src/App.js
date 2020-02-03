import React from "react";
import "./App.css";
import { Router } from "@reach/router";
import SingleScenario from "./components/SingleScenario";
import ScenarioList from "./components/ScenarioList";
import Home from "./components/Home";

const App = () => {
  return (
    <center>
      <div className="App">
        <Router>
          <Home path="/" />
          <SingleScenario path="/scenarios/:scenario_id" />
          <ScenarioList path="/scenarios" />
        </Router>
      </div>
    </center>
  );
};

export default App;

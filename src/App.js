import React from "react";
import "./App.css";
import { Router } from "@reach/router";
import SingleScenario from "./components/SingleScenario";
import ScenarioList from "./components/ScenarioList";

const App = () => {
  return (
    <center>
      <div className="App">
        <Router>
          <SingleScenario path="/scenarios/:scenario_id" />
          <ScenarioList path="/scenarios" />
          <ScenarioList path="/" />
        </Router>
      </div>
    </center>
  );
};

export default App;

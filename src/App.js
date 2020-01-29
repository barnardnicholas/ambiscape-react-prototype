import React from "react";
import "./App.css";
import Header from "./components/Header";
import { Router } from "@reach/router";
import SingleScenario from "./components/SingleScenario";
import ScenarioList from "./components/ScenarioList";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Router>
        <SingleScenario path="/scenarios/:scenario_id" />
        <ScenarioList path="/scenarios" />
      </Router>
    </div>
  );
};

export default App;

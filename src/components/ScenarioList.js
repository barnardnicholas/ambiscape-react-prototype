import React, { Component } from "react";
import ScenarioCard from "./ScenarioCard";
import Header from "./Header";
import * as api from "../utils/api";
// import * as api from "../utils/dummy-api";
import * as engine from "../utils/audio-engine";
import ScenarioListFooter from "./ScenarioListFooter";

class ScenarioList extends Component {
  state = {
    scenarios: [],
    headerText: "Preset Scenarios"
  };

  componentDidMount() {
    const { path } = this.props;
    const { username, user_id } = this.props.currentUser;
    if (path === "/scenarios") {
      this.loadPresetScenarios();
    } else {
      if (typeof user_id === "number" && user_id > 0) {
        this.loadSavedScenarios(user_id);
      } else {
        this.loadPresetScenarios();
      }
    }
    engine.clearAllHowls();
  }

  loadPresetScenarios = () => {
    // const presetScenarios = api.getPresetScenarios();
    // this.setState({
    //   scenarios: presetScenarios,
    //   headerText: "Preset Scenarios"
    // });
    api.getPresetScenarios().then(scenarios => {
      console.log(scenarios);
      this.setState({
        scenarios: scenarios,
        headerText: "Preset Scenarios"
      });
    });
  };

  loadSavedScenarios = () => {
    const { user_id } = this.props.currentUser;
    const savedScenarios = api.getScenariosByUserId(user_id);
    this.setState({
      scenarios: savedScenarios,
      headerText: "My Saved Scenarios"
    });
  };

  renderFooter = () => {
    const { username, name } = this.props.currentUser;
    if (username) {
      return (
        <ScenarioListFooter
          loadPresetScenarios={this.loadPresetScenarios}
          loadSavedScenarios={this.loadSavedScenarios}
        />
      );
    } else return null;
  };

  render() {
    const { scenarios, headerText } = this.state;
    const styling = {
      margin: "70px 0px",
      padding: "0px",
      listStyle: "none"
    };
    return (
      <>
        <Header headerText={headerText} />
        <div style={{ overflow: "hidden" }}>
          <ul style={styling}>
            {scenarios.map(scenario => {
              const { slug } = scenario;
              return (
                <center key={slug}>
                  <ScenarioCard scenario={scenario} />
                </center>
              );
            })}
          </ul>
        </div>
        {this.renderFooter()}
      </>
    );
  }
}

export default ScenarioList;

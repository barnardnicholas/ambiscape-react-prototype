import React, { Component } from "react";
import ScenarioCard from "./ScenarioCard";
import Header from "./Header";
import * as api from "../utils/api";
import * as engine from "../utils/audio-engine";
import ScenarioListFooter from "./ScenarioListFooter";

class ScenarioList extends Component {
  state = {
    scenarios: [
      {
        name: "",
        slug: "",
        creator_id: 1,
        color_scheme: ["#561D25", "#CE8147", "#ECDD7B", "#D3E298", "#CDE7BE"],
        is_public: null,
        likes: 0,
        sounds: []
      }
    ]
  };

  componentDidMount() {
    const fetchedScenarios = api.getAllScenarios();
    this.setState({ scenarios: fetchedScenarios });
    engine.clearAllHowls();
  }

  renderFooter = () => {
    const { username, name } = this.props.currentUser;
    if (username) {
      return <ScenarioListFooter />;
    } else return null;
  };

  render() {
    const { scenarios } = this.state;
    const styling = {
      margin: "70px 0px",
      padding: "0px",
      listStyle: "none"
    };
    return (
      <>
        <Header headerText="Scenarios" />
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

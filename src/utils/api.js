import sounds from "../data/sounds";
import scenarios from "../data/scenarios";
import users from "../data/users";
import * as utils from "../utils/utils";
import axios from "axios";

const baseURL = "https://ambiscape.herokuapp.com/api";

export const getAllScenarios = () => {
  return axios.get(`${baseURL}/scenarios`).then(response => {
    console.log(response);
  });
};

export const getPresetScenarios = () => {
  // will have creator_id of 1
  return axios.get(`${baseURL}/scenarios`).then(response => {
    const { scenarios } = response.data;
    const parsedScenarios = scenarios.map(scenario => {
      const { sounds, ...keys } = scenario;
      return { ...keys, sounds: JSON.parse(sounds) };
    });
    return parsedScenarios.filter(scenario => {
      return scenario.creator_id === 1;
    });
  });
};

export const getScenariosByUserId = id => {
  return axios.get(`${baseURL}/users/${id}/scenarios`).then(response => {
    console.log(response);
  });
};

export const getScenarioBySlug = slug => {
  return axios.get(`${baseURL}/scenarios/${slug}`).then(response => {
    console.log(response);
  });
};

export const getScenarioById = id => {
  return axios.get(`${baseURL}/scenarios/${id}`).then(response => {
    console.log(response);
  });
};

export const getAllSounds = type => {
  return axios.get(`${baseURL}/sounds`).then(response => {
    console.log(response);
  });
};

export const getSoundsByType = type => {
  return axios.get(`${baseURL}/sounds`).then(response => {
    console.log(response);
  });
};

export const getSoundById = id => {
  return axios.get(`${baseURL}/sounds/${id}`).then(response => {
    console.log(response);
  });
};

export const getSoundBySlug = slug => {
  return axios.get(`${baseURL}/sounds/${slug}`).then(response => {
    console.log(response);
  });
};

export const getUserByUID = uid => {
  return axios.get(`${baseURL}/users/${uid}`).then(response => {
    console.log(response);
  });
};

export const postScenario = scenario => {
  return axios.post(`${baseURL}/scenarios`, scenario).then(response => {
    console.log(response);
  });
};

export const patchScenario = (scenario_id, scenario) => {
  return axios
    .patch(`${baseURL}/scenarios/${scenario_id}`, scenario)
    .then(response => {
      console.log(response);
    });
};

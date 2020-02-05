import sounds from "../data/sounds";
import scenarios from "../data/scenarios";
import users from "../data/users";
import * as utils from "../utils/utils";

export const getScenarioBySlug = slug => {
  return scenarios.filter(scenario => {
    return scenario.slug === slug;
  })[0];
};

export const getScenarioById = id => {
  return scenarios.filter(scenario => {
    return scenario.id === id;
  })[0];
};

export const getSoundById = id => {
  return sounds.filter(sound => {
    return sound.id === id;
  })[0];
};

export const getSoundBySlug = slug => {
  return sounds.filter(sound => {
    return sound.slug === slug;
  })[0];
};

export const getSoundsByType = type => {
  return sounds.filter(sound => {
    return sound.type === type;
  });
};

export const getAllScenarios = () => {
  return scenarios;
};

export const getPresetScenarios = () => {
  return scenarios.filter(scenario => {
    return scenario.creator_id === 0;
  });
};

export const getScenariosByUserId = id => {
  return scenarios.filter(scenario => {
    return scenario.creator_id === id;
  });
};

export const getUserByUID = uid => {
  return users.filter(user => {
    return user.fb_uid === uid;
  })[0];
};

export const postScenario = scenario => {
  scenarios.push(scenario);
};

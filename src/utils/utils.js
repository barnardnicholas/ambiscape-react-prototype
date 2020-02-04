import * as api from "./api";

export const getSlugsFromChannels = (channelsArray, type) => {
  const filteredChannels = channelsArray.filter(channel => {
    return channel.type === type;
  });
  return filteredChannels.map(channel => {
    return channel.slug;
  });
};

export const makeChannelFromSlug = (scenarioSlug, soundSlug) => {
  const thisSound = api.getSoundBySlug(soundSlug)
  const {sounds} = api.getScenarioBySlug(scenarioSlug)
  const thisChannel = sounds.filter(sound => {
    return sound.slug === soundSlug
  })[0]
  const result = {...thisSound, ...thisChannel.volume, ...thisChannel.pan, ...thisChannel.frequency}
  return result
}

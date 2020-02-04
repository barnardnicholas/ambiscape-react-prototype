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
  const thisSound = api.getSoundBySlug(soundSlug);
  const { sounds } = api.getScenarioBySlug(scenarioSlug);
  const thisChannel = sounds.filter(sound => {
    return sound.slug === soundSlug;
  })[0];
  const result = {
    ...thisSound,
    ...thisChannel.volume,
    ...thisChannel.pan,
    ...thisChannel.frequency
  };
  return result;
};

export const makeScenarioFromChannels = (
  name,
  slug,
  colorScheme,
  channels,
  currentUser
) => {
  const { user_id } = currentUser;
  const newSounds = channels.map(channel => {
    const { volume, pan, id, slug, frequency } = channel;
    const newSound = { volume: volume, pan: pan, id: id, slug: slug };
    if (frequency) {
      newSound.frequency = frequency;
    }
    return newSound;
  });
  return {
    name: name,
    slug: slug,
    creator_id: user_id,
    color_scheme: colorScheme,
    likes: 0,
    sounds: newSounds
  };
};

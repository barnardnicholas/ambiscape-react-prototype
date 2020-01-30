import { audioData } from "../data/sounds-index";
const { Howl, Howler } = require("howler");
// const spatial = require("howler/src/plugins/howler.spatial.js");

let allHowls = {};

const createHowl = (channel, url) => {
  const { stereo, loop, html5, type, slug } = channel;
  const filePath = audioData[type][slug][url];
  const thisHowl = new Howl({
    src: [filePath],
    stereo: stereo,
    loop: loop,
    html5: html5
  });
  allHowls[url] = thisHowl;
};

export const loadAllHowls = channels => {
  channels.forEach(channel => {
    const { urls, slug } = channel;
    urls.forEach(url => {
      createHowl(channel, url);
    });
  });
};

export const playHowl = (url, vol, pan) => {
  const thisHowl = allHowls[url];
  if (vol) {
    thisHowl.volume(vol);
  }
  if (pan) {
    thisHowl.stereo(pan);
  }
  if (allHowls[url]) {
    console.log(`Playing ${url}`);
    thisHowl.play();
  }
};

export const stopHowl = url => {
  if (allHowls[url]) {
    allHowls[url].stop();
  }
};

export const changeVolumeOfHowl = (url, volume) => {
  if (allHowls[url]) {
    allHowls[url].volume(volume);
  }
};

export const changePanOfHowl = (url, pan) => {
  const thisPan = parseFloat(pan);
  if (allHowls[url]) {
    allHowls[url].stereo(thisPan);
  }
};

export const playBackgroundHowls = channels => {
  if (!allHowls) {
    console.log("ERROR = No sounds loaded");
  } else {
    channels.forEach(channel => {
      const { type, urls } = channel;
      const thisURL = urls[0];
      if (type === "background") {
        playHowl(thisURL);
      }
    });
  }
};

export const clearAllHowls = () => {
  Howler.volume(0);
  allHowls = {};
  Howler.volume(1);
};

export const randomSoundSpawner = (playerFunction, slug, playing) => {
  let interval = Math.round(Math.random() * (5000 - 500)) + 500;
  console.log(`interval: ${interval}ms`);
  setTimeout(() => {
    playerFunction(slug);
    if (playing) {
      randomSoundSpawner(playerFunction, slug, playing);
    }
  }, interval);
};

export const loop = (cb, iq, slug) => {
  if (iq.length > 0) {
    const thisInterval = iq.shift();
    setTimeout(() => {
      iq.push(Math.random() * 5000 + 1000);
      console.log(slug);
      loop(cb, iq);
    }, thisInterval);
  }
};

export const loopParent = (func, slug, iq) => {
  func(slug, iq);
};

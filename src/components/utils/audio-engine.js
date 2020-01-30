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

export const playHowl = url => {
  const thisHowl = allHowls[url];
  if (allHowls[url]) {
    thisHowl.play();
  }
};

export const stopHowl = url => {
  if (allHowls[url]) {
    allHowls[url].stop();
  }
};

export const testVolumeHowl = (url, volume) => {
  if (allHowls[url]) {
    allHowls[url].volume(volume);
  }
};

export const testPanHowl = (url, pan) => {
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

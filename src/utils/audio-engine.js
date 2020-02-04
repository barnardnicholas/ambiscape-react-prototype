import audioData from "../audio/sounds-index";
const { Howl, Howler } = require("howler");
// const spatial = require("howler/src/plugins/howler.spatial.js");

let allHowls = {};
let shouldPlay = false;

const createHowl = (channel, url) => {
  const { stereo, loop, html5, type, slug } = channel;
  const filePath = audioData[type][slug][url];
  const howlData = {
    src: [filePath],
    stereo: stereo,
    loop: loop,
    html5: false
  };
  // if (type === "background") {
  //   howlData.html5 = true;
  // }
  const thisHowl = new Howl(howlData);

  allHowls[url] = thisHowl;
};

export const loadHowlsForOneChannel = channel => {
  const { urls } = channel;
  urls.forEach(url => {
    createHowl(channel, url);
  });
};

export const loadAllHowls = channels => {
  channels.forEach(channel => {
    const { urls, slug } = channel;
    urls.forEach(url => {
      createHowl(channel, url);
    });
  });
};

export const playHowl = (url, volume, pan) => {
  const thisHowl = allHowls[url];
  if (thisHowl) {
    let newVolume = volume * Math.random();
    let newPan = Math.random() * 2 - 1 * pan;
    if (newPan < -0.8) {
      newPan = -0.8;
    } else if (newPan > 0.8) {
      newPan = 0.8;
    }
    if (typeof newVolume === "number") {
      thisHowl.volume(newVolume <= 1 ? newVolume : 1);
    }
    if (typeof newPan === "number") {
      thisHowl.stereo(newPan);
    }
    if (allHowls[url]) {
      if (shouldPlay) {
        console.log(
          `Playing ${url}, VOL: ${newVolume} PAN: ${newPan} URL: ${url}`
        );
      }
      thisHowl.play();
    }
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
      const { type, urls, volume, pan } = channel;
      const thisURL = urls[0];
      if (type === "background") {
        playHowl(thisURL, volume, pan);
      }
    });
  }
};

export const startRandomHowls = () => {
  console.log("startRandomHowls");
  shouldPlay = true;
};

export const stopRandomHowls = () => {
  console.log("stopRandomHowls");
  shouldPlay = false;
};

export const clearAllHowls = () => {
  console.log("clearAllHowls");
  shouldPlay = false;
  Howler.volume(0);
  allHowls = {};
  Howler.volume(1);
};

export const loop = (slug, frequency, playNext) => {
  const standardInterval = (1 - frequency) * 16000 + 4000;
  const intervalVariation = (standardInterval / 5) * Math.random();
  const thisInterval = standardInterval + intervalVariation;

  setTimeout(() => {
    if (shouldPlay) {
      playNext(slug);
      console.log(`Interval: ${thisInterval}ms`);
      loop(slug, frequency, playNext);
    }
  }, thisInterval);
};

export const muteAll = () => {
  Howler.volume(0);
};

export const unmuteAll = () => {
  Howler.volume(1);
};

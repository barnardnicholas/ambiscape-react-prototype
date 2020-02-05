import audioData from "../audio/sounds-index";
const { Howl, Howler } = require("howler");
// const spatial = require("howler/src/plugins/howler.spatial.js");

let allHowls = {};
let loops = {};
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
  if (type === "random") {
    loops[slug] = true;
  }
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

export const initializeAllHowls = channels => {
  channels.forEach(channel => {
    const { urls, volume, pan } = channel;
    urls.forEach(url => {
      if (typeof volume === "number") {
        allHowls[url].volume(volume);
      }
      if (typeof pan === "number") {
        allHowls[url].stereo(pan);
      }
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

export const toggleMuteHowl = url => {
  const currentMuteState = allHowls[url].mute();
  allHowls[url].mute(!currentMuteState);
};

export const soloChannel = channel => {
  const { urls } = channel;
  const allURLs = Object.keys(allHowls);
  allURLs.forEach(url => {
    allHowls[url].mute(true);
  });
  urls.forEach(url => {
    allHowls[url].mute(false);
  });
};

export const unSoloChannel = () => {
  const allURLs = Object.keys(allHowls);
  allURLs.forEach(url => {
    allHowls[url].mute(false);
  });
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

export const startOneRandomChannel = (slug, frequency, playNext) => {
  loops[slug] = true;
  loop(slug, frequency, playNext);
};

export const stopOneRandomChannel = channel => {
  const { slug, urls } = channel;
  loops[slug] = false;
  // urls.forEach(url => {
  //   allHowls[url] = null;
  // });
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
  if (loops[slug]) {
    setTimeout(() => {
      playNext(slug);
      console.log(`Interval: ${thisInterval}ms`);

      loop(slug, frequency, playNext);
    }, thisInterval);
  }
};

export const muteAll = () => {
  Howler.volume(0);
};

export const unmuteAll = () => {
  Howler.volume(1);
};

import { audioData } from "../data/sounds-index";
const { Howl, Howler } = require("howler");
const spatial = require("howler/src/plugins/howler.spatial.js");

const bgHowls = {};
let testHowls = {};
let isPlaying = false;

export const playBgSounds = bgSlugsArray => {
  bgSlugsArray.forEach(slug => {
    console.log(`Playing ${slug}...`);
    const thisHowl = bgHowls[slug];
    thisHowl.play();
    console.log(bgHowls[slug]);
  });
};

export const stopBgSounds = bgSlugsArray => {
  bgSlugsArray.forEach(slug => {
    console.log(`Stopping ${slug}...`);
    bgHowls[slug].stop();
  });
};

export const playRandomSound = (slug, sprite) => {
  console.log(`Playing ${slug} ${sprite}...`);
};

export const timingLoop = (slug, sprite, frequency = 0.5) => {
  const interval = Math.random() * frequency * 1000;
  setTimeout(() => {
    playRandomSound(slug, sprite);
    timingLoop(slug, sprite, frequency);
  }, interval);
};

export const spawnBgSounds = bgSoundsArray => {
  bgSoundsArray.forEach(sound => {
    const { volume, pan, slug } = sound;
    const thisURL = sound.urls[0];
    console.log(audioData.background[thisURL]);
    bgHowls[thisURL] = new Howl({
      src: [audioData.background[slug][thisURL]],
      volume: volume,
      stereo: pan,
      onplay: () => {
        console.log("playing");
      },
      onstop: () => {
        console.log("stopped");
      }
    });
  });
};

export const testCreateHowl = slug => {
  const thisURL = audioData.background[slug];
  const thisHowl = new Howl({
    src: [thisURL],
    stereo: 0.1,
    loop: true
  });
  testHowls.test = thisHowl;
};

export const testPlayHowl = slug => {
  testHowls[slug].play();
};

export const testStopHowl = slug => {
  testHowls[slug].stop();
};

export const testPanHowl = (slug, pan) => {
  const thisPan = parseFloat(pan);
  testHowls.test.stereo(thisPan);
};

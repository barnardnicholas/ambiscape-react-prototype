import { audioData } from "../data/sounds-index";
import { Howl, Howler } from "howler";

const bgHowls = {};
let isPlaying = false;

export const playBgSounds = bgSlugsArray => {
  bgSlugsArray.forEach(slug => {
    console.log(`Playing ${slug}...`);

    bgHowls[slug].play();
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
    const { volume, pan } = sound;
    const thisURL = sound.urls[0];
    bgHowls[thisURL] = new Howl({
      src: [audioData[thisURL]],
      volume: volume,
      pan: pan,
      onplay: () => {
        console.log("playing");
      },
      onstop: () => {
        console.log("stopped");
      }
    });
  });
};

import audioData from "../data/sounds-index";

const bgHowls = [];
const randomHowls = [];
let isPlaying = false;

export const playBgSound = slug => {
  console.log(`Playing ${slug}...`);
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

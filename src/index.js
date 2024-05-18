import Controls from './controls.js';
import Time from './time.js';

export default class {
  #element;
  #constrols;
  #time;
  constructor(src) {
    this.#element = document.createElement('audio');
    this.#element.src = src;
    this.#time = new Time(this.#element);
    this.#constrols = new Controls(this.#element);
  }

  //// Time
  get duration() {
    return this.#time.duration;
  }
  get currentTime() {
    return this.#time.currentTime;
  }
  timeupdate(func) {
    this.#time.timeupdate(func);
  }
  //// Controls
  play() {
    this.#constrols.play();
  }
  pause() {
    this.#constrols.pause();
  }
  retouch(cunt) {
    this.#constrols.retouch(cunt);
  }
  forward(cunt) {
    this.#constrols.forward(cunt);
  }
  mute() {
    this.#constrols.mute();
  }

  unmute() {
    this.#constrols.unmute();
  }
  //////
  get element() {
    return this.#element;
  }
}

export default class Controls {
  #element;
  constructor(element) {
    this.#element = element;
  }
  load(func) {
    this.#element.addEventListener('loadedmetadata', function () {
      func();
    });
  }
  play() {
    this.#element.play();
  }
  pause() {
    this.#element.pause();
  }
  retouch(cunt) {
    if (typeof cunt == 'number') {
      this.#element.currentTime -= cunt;
    }
  }
  forward(cunt) {
    if (typeof cunt == 'number') {
      this.#element.currentTime += cunt;
    }
  }
  mute() {
    this.#element.muted = true;
  }
  unmute() {
    this.#element.muted = false;
  }
}

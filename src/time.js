export default class {
  #interval;
  #element;
  constructor(element) {
    this.#element = element;
    this.#interval = null;
    const pause = () => {
      clearInterval(this.#interval);
      this.#interval = null;
    };
    this.#element.addEventListener('pause', function () {
      pause();
    });
  }
  timeupdate(time) {
    const update = () => {
      if (this.#element.paused) {
        time(this.currentTime);
      }
    };
    const play = () => {
      if (!this.#interval) {
        this.#interval = setInterval(() => {
          time(this.currentTime);
        }, 50);
      }
    };

    this.#element.addEventListener('timeupdate', function () {
      update();
    });

    this.#element.addEventListener('play', function () {
      play();
    });
  }
  get currentTime() {
    return this.#element.currentTime;
  }
  get duration() {
    return this.#element.duration;
  }
}

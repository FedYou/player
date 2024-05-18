import Player from '../dist/player.min.js';

const $ = id => document.getElementById(id);

const play = $('play');
const pause = $('pause');
const forward = $('forward');
const retouch = $('retouch');
const mute = $('mute');
const unmute = $('unmute');
const label = $('label');

let audio = new Player('./audio.mp3');

play.onclick = () => audio.play();
pause.onclick = () => audio.pause();
forward.onclick = () => audio.forward(10);
retouch.onclick = () => audio.retouch(10);
mute.onclick = () => audio.mute();
unmute.onclick = () => audio.unmute();

audio.timeupdate(time => {
  label.textContent = `${time}/${audio.duration}`;
});

document.body.append(audio.element);

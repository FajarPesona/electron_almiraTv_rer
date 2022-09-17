import { audioPath, murottalPath } from "./paths";

let intTrack = 0;

let audio = new Audio();
audio.onended = () => {
  console.log("selesai");
  if (++intTrack == 115) intTrack = 1;
  let track = ("00" + intTrack).slice(-3) + ".mp3";
  console.log(track);
  audio.src = murottalPath + track;
  audio.play();
};

async function playMurottal(track) {
  console.log("play", track);
  intTrack = parseInt(track.substring(0, 3));
  audio.src = murottalPath + track;
  audio.play();
}

function stopMurottal() {
  console.log("stop");
  audio.pause();
}

export { playMurottal, stopMurottal };

// const { dataTarhim } = require("../data");
// let fSelesaiTarhim = false;

// import path from "path";

let audioFolder = "F:/audio/almira_single/mp3/";

let audio = new Audio();

audio.onended = () => {
  console.log("selesai");
  //   fSelesaiTarhim = true;
};

function play() {
  console.log("play");
  audio.src = audioFolder + "0001.mp3";
  //   audio.src = path.resolve(dataTarhim[i].track);
  // audio.src = "../../../public/assets/audio/338.mp3";
  audio.play();
}

function stop() {
  console.log("stop");
  audio.pause();
}

export { play, stop };

// function playTarhim(i) {
//   console.log("play");
//   audio.src = path.resolve(audioFolder + dataTarhim[i].track);
//   //   audio.src = path.resolve(dataTarhim[i].track);
//   // audio.src = "../../../public/assets/audio/338.mp3";
//   audio.play();
// }

// function stopTarhim() {
//   console.log("stop");
//   audio.pause();
// }

// function cekTarhim(t, tarhimTimes) {
//   for (i = 0; i < 8; i++) {
//     if (t.hour === tarhimTimes[i].hour && t.minute === tarhimTimes[i].minute)
//       break;
//   }
//   if (i === 1 || i === 4 || i === 5 || i === 6 || i === 7) return i;
//   return 0;
//   // console.log(i);
// }

// module.exports = { playTarhim, stopTarhim, cekTarhim };

//   audio.src = "338.mp3";

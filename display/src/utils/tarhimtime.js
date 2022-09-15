// function secondToTime(sec_num) {
//   var hour = Math.floor(sec_num / 3600);
//   var minute = Math.floor((sec_num - hour * 3600) / 60);
//   var second = sec_num - hour * 3600 - minute * 60;
//   return { hour, minute, second };
// }

// function timeToSecond(hm) {
//   var a = hm.split(":"); // split it at the colons
//   return +a[0] * 60 * 60 + +a[1] * 60;
// }

function getTarhimTime(t, m) {
  var sec_num = t.hour * 3600 + t.minute * 60 + t.second - m * 60;

  let hour = Math.floor(sec_num / 3600);
  let minute = Math.floor((sec_num - hour * 3600) / 60);
  let second = sec_num - hour * 3600 - minute * 60;

  return {
    hour,
    minute,
    second,
  };
}

function getTarhimTimes(prayerTimes, dataTarhim) {
  let arr = [];
  for (let i = 0; i < 8; i++) {
    arr.push(getTarhimTime(prayerTimes[i], dataTarhim[i].durasi));
  }
  return arr;
}

export default getTarhimTimes;

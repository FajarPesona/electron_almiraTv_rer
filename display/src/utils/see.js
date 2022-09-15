import { playMp3, stopMp3 } from "./playMp3";
import { getPrayerTimes } from "./prayertime";
import getTarhimTimes from "./tarhimtime";

// const serverUrl = "http://192.168.1.4:5000/events";
const serverUrl = "http://localhost:5000/events";

// const event = {
//   allData: 0,
//   setKota: 1,
// };

const event = {
  allData: 0,
  setTime: 1,
  setDate: 2,
  playMp3: 3,
  stopMp3: 4,
};

let allData = null;
// let tarhimTimes = null;

// let kota;
// let koreksi;
// let dataTarhim;

const eventHandle = (data, context) => {
  let prayerTimes, tarhimTimes;
  switch (data.event) {
    case event.allData:
      // console.log(data.val);
      // context.setAllData(data.val);
      // kota = data.val.kota;
      // koreksi = data.val.koreksi;
      // dataTarhim = data.val.dataTarhim;
      allData = data.val;
      let prayerTimes = getPrayerTimes(
        new Date(),
        allData.kota,
        allData.koreksi
      );
      let tarhimTimes = getTarhimTimes(prayerTimes, allData.dataTarhim);
      context.setAllData(allData);
      context.setPrayerTimes(prayerTimes);
      context.setTarhimTimes(tarhimTimes);
      console.log(prayerTimes);
      console.log(tarhimTimes);
      break;
    case event.setTime:
      break;
    case event.setDate:
      console.log(data.val.date);
      let a = data.val.date.split("-");
      let date = new Date(`${a[2]}-${a[0]}-${a[1]}`);
      prayerTimes = getPrayerTimes(date, allData.kota, allData.koreksi);
      tarhimTimes = getTarhimTimes(prayerTimes, allData.dataTarhim);
      context.setPrayerTimes(prayerTimes);
      context.setTarhimTimes(tarhimTimes);
      break;
    case event.playMp3:
      console.log(data.val);
      let track = data.val;
      playMp3(track);
      break;
    case event.stopMp3:
      console.log(1);
      stopMp3();
      break;
  }
};

const runSEE = (context) => {
  const source = new EventSource(serverUrl);
  source.onmessage = (e) => {
    // console.log(1);
    // console.log(JSON.parse(e.data));
    eventHandle(JSON.parse(e.data), context);
    // context.setKota(JSON.parse(e.data).val);
  };
  return () => {
    source.close();
  };
};

export { runSEE, allData };

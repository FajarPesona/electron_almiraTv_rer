// import getTime from "../utils/time";

import { useContext } from "react";
import { AppContext } from "../context/AppProvider";
import { getHijriyah } from "../utils/hijriyah";
import { getPrayerTimes, setPrayerTimeParams } from "../utils/prayertime";
import { allData, tarhimTimes } from "../utils/see";
// import { cekTarhim } from "../utils/tarhim";
import getTarhimTimes from "../utils/tarhimtime";
import { getTime } from "../utils/time";

const stateEnum = {
  idle: 0,
  tarhim: 1,
};

let state = stateEnum.idle;
let indexTarhim;

const confirmTarhim = (time, tarhimTimes, dataTarhim) => {
  console.log(tarhimTimes);
  // indexTarhim = cekTarhim(time, tarhimTimes);
  // if (indexTarhim && dataTarhim[indexTarhim].durasi > 0) {
  //   // playTarhim(indexTarhim);
  //   // indexAdzan = indexTarhim;
  //   state = stateEnum.tarhim;
  // }
};

function runScriptHome({ context, getClock }) {
  // const { context1 } = useContext(AppContext);

  setPrayerTimeParams();
  // let prayerTimes = getPrayerTimes(new Date(), allData.kota, allData.koreksi);
  // let tarhimTimes = getTarhimTimes(prayerTimes, allData.dataTarhim);
  setInterval(() => {
    let time = getTime({ withSec: true });
    context.setStrJam(time.strTime);
    context.setStrHari(time.strHari);
    context.setStrTglM(time.strDateM);
    context.setStrTglH(getHijriyah(new Date(), 0).strHijriyah);
    // console.log(state);
    // console.log(tarhimTimes);
    switch (state) {
      case stateEnum.idle:
        // confirmTarhim(time, tarhimTimes, allData.dataTarhim);
        // if (state === stateEnum.idle) confirmAdzan(time, prayerTimes);
        break;
      case stateEnum.tarhim:
        break;
    }
  }, 1000);
}

export { runScriptHome };

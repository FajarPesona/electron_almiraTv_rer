import React, { useContext } from "react";
import { useEffect } from "react";
import { AppContext } from "../../context/AppProvider";
import { getHijriyah } from "../../utils/hijriyah";
// import { playMp3 } from "../../utils/playMp3";
// import { cekTarhim } from "../../utils/tarhim";
import { getTime } from "../../utils/time";
import { useNavigate } from "react-router-dom";

const stateEnum = {
  idle: 0,
  tarhim: 1,
};
const modeAdzanEnum = {
  onTime: 0,
  waitTarhimFinished: 1,
};

const HomeScript = () => {
  const navigate = useNavigate();

  let { context } = useContext(AppContext);
  let state = stateEnum.idle;
  let fSelesaiTarhim = false;
  let audioTarhim = new Audio();
  audioTarhim.onended = () => {
    console.log("selesai tarhim");
    // navigate("/adzan");
    fSelesaiTarhim = true;
  };

  function cekAdzan(t, prayerTimes) {
    let i;
    for (i = 0; i < 8; i++) {
      if (
        t.hour === prayerTimes[i].hour &&
        t.minute === prayerTimes[i].minute
      ) {
        break;
      }
    }
    if (i === 1 || i === 4 || i === 5 || i === 6 || i === 7) return i;
    return 0;
  }

  function cekTarhim(t, tarhimTimes) {
    let i;
    for (i = 0; i < 8; i++) {
      if (t.hour === tarhimTimes[i].hour && t.minute === tarhimTimes[i].minute)
        break;
    }
    if (i === 1 || i === 4 || i === 5 || i === 6 || i === 7) return i;
    return 0;
  }

  const confirmTarhim = (time, tarhimTimes, dataTarhim) => {
    // console.log(tarhimTimes);
    let i = cekTarhim(time, tarhimTimes);
    if (i && dataTarhim[i].durasi > 0) {
      context.setIndexTarhim(i);
      console.log("boom", context.indexTarhim);
      audioTarhim.src = "assets/audio/" + context.allData.dataTarhim[i].track;
      audioTarhim.play();
      state = stateEnum.tarhim;
    }
  };

  const confirmAdzan = (time, prayerTimes) => {
    let i = cekAdzan(time, prayerTimes);
    if (i) {
      context.setIndexTarhim(i);
      navigate("/adzan");
    }
  };

  useEffect(() => {
    console.log("hai");

    const interval = setInterval(() => {
      let time = getTime({ withSec: true });
      context.setStrJam(time.strTime);
      context.setStrHari(time.strHari);
      context.setStrTglM(time.strDateM);
      context.setStrTglH(getHijriyah(new Date(), 0).strHijriyah);
      //   console.log(context.allData.kota);
      console.log(context.indexTarhim);
      switch (state) {
        case stateEnum.idle:
          confirmTarhim(time, context.tarhimTimes, context.allData.dataTarhim);
          //   if (state === stateEnum.idle)
          confirmAdzan(time, context.prayerTimes);
          break;
        case stateEnum.tarhim:
          if (context.allData.modeAdzan === modeAdzanEnum.waitTarhimFinished) {
            if (fSelesaiTarhim) {
              fSelesaiTarhim = false;
              clearInterval(interval);
              navigate("/adzan");
            }
          } else {
            confirmAdzan(time, context.prayerTimes);
          }
          break;
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [context.allData]);

  //   }, [context.allData, context.indexTarhim]);

  return <></>;
};

export default HomeScript;

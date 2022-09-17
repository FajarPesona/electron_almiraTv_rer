import React, { useContext } from "react";
import { useEffect } from "react";
import { AppContext } from "../../context/AppProvider";
import { useNavigate } from "react-router-dom";
import { getTime } from "../../utils/time";

const wsName = [
  "Imsak",
  "Subuh",
  "Syuruq",
  "Dhuha",
  "Dzuhur",
  "Ashar",
  "Maghrib",
  "Isya",
];

const ScriptAdzan = ({ setStrAdzan, setTime, setTik }) => {
  const navigate = useNavigate();

  const { context } = useContext(AppContext);
  let adzanInterval;
  let indexAdzan = context.indexTarhim;
  let dataAdzan = context.allData.dataAdzan;
  let state = 0;
  let tik = false;
  let cnt = 0;

  // let fSelesaiAdzan = false;
  let audioAdzan = new Audio();
  audioAdzan.onended = () => selesaiAdzan();

  function selesaiAdzan() {
    console.log("selesai adzan");
    clearInterval(adzanInterval);
    navigate("/iqomah");
  }

  useEffect(() => {
    console.log(1);
    setStrAdzan(wsName[indexAdzan]);
    adzanInterval = setInterval(() => {
      let t = getTime({ withSec: true });
      tik = !tik;
      setTime(t);
      setTik(tik);
      switch (state) {
        case 0:
          console.log(0);
          state = 1;
          if (dataAdzan[indexAdzan].useMp3) {
            audioAdzan.src = "assets/audio/" + dataAdzan[indexAdzan].track;
            audioAdzan.play();
            state = 2;
          }
          break;
        case 1:
          console.log("cnt:", cnt);
          if (++cnt > dataAdzan[indexAdzan].durasi * 65) {
            selesaiAdzan();
          }
          break;
      }
    }, 1000);
    return () => clearInterval(adzanInterval);
  }, []);
  return <></>;
};

export default ScriptAdzan;

//   adzLblJam.innerText = `${t.hour < 10 ? "0" : ""}${t.hour}`;
//   adzLblMin.innerText = `${t.minute < 10 ? "0" : ""}${t.minute}`;
//   tikChar.style.color = tik ? "yellow" : "black";
//   textAdzan.style.color = tik ? "darkturquoise" : "black";

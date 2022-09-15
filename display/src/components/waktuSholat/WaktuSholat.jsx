// import React, { useContext } from "react";
import { useEffect } from "react";
import { hmToStr } from "../../utils/convertion";
import "./waktuSholat.css";

const WaktuSholat = ({ prayerTimes, divClass, divPtClass }) => {
  // useEffect(() => {
  //   console.log(3);
  // }, [prayerTimes]);
  // console.log(8);
  return (
    <div className="divWs">
      <PtComponent
        className="ws Subuh"
        label={"Subuh"}
        pt={prayerTimes ? prayerTimes[1] : null}
        divPtClass={divPtClass}
      />
      <PtComponent
        className="ws Syuruq"
        label={"Syuruq"}
        pt={prayerTimes ? prayerTimes[2] : null}
        divPtClass={divPtClass}
      />
      <PtComponent
        className="ws Dzuhur"
        label={"Dzuhur"}
        pt={prayerTimes ? prayerTimes[4] : null}
        divPtClass={divPtClass}
      />
      <PtComponent
        className="ws Ashar"
        label={"Ashar"}
        pt={prayerTimes ? prayerTimes[5] : null}
        divPtClass={divPtClass}
      />
      <PtComponent
        className="ws Maghrib"
        label={"Maghrib"}
        pt={prayerTimes ? prayerTimes[6] : null}
        divPtClass={divPtClass}
      />
      <PtComponent
        className="ws Isya"
        label={"Isya"}
        pt={prayerTimes ? prayerTimes[7] : null}
        divPtClass={divPtClass}
      />
    </div>
  );
};

const PtComponent = ({ label, pt, className }) => {
  return (
    <div className={className}>
      <span>{label}</span>
      <span>{pt ? hmToStr(pt.hour, pt.minute) : "null"}</span>
    </div>
  );
};

export default WaktuSholat;

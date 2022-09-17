import React, { useContext, useState } from "react";
import { AppContext } from "../../../context/AppProvider";
import { hmToStr } from "../../../utils/convertion";
import ScriptIqomah from "../ScriptIqomah";
import "./iqomah1.css";

const Iqomah1 = () => {
  const { context } = useContext(AppContext);
  const index = context.indexTarhim;
  const target = context.allData.dataIqomah[index];
  // let target = 2;
  const [timIqomah, setTimIqomah] = useState({ m: target, s: 0 });

  return (
    // <div>
    //   <ScriptIqomah timIqomah={timIqomah} setTimIqomah={setTimIqomah} />
    //   <span>Iqomah</span>
    //   <br />
    //   <span>{hmToStr(timIqomah.m, timIqomah.s)}</span>
    // </div>
    <div className="iqomahContainer">
      <ScriptIqomah timIqomah={timIqomah} setTimIqomah={setTimIqomah} />
      <div className="headerContainer">
        {/* <img src="assets/images/mosque1.jpg" alt="" /> */}

        <img src="assets/images/M1.png" alt="" />
        <span>IQOMAH</span>
        <img src="assets/images/A1.png" alt="" />
      </div>
      <div className="timerContainer">
        <span id="lblIqomah" className="lblIqomah">
          {hmToStr(timIqomah.m, timIqomah.s)}
        </span>
      </div>
      <div className="runtextContainer">
        <marquee
          className="marqueeIqomah"
          scrolldelay="10"
          scrollamount="2"
          truespeed="true"
        >
          <span>
            Luruskan dan rapatkan barisan, isi shof di depan terlebih dahulu
          </span>
        </marquee>
      </div>
    </div>
  );
};

export default Iqomah1;

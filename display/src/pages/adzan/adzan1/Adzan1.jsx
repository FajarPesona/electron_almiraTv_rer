import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { AppContext } from "../../../context/AppProvider";
import { getTime } from "../../../utils/time";
import ScriptAdzan from "../ScriptAdzan";
import "./adzan1.css";

const Adzan1 = () => {
  const { context } = useContext(AppContext);
  const [strAdzan, setStrAdzan] = useState("");
  const [time, setTime] = useState(getTime({ withSec: true }));

  // const [strJam, setStrJam] = useState("");
  const [tik, setTik] = useState(false);

  useEffect(() => {}, []);

  return (
    <div>
      <ScriptAdzan
        setStrAdzan={setStrAdzan}
        setTime={setTime}
        setTik={setTik}
      />
      <div>
        <div class="containerImage">
          <img src="assets/images/mosque1.jpg" alt="" />
        </div>

        <div class="containertextAdzan">
          <span
            className="textAdzan"
            style={{ color: tik ? "black" : "darkturquoise" }}
          >
            {"Adzan " + strAdzan}
          </span>
          <div class="jam">
            <span className="hour">{`${time.hour < 10 ? "0" : ""}${
              time.hour
            }`}</span>
            <span className="tik" style={{ color: tik ? "black" : "yellow" }}>
              {" : "}
            </span>
            <span className="minute">{`${time.minute < 10 ? "0" : ""}${
              time.minute
            }`}</span>
          </div>
        </div>

        <div class="containerRuntextAdzan">
          <marquee
            class="marqueeAdzan"
            scrolldelay="10"
            scrollamount="2"
            truespeed="true"
          >
            <span>
              Masuk waktu sholat {" " + strAdzan + " "} untuk wilayah
              {" " + context.allData.kota.nama + " "} dan sekitarnya
            </span>
          </marquee>
        </div>
      </div>
    </div>
  );
};

export default Adzan1;

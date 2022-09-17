import React from "react";
import { useState } from "react";
import { FaPlay, FaStop } from "react-icons/fa";
import ReactSelect from "react-select";
import { playMurottal, stopMurottal } from "../../api/api";
import arrSurat from "../../utils/dbSurat";
import Select from "../select/Select";
import "./murottalPlayer.css";

const MurottalPlayer = () => {
  const [surat, setSurat] = useState(1);

  const suratSelected = (e) => {
    // console.log(e.target.value);
    setSurat(e.target.value);
  };

  const playClick = () => {
    const track = ("00" + surat).slice(-3);
    console.log("play", track);
    playMurottal(track + ".mp3");
  };

  const stopClick = () => {
    console.log("stop");
    stopMurottal();
  };

  return (
    <div className="murottalPlayer">
      <span className="title">Murottal</span>
      <div className="divPlay">
        {/* <ReactSelect
          className="selectSurat"
          name="pilihSurat"
          options={arrSurat.map((surat, i) => {
            return { value: i + 1, label: surat };
          })}
          onChange={suratSelected}
          //   value={surat}
        /> */}
        <Select
          name="track"
          className={"flex-3"}
          options={arrSurat.map((surat, i) => {
            return { val: i + 1, lbl: surat };
          })}
          onChange={suratSelected}
          //   value={dataAdzan.length === 0 ? "0091.mp3" : dataAdzan[iWs[i]].track}
        />
        <FaPlay className="icon-play green" onClick={playClick} />
        <FaStop className="icon-play red" onClick={stopClick} />
      </div>
    </div>
  );
};

export default MurottalPlayer;

// import React, { useEffect, useState } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { iWs, labelsWs } from "../../api/defaultData";
import Select from "../../components/select/Select";
import { FaStop, FaPlay } from "react-icons/fa";
import { useEffect } from "react";
import { getDataTarhim, playMp3, postDataTarhim, StopMp3 } from "../../api/api";

// import axios from "axios";
// import { baseURL, iWs, labelsWs } from "../../utils/data";
// import "./tarhim.css";
// import { FaStop, FaPlay } from "react-icons/fa";

const Tarhim = () => {
  const navigate = useNavigate();
  const [dataTarhim, setDataTarhim] = useState([]);

  const [play, setPlay] = useState(Array.from({ length: 8 }, () => false));

  const optionsDurasi = Array.from({ length: 10 }, (_, x) => {
    return { val: x, lbl: x };
  });

  const optionsTrack = Array.from({ length: 90 }, (_, x) => {
    return {
      val: String(x).padStart(4, "0") + ".mp3",
      lbl: String(x).padStart(4, "0") + ".mp3",
    };
  });

  useEffect(() => {
    getDataTarhim().then((data) => {
      console.log(data);
      setDataTarhim(data);
    });
  }, []);

  const selectChange = (e) => {
    const name = e.target.name;
    const id = parseInt(e.target.id);
    let val;
    switch (name) {
      case "durasi":
        val = parseInt(e.target.value);
        break;
      default:
        val = e.target.value;
        break;
    }
    setDataTarhim(
      dataTarhim.map((data, i) => {
        return i === id ? { ...data, [name]: val } : data;
      })
    );
    // console.log(dataTarhim);
  };

  const sendTarhim = () => {
    console.log(dataTarhim);
    postDataTarhim(dataTarhim);
  };

  const playClick = (e) => {
    const id = parseInt(e.currentTarget.id);
    const val = !play[id];
    val ? playMp3(dataTarhim[id].track) : StopMp3();
    setPlay(
      play.map((c, i) => {
        return i === id ? val : false;
      })
    );
  };

  return (
    <div className="page">
      <span className="title">Set Tarhim</span>

      <div className="flex-column">
        <TableHead />

        {labelsWs.map((label, i) => {
          return (
            <div className="flex-align-center" key={i}>
              <span className="flex-2">{label}</span>
              <Select
                name="durasi"
                className={"flex-3"}
                options={optionsDurasi}
                onChange={selectChange}
                id={iWs[i]}
                value={dataTarhim.length === 0 ? 0 : dataTarhim[iWs[i]].durasi}
              />

              <Select
                name="track"
                className={"flex-3"}
                options={optionsTrack}
                onChange={selectChange}
                id={iWs[i]}
                value={
                  dataTarhim.length === 0
                    ? "0091.mp3"
                    : dataTarhim[iWs[i]].track
                }
              />

              <div className="playdiv">
                {play[iWs[i]] ? (
                  <FaStop
                    id={iWs[i]}
                    className="icon-play red"
                    onClick={playClick}
                  />
                ) : (
                  <FaPlay
                    id={iWs[i]}
                    className="icon-play green"
                    onClick={playClick}
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>

      <button onClick={sendTarhim}>Kirim</button>
      <button onClick={() => navigate("/")}>Home</button>
    </div>
  );
};

const TableHead = () => {
  return (
    <div className="flex-align-center">
      <div className="flex-2 red">
        <span className="sp"></span>
      </div>
      <div className="flex-2 flex-align-center">
        <span className="sp">Durasi</span>
      </div>
      <div className="flex-3 flex-align-center">
        <span className="sp">Track</span>
      </div>
      <div style={{ width: "30px" }}>{/* <FaPlay /> */}</div>
    </div>
  );
};

export default Tarhim;

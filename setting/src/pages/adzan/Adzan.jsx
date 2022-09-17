import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { iWs, labelsWs } from "../../api/defaultData";
import Select from "../../components/select/Select";
import { FaStop, FaPlay } from "react-icons/fa";

import "./adzan.css";
import { getDataAdzan, playMp3, postDataAdzan, StopMp3 } from "../../api/api";
import ButtonHome from "../../components/ButtonHome";
// import axios from "axios";
// import { baseURL, iWs, labelsWs } from "../../utils/data";
// import { FaStop, FaPlay } from "react-icons/fa";

const Adzan = () => {
  const navigate = useNavigate();
  const [dataAdzan, setDataAdzan] = useState([{}, {}, {}, {}, {}, {}, {}, {}]);
  const [play, setPlay] = useState(Array.from({ length: 8 }, () => false));

  const optionsDurasi = Array.from({ length: 10 }, (_, x) => {
    return { val: x, lbl: x };
  });
  const optionsTrack = Array.from({ length: 5 }, (_, x) => {
    return {
      val: ("09" + x).slice(-3) + ".mp3",
      lbl: ("09" + x).slice(-3) + ".mp3",
    };
  });

  const optionsUseMp3 = [
    { val: false, lbl: "OFF" },
    { val: true, lbl: "ON" },
  ];

  useEffect(() => {
    getDataAdzan().then((data) => {
      console.log(data);
      setDataAdzan(data);
    });
  }, []);

  const playClick = (e) => {
    const id = parseInt(e.currentTarget.id);
    const val = !play[id];
    val ? playMp3(dataAdzan[id].track) : StopMp3();

    setPlay(
      play.map((c, i) => {
        return i === id ? val : false;
      })
    );
  };

  const sendAdzan = () => {
    console.log(dataAdzan);
    postDataAdzan(dataAdzan);
  };

  const selectChange = (e) => {
    const name = e.target.name;
    const id = parseInt(e.target.id);
    let val;
    switch (name) {
      case "durasi":
        val = parseInt(e.target.value);
        break;
      case "useMp3":
        val = val = e.target.value === "true";
        break;
      default:
        val = e.target.value;
        break;
    }
    setDataAdzan(
      dataAdzan.map((data, i) => {
        return i === id ? { ...data, [name]: val } : data;
      })
    );
    console.log(dataAdzan);
  };

  return (
    <div className="page tarhim">
      <span className="title">Set Adzan</span>

      <div className="flex-column">
        <TableHead />

        {labelsWs.map((label, i) => {
          return (
            <div className="flex-align-center" key={i}>
              <span className="flex-2">{label}</span>
              <Select
                name="durasi"
                className={"flex-2"}
                options={optionsDurasi}
                onChange={selectChange}
                id={iWs[i]}
                value={dataAdzan.length === 0 ? 0 : dataAdzan[iWs[i]].durasi}
              />

              <Select
                name="useMp3"
                className={"flex-3"}
                options={optionsUseMp3}
                onChange={selectChange}
                id={iWs[i]}
                value={dataAdzan.length === 0 ? 0 : dataAdzan[iWs[i]].useMp3}
              />

              <Select
                name="track"
                className={"flex-3"}
                options={optionsTrack}
                onChange={selectChange}
                id={iWs[i]}
                value={
                  dataAdzan.length === 0 ? "0091.mp3" : dataAdzan[iWs[i]].track
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

      <button onClick={sendAdzan}>Kirim</button>
      <ButtonHome />
      {/* <button onClick={() => navigate("/")}>Home</button> */}
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
        <span className="sp">Mp3</span>
      </div>
      <div className="flex-3 flex-align-center">
        <span className="sp">Track</span>
      </div>
      <div style={{ width: "30px" }}>{/* <FaPlay /> */}</div>
    </div>
  );
};

export default Adzan;

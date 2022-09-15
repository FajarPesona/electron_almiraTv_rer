import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getKoreksi, postKoreksi } from "../../api/api";
import { iWs, labelsWs } from "../../api/defaultData";
import Select from "../../components/select/Select";
// import { baseURL, iWs, labelsWs } from "../../utils/data";
// import "./koreksi.css";
// import axios from "axios";

const Koreksi = () => {
  const [koreksi, setKoreksi] = useState([]);
  const navigate = useNavigate();
  // const options = Array.from({ length: 10 }, (_, x) => x - 5);
  const options = Array.from({ length: 10 }, (_, x) => {
    x -= 5;
    return { val: x, lbl: x };
  });

  useEffect(() => {
    getKoreksi().then((data) => {
      console.log(data);
      setKoreksi(data);
    });
  }, []);

  const sendKoreksi = () => {
    console.log(koreksi);
    postKoreksi(koreksi);
  };

  const selectChange = (e) => {
    const id = parseInt(e.target.name);
    const val = parseInt(e.target.value);
    console.log(id, val);
    setKoreksi(
      koreksi.map((c, i) => {
        return i === id ? val : c;
      })
    );
  };

  return (
    <div className="page">
      <span className="title">Set Koreksi</span>
      <div className="flex-column">
        {labelsWs.map((label, i) => {
          return (
            <div className="flex-align-center" key={i}>
              <span className="flex-1">{label}</span>
              <Select
                name={iWs[i]}
                className={"flex-3"}
                options={options}
                onChange={selectChange}
                id={iWs[i]}
                value={koreksi.length === 0 ? 0 : koreksi[iWs[i]]}
              />
              {/* <select
                name={iWs[i]}
                onChange={selectChange}
                value={koreksi[iWs[i]]}
              >
                {options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select> */}
            </div>
          );
        })}
      </div>
      <button onClick={sendKoreksi}>Kirim</button>
      <button onClick={() => navigate("/")}>Home</button>
    </div>
  );
};

export default Koreksi;

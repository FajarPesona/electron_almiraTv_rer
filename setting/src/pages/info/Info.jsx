import React, { useEffect, useState } from "react";
// import { baseURL } from "../../utils/data";
import { useNavigate } from "react-router-dom";
import { getInfo, postInfo } from "../../api/api";
// import axios from "axios";
// import "./info.css";

const Info = () => {
  const navigate = useNavigate();
  const [info, setInfo] = useState(null);

  // const [info, setInfo] = useState({ nama: "", alamat: "" });

  useEffect(() => {
    getInfo().then((data) => {
      console.log(data);
      setInfo(data);
    });
  }, []);

  const sendInfo = () => {
    console.log(info);
    postInfo(info);
  };

  const inputChange = (e) => {
    console.log(e.target.name);
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  return (
    <div className="page">
      <span className="title">Set Info</span>

      <div className="flex-column">
        <div className="flex-align-center">
          <span className="flex-1">Nama Masjid</span>
          <input
            className="flex-2"
            name="nama"
            type="text"
            value={info ? info.nama : null}
            onChange={inputChange}
          />
        </div>
        <div className="flex-align-center">
          <span className="flex-1">Alamat Masjid</span>
          <input
            className="flex-2"
            name="alamat"
            type="text"
            value={info ? info.alamat : null}
            onChange={inputChange}
          />
        </div>
      </div>
      <button onClick={sendInfo}>Kirim</button>
      <button onClick={() => navigate("/")}>Home</button>
    </div>
  );
};

export default Info;

import React, { useState } from "react";
import { useEffect } from "react";
// import { useEffect } from "react";
// import TimePicker from "react-time-picker";
// import getTime from "../../utils/getTime";
// import "./setTime.css";
import { useNavigate } from "react-router-dom";
import { postDate, postDateTime, postTime } from "../../api/api";
import getTime from "../../utils/getTime";
// import axios from "axios";
// import { baseURL } from "../../utils/data";

// const namaHari = ["Ahad", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];

const SetTime = () => {
  const navigate = useNavigate();

  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [dateTobeSent, setDateTobeSent] = useState("");

  useEffect(() => {
    const dateTime = getTime();
    setTime(dateTime.strTime);
    setDate(dateTime.strDate);
    setDateTobeSent(`${dateTime.month}-${dateTime.date}-${dateTime.year}`);
    // const s = `${dateTime.month}-${dateTime.date}-${dateTime.year}`;
    // const d = new Date();
    // const s = `${d.getMonth() + 1}-${d.getDate()}-${d.getFullYear()}`;
    // setDateTobeSent(s);
  }, []);

  const timeInputChange = (e) => {
    console.log(e.target.value);
    setTime(e.target.value);
  };

  const dateInputChange = (e) => {
    console.log(e.target.value);
    setDate(e.target.value);
    const d = new Date(e.target.value);
    const s = `${d.getMonth() + 1}-${d.getDate()}-${d.getFullYear()}`;
    console.log(s);
    setDateTobeSent(s);
  };

  const sinkronkanDateTime = (e) => {
    const dateTime = getTime();
    const s = `${dateTime.month}-${dateTime.date}-${dateTime.year}`;
    postDateTime(s, dateTime.strTime);
  };

  const sesuaikanTime = (e) => {
    console.log(time);
    postTime(time);
  };

  const sesuaikanDate = (e) => {
    console.log(dateTobeSent);
    postDate(dateTobeSent);
  };

  return (
    <div className="page">
      <span className="title">Set Time</span>

      <div className="flex-column">
        <div className="flex-align-center">
          <input
            className="flex-2"
            value={time}
            type="time"
            id="time"
            onChange={timeInputChange}
          ></input>
          <button className="flex-1" onClick={sesuaikanTime}>
            Kirim
          </button>
        </div>

        <div className="flex-align-center">
          <input
            className="flex-2"
            value={date}
            type="date"
            id="date"
            // placeholder="mm-dd-yyyy"
            onChange={dateInputChange}
          ></input>
          <button className="flex-1" onClick={sesuaikanDate}>
            Kirim
          </button>
        </div>
      </div>

      <button onClick={sinkronkanDateTime}>Sinkronkan dengan HP</button>
      <button onClick={() => navigate("/")}>Home</button>
    </div>
  );
};

export default SetTime;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TextareaAutosize from "react-textarea-autosize";
import { getRuntext, postRuntext } from "../../api/api";
// import { baseURL } from "../../utils/data";
import "./runtext.css";
// import axios from "axios";

const Runtext = () => {
  const navigate = useNavigate();
  const [runtext, setRuntext] = useState([]);
  const index = Array.from({ length: 5 }, (_, x) => x);

  useEffect(() => {
    getRuntext().then((runtext) => {
      console.log(runtext);
      setRuntext(runtext);
    });
  }, []);

  const inputChange = (e) => {
    const id = parseInt(e.target.id);
    const val = e.target.value;
    setRuntext(
      runtext.map((data, i) => {
        return i === id ? val : data;
      })
    );
  };

  const sendRuntext = () => {
    console.log(runtext);
    postRuntext(runtext);
  };

  return (
    <div className="page tarhim">
      <span className="title">Set Running Text</span>
      <div className="content">
        {index.map((i) => {
          return (
            <div className="inputRuntextDiv" key={i}>
              <span>{`Text-${i + 1}`}</span>
              <TextareaAutosize
                id={i}
                className="textArea"
                value={runtext[i]}
                onChange={inputChange}
              />
            </div>
          );
        })}
      </div>
      <button onClick={sendRuntext}>Kirim</button>
      <button onClick={() => navigate("/")}>Home</button>
    </div>
  );
};

export default Runtext;

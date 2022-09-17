import axios from "axios";
import React, { useEffect } from "react";
// import axios from "axios";

import { useNavigate } from "react-router-dom";
// import { baseURL } from "../../utils/data";
import "./home.css";
// import { useContext } from "react";
// import { AppContext } from "../../context/AppProvider";

const Home = () => {
  const navigate = useNavigate();
  //   const { data, setData } = useContext(AppContext);
  // useEffect(() => {
  //   axios.get(baseURL).then((response) => {
  //     console.log(response.data);
  //     setData(response.data);
  //   });
  // }, []);

  return (
    <div className="home">
      <button onClick={() => navigate("/kota")}>Set Kota</button>
      <button onClick={() => navigate("/adzan")}>Set Adzan</button>
      <button onClick={() => navigate("/tarhim")}>Set Tarhim</button>
      <button onClick={() => navigate("/iqomah")}>Set Iqomah</button>
      <button onClick={() => navigate("/runtext")}>Set Running Text</button>
      <button onClick={() => navigate("/koreksi")}>Set Koreksi</button>
      <button onClick={() => navigate("/info")}>Set Info</button>
      <button onClick={() => navigate("/time")}>Set Time</button>
      <button
        onClick={() => {
          console.log("getAll");
          // axios.get("https://www.google.com");

          axios.get("http://192.168.1.5:5000/setting");
        }}
      >
        Get All
      </button>
    </div>
  );
};

export default Home;

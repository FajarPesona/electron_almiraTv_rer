import React from "react";
import { useContext } from "react";
import { AppContext } from "../../context/AppProvider";
import "./header1.css";

const Header1 = () => {
  const { context } = useContext(AppContext);
  // console.log("context", context.allData.info);
  return (
    <div className="header1">
      <div className="divInfo flex-center">
        <span className="nama">
          {context.allData.info ? context.allData.info.nama : ""}
        </span>
        <span className="alamat">
          {context.allData.info ? context.allData.info.alamat : ""}
        </span>
      </div>
      <span className="spanJam">{context.strJam}</span>
    </div>
  );
};

export default Header1;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getDataIqomah, postDataIqomah } from "../../api/api";
import { iWs, labelsWs } from "../../api/defaultData";
import ButtonHome from "../../components/ButtonHome";
import Select from "../../components/select/Select";
// // import { useContext } from "react";
// // import Select from "react-select";
// // import { AppContext } from "../../context/AppProvider";
// import { baseURL, iWs, labelsWs } from "../../utils/data";
// import axios from "axios";
// import "./iqomah.css";

const Iqomah = () => {
  const navigate = useNavigate();
  const [dataIqomah, setDataIqomah] = useState([]);
  const options = Array.from({ length: 10 }, (_, x) => {
    return { val: x, lbl: x };
  });

  useEffect(() => {
    getDataIqomah().then((data) => {
      console.log(data);
      setDataIqomah(data);
    });
  }, []);

  const selectChange = (e) => {
    const id = parseInt(e.target.name);
    const val = parseInt(e.target.value);
    setDataIqomah(
      dataIqomah.map((c, i) => {
        return i === id ? val : c;
      })
    );
  };

  const sendIqomah = () => {
    console.log(dataIqomah);
    postDataIqomah(dataIqomah);
  };

  //   console.log(dataIqomah)
  return (
    <div className="page">
      <span className="title">Set Iqomah</span>
      <div className="flex-column">
        {labelsWs.map((label, i) => {
          return (
            <div className="flex-align-center" key={i}>
              {/* <label>{label}</label> */}
              <span className="flex-2">{label}</span>
              <Select
                name={iWs[i]}
                className={"flex-3"}
                options={options}
                onChange={selectChange}
                id={iWs[i]}
                value={dataIqomah.length === 0 ? 0 : dataIqomah[iWs[i]]}
              />
            </div>
          );
        })}
      </div>

      {/* <br /> */}
      <button onClick={sendIqomah}>Kirim</button>
      <ButtonHome />
      {/* <button onClick={() => navigate("/")}>Home</button> */}
    </div>
  );
};

export default Iqomah;

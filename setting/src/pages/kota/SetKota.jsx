import React, { useContext } from "react";
import databaseKota from "../../utils/dbkota";
import Select from "react-select";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./setKota.css";
import { useState } from "react";
import { useEffect } from "react";
import { AppContext } from "../../context/AppProvider";
import { getKota, postKota } from "../../api/api";
import ButtonHome from "../../components/ButtonHome";
// import { baseURL } from "../../utils/data";

const SetKota = () => {
  // const navigate = useNavigate();
  // const { baseURL } = useContext(AppContext);
  const [kota, setKota] = useState({});

  const inputChange = (e) => {
    let { value, min, max } = e.target;
    if (e.target.name !== "nama") {
      value = Math.max(min, Math.min(max, Number(e.target.value)));
      if (e.target.name === "timezone") value = Math.round(value);
    }
    setKota({ ...kota, [e.target.name]: value });
  };

  const kotaSelected = (item) => {
    setKota(databaseKota.filter((kota) => kota.nama === item.value)[0]);
  };

  const sendKota = () => {
    console.log(kota);
    postKota(kota);
    // axios.post(baseURL + "/kota", kota).then((response) => {
    //   console.log(response.data);
    // });
  };

  useEffect(() => {
    getKota().then((kota) => {
      console.log(kota);
      setKota(kota);
    });
  }, []);

  return (
    <div className="setKota">
      <span className="title">Set Kota</span>

      <div className="property">
        <label htmlFor="nama">Nama</label>
        <input
          type="text"
          name="nama"
          value={kota.nama}
          onChange={inputChange}
        />
      </div>

      <div className="property">
        <label htmlFor="lintang">Lintang</label>
        <input
          type="number"
          name="lintang"
          min={-90}
          max={90}
          value={kota.lintang}
          onChange={inputChange}
        />
      </div>

      <div className="property">
        <label htmlFor="bujur">Bujur</label>
        <input
          type="number"
          name="bujur"
          min={-180}
          max={180}
          value={kota.bujur}
          onChange={inputChange}
        />
      </div>

      <div className="property">
        <label htmlFor="timezone">Timezone</label>
        <input
          type="number"
          name="timezone"
          min={-12}
          max={14}
          step="1"
          value={kota.timezone}
          onChange={inputChange}
        />
      </div>

      <div className="pilihKota">
        <label htmlFor="pilihKota">
          <b>Pilih Kota</b>
        </label>
        <Select
          name="pilihKota"
          options={databaseKota.map((kota) => {
            return { value: kota.nama, label: kota.nama };
          })}
          onChange={kotaSelected}
        />
      </div>

      <button onClick={sendKota}>Kirim</button>
      <ButtonHome />
      {/* <button onClick={() => navigate("/setting")}>Home</button> */}
    </div>
  );
};

export default SetKota;

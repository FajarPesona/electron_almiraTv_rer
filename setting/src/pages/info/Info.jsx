import React, { useEffect, useState } from "react";
// import { baseURL } from "../../utils/data";
import { useNavigate } from "react-router-dom";
import { getInfo, postInfo } from "../../api/api";
// import axios from "axios";
import "./info.css";

const Info = () => {
  const navigate = useNavigate();
  const [info, setInfo] = useState(null);
  let lk = { saldoSebelumnya: 0, pemasukan: 0, pengeluaran: 0, saldoAkhir: 0 };

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

  const inputLKChange = (e) => {
    let val = parseInt(e.target.value);
    let name = e.target.name;
    val = isNaN(val) ? 0 : val;
    lk.saldoSebelumnya = info.saldoSebelumnya;
    lk.pemasukan = info.pemasukan;
    lk.pengeluaran = info.pengeluaran;
    lk = { ...lk, [name]: val };
    lk.saldoAkhir =
      parseInt(lk.saldoSebelumnya) +
      parseInt(lk.pemasukan) -
      parseInt(lk.pengeluaran);
    setInfo({ ...info, [name]: val, saldoAkhir: lk.saldoAkhir });
  };

  return (
    <div className="page">
      <span className="title">Set Info</span>

      <div className="flex-column">
        {/* <div className="flex-align-center">
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
        </div> */}

        <InfoInputText
          label="Nama Masjid"
          name="nama"
          onChange={inputChange}
          value={info ? info.nama : ""}
        />
        <InfoInputText
          label="Alamat Masjid"
          name="alamat"
          onChange={inputChange}
          value={info ? info.alamat : ""}
        />

        <span className="title">Info Saldo</span>
        <InfoInputText
          label="judul"
          name="judulLK"
          onChange={inputChange}
          value={info ? info.judulLK : ""}
        />
        <InfoInputNumber
          label="Saldo sebelumnya"
          name="saldoSebelumnya"
          onChange={inputLKChange}
          value={info ? info.saldoSebelumnya : 0}
        />
        <InfoInputNumber
          label="Pemasukan"
          name="pemasukan"
          onChange={inputLKChange}
          value={info ? info.pemasukan : 0}
        />
        <InfoInputNumber
          label="Pengeluaran"
          name="pengeluaran"
          onChange={inputLKChange}
          value={info ? info.pengeluaran : 0}
        />
        <InfoInputNumber
          label="Saldo akhir"
          name="saldoAkhir"
          value={info ? info.saldoAkhir : 0}
        />
      </div>
      <button onClick={sendInfo}>Kirim</button>
      <button onClick={() => navigate("/")}>Home</button>
    </div>
  );
};

const InfoInputText = ({ label, name, onChange, value }) => {
  return (
    <div className="flex-align-center">
      <span className="flex-1">{label}</span>
      <input
        className="flex-2"
        name={name}
        type="text"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

const InfoInputNumber = ({ label, name, onChange, value }) => {
  return (
    <div className="flex-align-center">
      <span className="flex-1">{label}</span>
      <input
        className="flex-2"
        name={name}
        type="number"
        min={"0"}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Info;

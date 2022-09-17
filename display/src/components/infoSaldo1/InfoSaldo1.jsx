import React, { useContext } from "react";
import { AppContext } from "../../context/AppProvider";
import "./infoSaldo1.css";

const InfoSaldo1 = () => {
  const { context } = useContext(AppContext);

  return (
    <div className="saldoContainer">
      <span className="titleSaldo">
        {context.allData.info ? context.allData.info.judulLK : ""}
      </span>
      {/* <div className="divTitleSaldo"></div> */}
      <div className="divKeteranganSaldo">
        <span className="keteranganSaldo">Saldo sebelumnya</span>
        <span>
          Rp. {context.allData.info ? context.allData.info.saldoSebelumnya : ""}
          ,-
        </span>
      </div>
      <div className="divKeteranganSaldo">
        <span className="keteranganSaldo">Pemasukan</span>
        <span>
          Rp. {context.allData.info ? context.allData.info.pemasukan : ""}
          ,-
        </span>
      </div>
      <div className="divKeteranganSaldo">
        <span className="keteranganSaldo">Pengeluaran</span>
        <span>
          Rp. {context.allData.info ? context.allData.info.pengeluaran : ""}
          ,-
        </span>
      </div>
      <hr />
      <div className="divKeteranganSaldo saldoAkhir">
        <span className="keteranganSaldo">Saldo akhir </span>
        <span>
          Rp. {context.allData.info ? context.allData.info.saldoAkhir : ""}
          ,-
        </span>
      </div>
      <div className="divTerimakasih">
        <span className="Terimakasih">
          Terima Kasih atas Infaq/Shodaqoh para jama'ah
        </span>
        <span className="Terimakasih">
          Semoga menjadi amal ibadah yang diterima Allah
        </span>
      </div>
    </div>
  );
};

export default InfoSaldo1;

import { createContext, useState } from "react";

export const AppContext = createContext(null);

export const AppContextProvider = ({ children }) => {
  // const [kota, setKota] = useState({});
  const [prayerTimes, setPrayerTimes] = useState(null);
  const [tarhimTimes, setTarhimTimes] = useState(null);
  const [strJam, setStrJam] = useState(null);
  const [strHari, setStrHari] = useState(null);
  const [strTglM, setStrTglM] = useState(null);
  const [strTglH, setStrTglH] = useState(null);
  const [allData, setAllData] = useState({});
  const [indexTarhim, setIndexTarhim] = useState(0);
  const [indexAdzan, setIndexAdzan] = useState(0);

  const context = {
    // kota,
    // setKota,
    allData,
    setAllData,
    prayerTimes,
    setPrayerTimes,
    tarhimTimes,
    setTarhimTimes,
    strJam,
    setStrJam,
    strHari,
    setStrHari,
    strTglM,
    setStrTglM,
    strTglH,
    setStrTglH,
    indexTarhim,
    setIndexTarhim,
    indexAdzan,
    setIndexAdzan,
  };
  const value = {
    context,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

//   const [kota, setKota] = useState({
//     nama: "Jakarta",
//     lintang: -6.16,
//     bujur: 106.61,
//     zona: 7,
//   });

//   const labelsWs = [
//     "Imsak",
//     "Subuh",
//     "Syuruq",
//     "Dhuha",
//     "Dzuhur",
//     "Ashar",
//     "Maghrib",
//     "Isya",
//   ];

// const labelsWs = ["Subuh", "Dzuhur", "Ashar", "Maghrib", "Isya"];

// const baseURL = "http://192.168.1.4:5000/setting/";

// const iWs = [1, 4, 5, 6, 7];

// const [data, setData] = useState({
//   kota: {},
//   prayerNames: [],
//   prayerTimes: [],
//   tarhimTimes: [],
//   dataTarhim: [],
//   dataAdzan: [],
//   dataIqomah: [],
//   runtext: [],
//   modeAdzan: 0,
// });

// const value = {
//   data,
//   setData,
//   baseURL,
//   labelsWs,
//   iWs,
// };

import axios from "axios";
import {
  defaultDataAdzan,
  defaultDataTarhim,
  defaultInfo,
  defaultIqomah,
  defaultKoreksi,
  defaultKota,
  defaultRuntext,
} from "./defaultData";

// const baseURL = "http://192.168.1.4:5000/setting/";
const baseURL = "http://192.168.1.2:5000/setting/";
// const baseURL = "http://localhost:5000/setting/";
// const baseURL = "http://localhost:5000/setting/";
// const baseURL = "setting/";

const test = () => {
  axios.post(baseURL + "test", { msg: "hello" }).then((response) => {
    console.log(response.data);
  });
};

const getAllData = async () => {
  return await axios.get(baseURL + "all").then((response) => {
    return response.data ? response.data : {};
  });
};

const getKota = async () => {
  return await axios.get(baseURL + "all").then((response) => {
    return response.data.kota ? response.data.kota : defaultKota;
  });
};

const postKota = (kota) => {
  axios.post(baseURL + "/kota", kota).then((response) => {
    console.log(response.data);
  });
};

const getRuntext = async () => {
  return await axios.get(baseURL + "all").then((response) => {
    return response.data.runtext ? response.data.runtext : defaultRuntext;
  });
};

const postRuntext = (runtext) => {
  axios.post(baseURL + "/runtext", runtext).then((response) => {
    console.log(response.data);
  });
};

const getDataAdzan = async () => {
  return await axios.get(baseURL + "all").then((response) => {
    return response.data.dataAdzan ? response.data.dataAdzan : defaultDataAdzan;
  });
};

const postDataAdzan = (dataAdzan) => {
  axios.post(baseURL + "/adzan", dataAdzan).then((response) => {
    console.log(response.data);
  });
};

const getDataTarhim = async () => {
  return await axios.get(baseURL + "all").then((response) => {
    return response.data.dataTarhim
      ? response.data.dataTarhim
      : defaultDataTarhim;
  });
};

const postDataTarhim = (dataAdzan) => {
  axios.post(baseURL + "/tarhim", dataAdzan).then((response) => {
    console.log(response.data);
  });
};

const getDataIqomah = async () => {
  return await axios.get(baseURL + "all").then((response) => {
    return response.data.dataIqomah ? response.data.dataIqomah : defaultIqomah;
  });
};

const postDataIqomah = (dataIqomah) => {
  axios.post(baseURL + "/iqomah", dataIqomah).then((response) => {
    console.log(response.data);
  });
};

const getKoreksi = async () => {
  return await axios.get(baseURL + "all").then((response) => {
    return response.data.koreksi ? response.data.koreksi : defaultKoreksi;
  });
};

const postKoreksi = (koreksi) => {
  axios.post(baseURL + "/koreksi", koreksi).then((response) => {
    console.log(response.data);
  });
};

const getInfo = async () => {
  console.log(1);
  return await axios.get(baseURL + "all").then((response) => {
    return response.data.info ? response.data.info : defaultInfo;
  });
};

const postInfo = (info) => {
  axios.post(baseURL + "/info", info).then((response) => {
    console.log(response.data);
  });
};

const postTime = (time) => {
  axios.post(baseURL + "/time", { time }).then((response) => {
    console.log(response.data);
  });
};

const postDate = (date) => {
  axios.post(baseURL + "/date", { date }).then((response) => {
    console.log(response.data);
  });
};

const postDateTime = (date, time) => {
  console.log({ date, time });
  axios.post(baseURL + "/datetime", { date, time }).then((response) => {
    console.log(response.data);
  });
};

const playMp3 = (track) => {
  console.log("play");
  axios.post(baseURL + "play", { track }).then((response) => {
    console.log(response.data);
  });
};

const StopMp3 = () => {
  axios.post(baseURL + "stop").then((response) => {
    console.log(response.data);
  });
};

const playMurottal = (track) => {
  console.log("play murottal");
  axios.post(baseURL + "playMurottal", { track }).then((response) => {
    console.log(response.data);
  });
};

const stopMurottal = () => {
  axios.post(baseURL + "/stopMurottal").then((response) => {
    console.log(response.data);
  });
};

export {
  test,
  getAllData,
  getKota,
  postKota,
  getRuntext,
  postRuntext,
  getDataAdzan,
  postDataAdzan,
  getDataTarhim,
  postDataTarhim,
  getDataIqomah,
  postDataIqomah,
  getKoreksi,
  postKoreksi,
  getInfo,
  postInfo,
  postTime,
  postDate,
  postDateTime,
  playMp3,
  StopMp3,
  playMurottal,
  stopMurottal,
};

const fs = require("fs");
const { settingPath, settingJsonFile } = require("../../paths");
const { saveDate, saveTime, saveDateTime } = require("../utils/datetime");
let allData = require(settingJsonFile);

let response = null;

const event = {
  allData: 0,
  setTime: 1,
  setDate: 2,
  playMp3: 3,
  stopMp3: 4,
  playMurottal: 5,
  stopMurottal: 6,
  // setKota: 1,
  // setRuntext: 2,
};

function see(event, val) {
  const data = JSON.stringify({ event, val });
  // console.log(data);
  if (response) response.write(`data: ${data}\n\n`);
}

const saveAndSend = (res) => {
  fs.writeFileSync(settingJsonFile, JSON.stringify(allData));
  see(event.allData, allData);
  res.send("ok");
};

function eventsHandler(req, res, next) {
  res.set({
    "Cache-Control": "no-cache",
    "Content-Type": "text/event-stream",
    Connection: "keep-alive",
  });
  res.flushHeaders();
  response = res;
  console.log("connect");
  see(event.allData, allData);
}

/**------------------------------------------- */

const renderSettingUi = (req, res) => {
  res.sendFile("index.html", { root: settingPath });
  // res.send("ok");
};

const getAllData = async (req, res) => {
  console.log("getAllData");
  console.log(allData);
  res.json(allData);
};

const setKota = async (req, res) => {
  allData.kota = req.body;
  saveAndSend(res);
  // see(event.allData, allData, res);

  // fs.writeFileSync(settingJsonFile, JSON.stringify(allData));
  // see(event.allData, allData);
  // res.send("ok");
};

const setIqomah = async (req, res) => {
  allData.dataIqomah = req.body;
  saveAndSend(res);
  // console.log(allData.dataIqomah);
  // fs.writeFileSync(settingJsonFile, JSON.stringify(allData));
  // res.send("ok");
};

const setTarhim = async (req, res) => {
  allData.dataTarhim = req.body;
  saveAndSend(res);
  // console.log(allData.dataTarhim);
  // fs.writeFileSync(settingJsonFile, JSON.stringify(allData));
  // res.send("ok");
};

const setAdzan = async (req, res) => {
  allData.dataAdzan = req.body;
  saveAndSend(res);
  // console.log(allData.dataAdzan);
  // fs.writeFileSync(settingJsonFile, JSON.stringify(allData));
  // res.send("ok");
};

const setRuntext = async (req, res) => {
  allData.runtext = req.body;
  saveAndSend(res);
};

const setKoreksi = async (req, res) => {
  allData.koreksi = req.body;
  saveAndSend(res);
  // console.log(allData.koreksi);
  // fs.writeFileSync(settingJsonFile, JSON.stringify(allData));
  // res.send("ok");
};

const setInfo = async (req, res) => {
  console.log("setInfo");
  allData.info = req.body;
  saveAndSend(res);
  // console.log(allData.info);
  // fs.writeFileSync(settingJsonFile, JSON.stringify(allData));
  // res.send("ok");
};

const playMp3 = async (req, res) => {
  const track = req.body.track;
  console.log(track);
  see(event.playMp3, track);
  res.send("ok");
};

const stopMp3 = async (req, res) => {
  console.log("stop");
  res.send("ok");
  see(event.stopMp3, {});
};

const playMurottal = async (req, res) => {
  const val = req.body;
  console.log(val);
  see(event.playMurottal, val);
  res.send("ok");
};

const stopMurottal = async (req, res) => {
  console.log("stop");
  res.send("ok");
  see(event.stopMurottal, {});
};

const setTime = async (req, res) => {
  const time = req.body;
  console.log("setting time:", time);
  saveTime(time);
  see(event.setTime, time);
  // BrowserWindow.fromId(1).reload();
  res.send("ok");
};

const setDate = async (req, res) => {
  const date = req.body;
  console.log("setting date", date);
  saveDate(date);
  see(event.setDate, date);

  // BrowserWindow.fromId(1).reload();
  res.send("ok");
};

const setDateTime = async (req, res) => {
  // console.log(1);
  const datetime = req.body;
  // console.log("setting datetime", datetime);
  saveDateTime(datetime);
  // BrowserWindow.fromId(1).reload();
  res.send("ok");
};

const test = (req, res) => {
  data = req.body;
  res.send("ok");
  // console.log(data);
  if (response) {
    response.write(`data: ${JSON.stringify(data)}\n\n`);
  }
};

module.exports = {
  renderSettingUi,
  eventsHandler,
  getAllData,
  setKota,
  setIqomah,
  setTarhim,
  setAdzan,
  setRuntext,
  setKoreksi,
  setInfo,
  setTime,
  setDate,
  setDateTime,
  playMp3,
  stopMp3,
  playMurottal,
  stopMurottal,
  test,
};

// server.post("/set", (req, res) => {
//   msg = req.body;
//   res.send("ok");
//   console.log(msg);
//   if (response) {
//     response.write(`data: ${JSON.stringify(msg)}\n\n`);
//   }
// });

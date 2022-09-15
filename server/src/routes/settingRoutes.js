const {
  renderSettingUi,
  test,
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
  playMp3,
  stopMp3,
  setDateTime,
} = require("../controllers/settingController");

const router = require("express").Router();

router.get("/", renderSettingUi);

router.get("/all", getAllData);

router.post("/kota", setKota);

router.post("/iqomah", setIqomah);

router.post("/tarhim", setTarhim);

router.post("/adzan", setAdzan);

router.post("/runtext", setRuntext);

router.post("/koreksi", setKoreksi);

router.post("/info", setInfo);

router.post("/time", setTime);

router.post("/date", setDate);

router.post("/datetime", setDateTime);

router.post("/play", playMp3);

router.post("/stop", stopMp3);

router.post("/test", test);

module.exports = router;

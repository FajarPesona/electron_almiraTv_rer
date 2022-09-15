const path = require("path");
const displayPath = path.join(__dirname, "../display/build");
const settingPath = path.join(__dirname, "../setting/build");
const settingJsonFile = path.resolve("F:/json/setting.json");

console.log(settingPath);

module.exports = { displayPath, settingPath, settingJsonFile };

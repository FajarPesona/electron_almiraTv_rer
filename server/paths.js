const path = require("path");
const displayPath = path.join(__dirname, "../display/build");
// const settingPath = path.join(__dirname, "../setting/build");
const settingPath = path.join(__dirname, "public/setting/");
// const displayPath = path.join(__dirname, "public/display/");

const settingJsonFile = path.resolve("F:/json/setting.json");
const passFile = path.resolve("F:/stb/secret/pass.json");

console.log(settingPath);

module.exports = { displayPath, settingPath, settingJsonFile, passFile };

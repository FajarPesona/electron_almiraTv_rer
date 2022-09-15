const { displayPath } = require("../../paths");

const renderDisplay = (req, res) => {
  res.sendFile("index.html", { root: displayPath });
};

module.exports = { renderDisplay };

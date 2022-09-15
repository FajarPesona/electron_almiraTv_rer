const { renderDisplay } = require("../controllers/displayController");

const router = require("express").Router();

router.get("/", renderDisplay);

module.exports = router;

const router = require("express").Router();

const movie = require("./movies");

router.use("/movies", movie);

module.exports = router;

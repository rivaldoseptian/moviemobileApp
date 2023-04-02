const Controller = require("../controller/controller");

const router = require("express").Router();

router.get("/showmovies", Controller.fetchMovie);
router.post("/createuser", Controller.createUser);
router.get("/detailmovie/:movieId", Controller.detailMovie);

module.exports = router;

const Controller = require("../controller/controller");
const authentication = require("../middleware/authentication");

const router = require("express").Router();

router.get("/pub/fetchmovie", Controller.fetchMovie);
router.get("/fetchmovie", Controller.fetchMovie);
router.post("/create", Controller.createMovie);
router.put("/edit/:movieId", Controller.editMovie);
router.get("/detail/:movieId", Controller.detailMovie);
router.delete("/delete/:movieId", Controller.deleteMovie);
router.get("/pub/detail/:movieId", Controller.detailMovie);

module.exports = router;

const Controller = require("../controller/controller");
const authentication = require("../middleware/authentication");

const router = require("express").Router();

router.get("/fetchgenre", Controller.showGenre);
router.post("/create", Controller.createGenre);
router.delete("/delete/:genreId", Controller.deleteGenre);

module.exports = router;

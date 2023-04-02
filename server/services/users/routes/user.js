const {
  findAllUser,
  findOne,
  addUser,
  destroyUser,
} = require("../controller.js/UserController");

const router = require("express").Router();

router.post("/create", addUser);
router.get("/showuser", findAllUser);
router.get("/find/:id", findOne);
router.delete("/delete/:id", destroyUser);
module.exports = router;

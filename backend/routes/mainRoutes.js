const express = require("express");
const router = express.Router();
const {
  login,
  registerEmployer,
  registerFreelance,
} = require("../controllers/mainControllers");

router.route("/login").post(login);
router.route("/registerEmployer").post(registerEmployer);
router.route("/registerFreelance").post(registerFreelance);

module.exports = router;

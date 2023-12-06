const express = require("express");
const router = express.Router();
const {
  loginEmployer,
  loginFreelancer,
  registerEmployer,
  registerFreelancer,
  updateEmployer,
  updateFreelancer,
  logout,
} = require("../controllers/mainControllers");

const {authenticateEmployer, authenticateFreelancer} = require('../middleware/mainMiddleware');

router.route("/loginEmployer").post(loginEmployer);
router.route("/loginFreelancer").post(loginFreelancer);
router.route("/registerEmployer").post(registerEmployer);
router.route("/registerFreelancer").post(registerFreelancer);

router.route("/updateEmployer").post(authenticateEmployer, updateEmployer);
router.route("/updateFreelancer").post(authenticateFreelancer, updateFreelancer);
router.route("/logout").post(logout);

module.exports = router;

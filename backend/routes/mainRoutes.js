const express = require("express");
const multer  = require("multer")
var path = require('path');
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

var employerUploads = multer.diskStorage({
   destination: function (req, file, cb) {
      cb(null, 'uploads/employer');
   },
   filename: function (req, file, cb) {
      cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
   }
});

var freelancerUploads = multer.diskStorage({
   destination: function (req, file, cb) {
      cb(null, 'uploads/freelancer');
   },
   filename: function (req, file, cb) {
      cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
   }
});

var employerUploads = multer({ storage: employerUploads });

var freelancerUploads = multer({ storage: freelancerUploads });

router.route("/loginEmployer").post(loginEmployer);
router.route("/loginFreelancer").post(loginFreelancer);
router.route("/registerEmployer").post(employerUploads.single('emp_pfp'), registerEmployer);
router.route("/registerFreelancer").post(freelancerUploads.single('f_pfp'), registerFreelancer);

router.route("/updateEmployer").post(authenticateEmployer, updateEmployer);
router.route("/updateFreelancer").post(authenticateFreelancer, updateFreelancer);
router.route("/logout").post(logout);

module.exports = router;

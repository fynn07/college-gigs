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
  applyFreelancerWork,
  updateFreelancer,
  logout,
  getFreelancerDetails,
  deleteFreelancerWork,
  getFreelancerWorks,
  hireFreelancer,
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

router.route("/loginFreelancer").post(loginFreelancer);
router.route("/registerFreelancer").post(freelancerUploads.single('f_pfp'), registerFreelancer);
router.route("/updateFreelancer").post(employerUploads.single('f_pfp'), authenticateFreelancer, updateFreelancer);
router.route("/getFreelancerDetails").get(getFreelancerDetails);
router.route("/applyFreelancerWork").post(authenticateFreelancer, applyFreelancerWork);
router.route("/deleteFreelancerWork").delete(authenticateFreelancer, deleteFreelancerWork);
router.route("/getFreelancerWorks").get(getFreelancerWorks);
router.route("/hireFreelancer").post(authenticateEmployer, hireFreelancer);

router.route("/loginEmployer").post(loginEmployer);
router.route("/registerEmployer").post(employerUploads.single('emp_pfp'), registerEmployer);
router.route("/updateEmployer").post(employerUploads.single('emp_pfp'), authenticateEmployer, updateEmployer);

router.route("/logout").post(logout);

module.exports = router;
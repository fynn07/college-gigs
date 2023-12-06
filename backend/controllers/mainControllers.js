const asyncHandler = require("express-async-handler");
const connection = require("../config/dbConfig");

async function queryDatabase(query, values = []) {
  return new Promise((resolve, reject) => {
    connection.query(query, values, function (error, results) {
      if (error) {
        console.error("Database error:", error);
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
}

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const result = await queryDatabase(
    "SELECT * FROM `c_gigs_s_up_employer`, `c_gigs_s_up_financer` where email = ?",
    [email]
  );

  if (result.length == 0) {
    return res.status(404).send("Email not found!");
  }

  return;
});

const registerEmployer = asyncHandler(async (req, res) => {
  const {
    emp_name,
    emp_email,
    emp_pass,
    emp_comp,
    emp_fb,
    emp_insta,
    emp_linkedin,
    emp_page,
    emp_address,
  } = req.body;

  const result = await queryDatabase(
    "SELECT * FROM `c_gigs_s_up_employer` where email = ?",
    [email]
  );
  if (result.length > 0)
    return res.status(409).send("email is already registered");

  const salt = bcrypt.genSaltSync(10);
  password = bcrypt.hashSync(password, salt);

  const newUser = await queryDatabase(
    "INSERT INTO `c_gigs_s_up_employer` (emp_name, emp_email, emp_pass, emp_comp, emp_fb, emp_insta, emp_linkedin, emp_page, emp_address)",
    [
      emp_name,
      emp_email,
      emp_pass,
      emp_comp,
      emp_fb,
      emp_fb,
      emp_insta,
      emp_linkedin,
      emp_page,
      emp_address,
    ]
  );
  return res.status(200).send("success");
});
const registerFreelance = asyncHandler(async (req, res) => {
  const {
    name,
    email,
    password,
    school,
    currentYearLevel,
    course,
    portfolioLink,
    facebookLink,
    instagramLink,
    linkedInLink,
    twitterLink,
  } = req.body;

  const result = await queryDatabase(
    "SELECT * FROM `c_gigs_s_up_employer` where email = ?",
    [email]
  );
});

module.exports = {
  login,
  registerEmployer,
  registerFreelance,
};

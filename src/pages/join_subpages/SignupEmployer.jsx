import React from "react";
import { Link } from "react-router-dom";
import { axiosFetch } from "../../utils/axios";
import { toast } from "react-toastify";
import "../../styles/subpage_styles/signup_employer.css";

function SignupEmployer() {
  async function handleRegisterEmployer(e) {
    try {
      e.preventDefault();

      const formData = new FormData(e.target);

      const data = await axiosFetch.post("/employer/register", formData);

      console.log(data);

      if (data.status !== 200) {
        throw new Error(data.statusText);
      }

      toast.success("Employer registered successfully!");
    } catch (e) {
      toast.error(e.message);
    }
  }

  return (
    <div className="sign_log_container container-signup">
      <div className="header">
        <h1 className="login_header">Employer Signup</h1>
      </div>
      <div className="form-cont">
        <form
          onSubmit={handleRegisterEmployer}
          method="post"
          action=""
          encType="multipart/form-data"
        >
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="emp_name" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="emp_email" required />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="emp_pass" required />

          <label htmlFor="company">Company Name</label>
          <input type="text" id="company" name="emp_comp" required />

          <label htmlFor="linked">Company Address</label>
          <input type="text" id="address" name="emp_address" />

          <label htmlFor="port">Company Page</label>
          <input type="text" id="port" name="emp_page" />

          <label htmlFor="fb">Company FaceBook</label>
          <input type="text" id="fb" name="emp_fb" />

          <label htmlFor="insta">Company Instagram</label>
          <input type="text" id="insta" name="emp_insta"></input>

          <label htmlFor="linked">Company LinkedIn</label>
          <input type="text" id="linked" name="emp_linkedin" />

          <label htmlFor="pfp">Upload Profile Picture</label>
          <input type="file" id="myFile" name="emp_pfp" />

          <button type="submit" name="submit">
            Sign Up
          </button>
        </form>


        <br />
        <div className="existing-account">
          <p>
            Already have an account? <Link to="/login/employer">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignupEmployer;

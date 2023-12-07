import React from "react";
import { checkMissingInputs } from "../../utils/helper";
import { toast } from "react-toastify";
import { axiosFetch } from "../../utils/axios";
import { Link } from "react-router-dom";

function LoginFreelancer() {
  async function handleLoginFreelancer(e) {
    try {
      let inputs = {
        f_email: e.target.email.value,
        f_password: e.target.password.value,
      };

      checkMissingInputs();
      const data = await axiosFetch.post("/loginFreelancer", inputs);

      localStorage.setItem("userDetails", data.data.freelancer);
      localStorage.setItem("token", data.data.token);
    } catch (e) {
      toast.error(e.message);
    }
  }

  return (
    <div className="sign_log_container container-login">
      <div className="header">
        <h1 className="login_header">Freelancer Login</h1>
      </div>
      <div className="form-cont">
        <form onSubmit={handleLoginFreelancer} method="post" action=" ">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Please enter your email..."
            required
          ></input>{" "}
          <br />
          <br />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Please enter your password..."
            required
          ></input>{" "}
          <br />
          <br />
          <button type="submit" name="l_freelancer">
            Login
          </button>
        </form>

        <div className="error-message">
          {/* {missingFieldsError && <p>Please fill out all fields.</p>} */}
          <br />
          <p>
            Not a Freelancer?{" "}
            <strong>
              <Link to="/Login/employer">Login</Link>
            </strong>{" "}
            as an Employer now!
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginFreelancer;

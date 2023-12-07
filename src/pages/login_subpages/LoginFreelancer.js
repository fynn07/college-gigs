import React, { useState } from "react";
import { axiosFetch } from "../../utils/axios";
import { Link } from "react-router-dom";

function LoginFreelancer() {
  // const [error, setError] = useState(false);

  async function handleLoginFreelancer(e) {
    let inputs = {
      f_email: e.target.email.value,
      f_password: e.target.password.value,
    };

    console.log(inputs);

    const data = await axiosFetch.post("/loginFreelancer", inputs);

    localStorage.setItem("userDetails", data.data);
    localStorage.setItem("token", data.data.token);
  }

  return (
    <div className="sign_log_container container-login">
      <div className="header">
        <h1 className="login_header">Freelancer Login</h1>
      </div>
      <div className="form-cont">
        <form method="post" action=" ">
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
          <p>Please fill out all fields.</p>
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

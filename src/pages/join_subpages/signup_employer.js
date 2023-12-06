import React from 'react'
import {Link} from 'react-router-dom'
import '../../styles/subpage_styles/signup_employer.css';

function signup_employer() {
  return (
    <div className='container-signup'>
      <div className='header'>
        <h1 className="login_header">Employer Signup</h1>
      </div>
      <div className='form-cont'>
      <form method="post" action="" enctype="multipart/form-data">
      <label for="name">Name</label>
          <input type="text" id="name" name="name" required/>

          <label for="email">Email</label>
          <input type="email" id="email" name="email" required/>

          <label for="password">Password</label>
          <input type="password" id="password" name="password" required/>

          <label for="company">Company Name</label>
          <input type="text" id="company" name="company" required/>

          <label for="linked">Company Address</label>
          <input type="text" id="address" name="address"/>
          
          <label for="port">Company Page</label>
          <input type="text" id="port" name="port"/>

          <label for="fb">Company FaceBook</label>
          <input type="text" id="fb" name="fb"/>

          <label for="insta">Company Instagram</label>
          <input type="text" id="insta" name="insta"></input>

          <label for="linked">Company LinkedIn</label>
          <input type="text" id="linked" name="linked"/>

          <label for="pfp">Upload Profile Picture</label>
          <input type="file" id="myFile" name="filename"/>
          
          {/* SAJULGA TODO - DATABASE IMPLEMENTATION FOR SIGNUP */}
          
          <button type="submit" name="submit">Sign Up</button>
        </form>
        <div class="error-message">
          <br/><p>Please fill out all fields.</p>
        </div>
        <br/>
        <div class="existing-account">
          <p>Already have an account? <a href="/College_Gigs/College_Gigs_Login/Login_Employer.php">Log in</a></p>
        </div>
     </div>
    </div>
  )
}

export default signup_employer
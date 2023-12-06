import React from 'react'
import '../../styles/subpage_styles/signup_freelancer.css';

function signup_freelancer() {
  return (
    <div className='sign_log_container container-signup'>
      <div className='header'>
        <h1 className="login_header">Freelancer Signup</h1>
      </div>
      <div className='form-cont'>
        <form method="post" action="" enctype="multipart/form-data">
        <label for="name">Name</label>
          <input type="text" id="name" name="name" required/>

          <label for="age">Age</label>
          <input type="text" id="age" name="age" required/>

          <label for="email">Email</label>
          <input type="email" id="email" name="email" required/>

          <label for="password">Password</label>
          <input type="password" id="password" name="password" required/>

          <label for="school">School</label>
          <select type="text" id="school" name="school" required>
          <option value="University of San Carlos: Talamban Campus">University of San Carlos: Talamban Campus</option>
            <option value="University of San Carlos: Downtown Campus">University of San Carlos: Downtown Campus</option>
            <option value="University of San Carlos: North Campus">University of San Carlos: North Campus</option>
            <option value="University of Cebu: Banilad">University of Cebu: Banilad</option>
            <option value="University of Cebu: Lapu-Lapu">University of Cebu: Lapu-Lapu</option>
            <option value="Others">Others</option>
          </select>

          <label for="level">Current Year Level</label>
          <select type="text" id="level" name="level" required>
            <option value="First Year">First Year</option>
            <option value="Second Year">Second Year</option>
            <option value="Third Year">Third Year</option>
            <option value="Fourth Year">Fourth Year</option>
            <option value="Nth Year">Nth-Year/ Greater than 4 Years</option>
          </select>

          <label for="course">Course</label>
          <input type="text" id="course" name="course" required/>

          <label for="port">Portfolio Link</label>
          <input type="text" id="port" name="port"/>

          <label for="fb">FaceBook Link</label>
          <input type="text" id="fb" name="fb"/>

          <label for="insta">Instagram Link</label>
          <input type="text" id="insta" name="insta"/>

          <label for="linked">LinkedIn Link</label>
          <input type="text" id="linked" name="linked"/>

          <label for="tweet">Twitter Link</label>
          <input type="text" id="tweet" name="tweet"/>

          <label for="pfp">Upload Profile Picture</label>
          <input type="file" id="myFile" name="filename"/>

          <button type="submit" name="signup">Sign Up</button>
        </form>
        <div class="error-message">
          <br/><p>Please fill out all fields.</p>
        </div>
        <br/>
        <div class="existing-account">
          <p>Already have an account? <a href="/College_Gigs/College_Gigs_Login/Login_F_Lancer.php">Log in</a></p>
        </div>
      </div>
    </div>
  )
}

export default signup_freelancer
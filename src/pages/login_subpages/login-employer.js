import React from 'react'
import {Link} from 'react-router-dom'
import '../../styles/login_subpage.css'
function login() {
  return (
    <div className='container-login'>
      <div className='header'>
        <h1 className="login_header">Employer Login</h1>
      </div>
      <div className='form-cont'>
        <form method='post' action=' '>
          <label for='email'>Email</label>
          <input type="email" id="email" name="email" placeholder="Please enter your email..." required></input> <br/><br/>
          <label for='password'>Password</label>
          <input type="password" id="password" name="password" placeholder="Please enter your password..." required></input> <br/><br/>

          {/* SAJULGA TO DO - ADD IMPLEMENTATION FOR LOGIN TO SEARCH DATABASE FOR ACCOUNT AND LOGIN*/}

          <button type="submit" name="l_employer">Login</button>
        </form>

        <div class="error-message">
          <p>Please fill out all fields.</p><br/>
          <p>Not an Employer? <strong><Link to='/Login/freelancer'>Login</Link></strong> as a Free-Lancer now!</p>
        </div>

      </div>
    </div>
   
  )
}

export default login
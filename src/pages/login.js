import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/login_n.css'

function login() {
  return (
    <div className='login-container'>
    <Link to='/Login/freelancer' style={{textDecoration: 'none', color: 'white'}}>
      <div className='login-freelancer'>
        <h2>Freelancer Login</h2>
      </div>
    </Link> 
    
    <Link to='/Login/employer' style={{textDecoration: 'none', color: 'white'}}>
    <div className='login-employer'>
      <h2>Employer Login</h2>
    </div>
    </Link>
    
 </div> 
  )
}

export default login
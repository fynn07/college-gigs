import React from 'react'
import {Link} from 'react-router-dom'

function login() {
  return (
    <div className='join-container'>
    <Link to='/Login/freelancer' style={{textDecoration: 'none', color: 'black'}}>
      <div className='join-freelancer'>
        <h2>Freelancer Login</h2>
      </div>
    </Link> 
    
    <Link to='/Login/employer' style={{textDecoration: 'none', color: 'black'}}>
    <div className='join-employer'>
      <h2>Employer Login</h2>
    </div>
    </Link>
    
 </div>  
  )
}

export default login
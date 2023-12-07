import React from 'react'
import '../styles/services.css'
import GDesign from '../components/resources/services_pictures/graphic_design.jpeg'
import Writing from '../components/resources/services_pictures/writing.jpeg'
import Programming from '../components/resources/services_pictures/programming.jpeg'
import Dmarketing from '../components/resources/services_pictures/digital_marketing.jpeg'
import {Link} from 'react-router-dom'

function services() {
  return (
    <div className='services-container'>
      <div className='header-services'>
        <h1>Welcome to College Gigs</h1>
        <p>Get things done with just five dollars. Find freelance services for your business or personal projects</p>
      </div>
      <div className='services-content'>
        <p className='content-title'>Popular Categories:</p>
        <div className='first-row-container'>

            <div className='child first-child'>
              <p>Graphic Design</p>
              <Link to='/'>
                <img src={GDesign} alt='Graphic Design'/>
              </Link>
            </div>
           
            <div className='child second-child'>
              <p>Writing</p>
              <Link to='/'>
              <img src={Writing} alt='Writing'/>
              </Link>
            </div>
          
            <div className='child third-child'>
              <p>Programming</p>
              <Link to=''>
              <img src={Programming} alt='Programming'/>
              </Link>
           </div>
            
            <div className='child fourth-child'>
              <p>Marketing</p>
              <Link to=''>
              <img src={Dmarketing} alt='Digital Marketing'/>
              </Link>
            </div>
          
         
        </div>
      </div>
    </div>
  )
}

export default services
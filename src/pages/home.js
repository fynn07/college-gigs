import React from 'react';
import Bg from '../components/resources/background.jpg';
import '../styles/home.css'
function home() {
  return (
    <div className='home'>
      <div className='headerContainer' style={{backgroundImage: `url(${Bg})`}}>
        <div className='content'>
          
        </div>  
      </div>
    </div>
  )
}

export default home
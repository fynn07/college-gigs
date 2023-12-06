import React from 'react';
import Daryl from '../components/resources/founders/daryl.jpg';
import Jab from '../components/resources/founders/Jab.jpg';
import Martin from '../components/resources/founders/Martin.jpg';
import Ryan from '../components/resources/founders/RyanY.jpg';

import '../styles/about.css';

function about() {
  return (
    <div className='content-container'>
      <div className='about-us'>
          <h1>About Us</h1>
      </div>
      <div className='portfolio'>
        <img src={Daryl} alt='daryl' className='portrait daryl'/>
        <img src={Jab} alt='jab' className='portrait jab'/>
        <img src={Martin} alt='martin' className='portrait martin'/>
        <img src={Ryan} alt='ryan' className='portrait ryan'/>
      </div>
      <div className='mission-vision'>
        <div className='mission'>
          <h1>hello</h1>
        </div>
        <div className='vision'>
          <h1>world</h1>
        </div>
      </div>

    </div>
  )
}

export default about
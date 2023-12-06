import React from 'react'
import '../styles/contact.css'

function contact() {
  return (
    <div className='contact-container'>
      <div className='header'>
          <h1>Contact Us</h1>
      </div> 
      <div className='container-contact'>
        <form action="/College_Gigs/C_Gigs_Home.php" method="post">
          <label for="email"><i class="fa fa-envelope"></i> Email</label>
          <input type="email" id="email" name="email" required/>
          <label for="subject">Subject</label>
          <input type="text" id="subject" name="subject"/>
            <label for="desc"><i class="fa fa-commenting-o"></i> Description</label>
            <textarea id="desc" name="desc" class="desc" placeholder="Describe your issue here..."></textarea>
            <button type="submit" name="send">Send Email</button>
        </form>
      </div>
    </div>
  )
}

export default contact
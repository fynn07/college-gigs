import React from 'react'
import '../styles/contact.css'

function contact() {
    return (
        <div id="contact">
            <div id='contact_container'>
                <div className="header" id='contact_header'>
                    <h1>Contact Us</h1>
                </div>
                <form id="contact_form" action="/College_Gigs/C_Gigs_Home.php" method="post">
                    <label htmlFor="email"><i className="fa fa-envelope"></i> Email</label>
                    <input type="email" id="email" name="email" required/>
                    <label htmlFor="subject">Subject</label>
                    <input type="text" id="subject" name="subject"/>
                    <label htmlFor="desc"><i className="fa fa-commenting-o"></i> Description</label>
                    <textarea id="desc" name="desc" className="desc" placeholder="Describe your issue here..."></textarea>
                    <button type="submit" name="send">Send Email</button>
                </form>
            </div>
        </div>
    )
}

export default contact
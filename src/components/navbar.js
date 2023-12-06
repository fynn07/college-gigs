import React from 'react'
import Logo from './resources/CollegeGigsLogo.png';
import {Link} from 'react-router-dom';
import "../styles/navbar.css"


function navbar() {
    return (
        <div className="navbar">
            <div className="leftSide">
                <img src={Logo} alt='logo'/>
            </div>
            <div className="rightSide">
                <div className="navbar_link">
                    <Link to="/"> Home </Link>
                    <Link to="/Login-Employer"> Login </Link>
                    <Link to="/Join"> Join Us </Link>
                    <Link to="/Services"> Services </Link>
                </div>

            </div>
        </div>

    )
}

export default navbar
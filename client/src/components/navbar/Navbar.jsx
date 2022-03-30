import React from 'react';
import {Link} from "react-router-dom";
import "./navbar.scss"
import Logo from "../../assets/img/logo_nav.png"

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="container">
                <img src={Logo} alt="" className="navbar__logo"/>
                <div className="navbar__header">MERN corse</div>
                {/*<div className="navbar__login"><Link to="/login"> Log In </Link></div>*/}
                {/*<div className="navbar__registration"><Link to="/registration"> Registration</Link></div>*/}
            </div>
        </div>
    );
};

export default Navbar;
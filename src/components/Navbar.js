import './Navbar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logo from '../img/logo.png'
import profile from '../img/profile.png';
import React, { useState } from 'react';


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    
    return (
        <nav className='navbar'>
            <div className='navbar_logo'>
                <a href='/community'>
                    <img src={logo} alt='logo'/>
                </a>
            </div>
            <ul className={`navbar_menu ${isMenuOpen ? 'active' : ''}`}>
                <li><a href='/community'>소통방</a></li>
                <li><a href='/tip'>육아팁</a></li>
                <li><a href='/diary'>다이어리</a></li>
                <li><a href='/mypage'><img src={profile}/></a></li>
            </ul>
            <a className='navbar_toggleBtn' onClick={toggleMenu}>
                <FontAwesomeIcon icon={faBars} />
            </a>
        </nav>
    );
};

export default Navbar;
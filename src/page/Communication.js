import './Communication.css';
import {Route} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logo from '../img/logo.png'
import profile from '../img/profile.png';
import React, { useState } from 'react';


const Communication = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    
    return (
        <div>
            <nav className='navbar'>
                <div className='navbar_logo'>
                    <a href=''>
                        <img src={logo} alt='logo'/>
                    </a>
                </div>
                <ul className={`navbar_menu ${isMenuOpen ? 'active' : ''}`}>
                    <li><a href=''>소통방</a></li>
                    <li><a href=''>육아팁</a></li>
                    <li><a href=''>다이어리</a></li>
                    <li><img src={profile}/></li>
                </ul>
                <a href='#' className='navbar_toggleBtn' onClick={toggleMenu}>
                    <FontAwesomeIcon icon={faBars} />
                </a>
            </nav>

            <body>
                <button>당신의 이야기를 들려주세요</button>
            </body>
        </div>
    );
};

export default Communication;
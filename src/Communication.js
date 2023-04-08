import './Communication.css';
import mom from './mom.png'
import baby from './baby.png'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import React from 'react'

const Communication = () => {

    window.onload = () => {
        const toggleBtn = document.querySelector('.navbar_toggleBtn');
        const menu = document.querySelector('.navbar_menu');

        toggleBtn.addEventListener('click', () => {
            menu.classList.toggle('active');
        });

    }

    return (
        <div>
            <nav className='navbar'>
                <div className='navbar_logo'>
                    <a href=''><img src={baby}/></a>
                </div>
                <ul className='navbar_menu'>
                    <li><a href=''>소통방</a></li>
                    <li><a href=''>육아팁</a></li>
                    <li><a href=''>다이어리</a></li>
                    <li><img src={mom}/></li>
                </ul>

                <a href='#' className='navbar_toggleBtn'>
                <FontAwesomeIcon icon={faBars} />
                </a>
            </nav>
        </div>
    )
}

export default Communication;

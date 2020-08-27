import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div className="Header">
            <h1 className="text-center">Welcome to Online Courses</h1>
            <img src={logo} alt=""/>
            <nav>
               <a href="/courses">Courses</a>
               <a href="/review">Review</a>
            </nav>
        </div>
        
    );
};

export default Header;
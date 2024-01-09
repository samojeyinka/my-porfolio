import React, { useEffect, useState, useContext } from 'react';
import { BiSun, BiMoon } from 'react-icons/bi';


const Header = () => {


   

    return (
        <header>
        <nav className="navbar">
            <ul className="menu-links">
                <li>Home</li>
                <li>Projects</li>
                <li>Contact</li>
                <li>Articles</li>
            </ul>
        </nav>
        </header>
    );
}

export default Header;

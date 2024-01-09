import React, { useEffect, useState, useContext } from 'react';
import { BiSun, BiMoon } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';


const Header = () => {
    const { theme, toggleTheme} = useTheme();

    return (
        <header className={`${theme}`}>
        <nav className="navbar">
            <ul className="menu-links">
                <li>
                    <Link to={'/about'}>About</Link>
                </li>
                <li>
                    <Link to={'/articles'}>Articles</Link>
                </li>
                <li>
                    <Link to={'/projects'}>Projects</Link>
                </li>
                <li>
                    <Link to={'/apis'}>APIs</Link>
                </li>
                <li>
                    <Link to={'/contact'}>Contact</Link>
                </li>
            </ul>
            <div className="theme-switch" onClick={toggleTheme}>
                {theme === 'dark-theme' ? (
                <BiSun size={25} className='icon'/>)
                : (<BiMoon size={25} className='icon'/>)
}
            </div>
        </nav>
        </header>
    );
}

export default Header;

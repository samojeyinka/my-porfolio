import React, { useEffect, useState, useContext } from 'react';
import { BiSun, BiMoon } from 'react-icons/bi';
import { useThemeHook, ThemeContext } from '../contexts/ThemeProvider';

const Header = () => {
    const { theme, setThemeMode } = useContext(ThemeContext);
    const [darkMode, setDarkMode] = useState(theme);

    useEffect(() => {
        setThemeMode(darkMode);
        console.log(darkMode);
    }, [darkMode]);

    return (
        <header className={darkMode ? 'bg-dark' : 'bg-light'}>
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

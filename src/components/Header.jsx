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
        <div className={darkMode ? 'bg-dark' : 'bg-light'}>
            <div className='theme-icons' onClick={() => setDarkMode(!darkMode)}>
                {darkMode ? <i className='fa-moon fa-icon text-white'><BiMoon /></i> :
                    <i className='fa-sun fa-icon text-black'><BiSun /></i>
                }
            </div>
            <h1>Header</h1>
        </div>
    );
}

export default Header;

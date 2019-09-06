import React, { useState } from 'react';

import { useDarkMode } from '../hooks/DarkMode';

const Button = () => {
    const [darkMode, setDarkMode] = useDarkMode();
    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    };

    return (
        <button 
            onClick={toggleMode}
            className={darkMode ? 'toggle toggled' : 'toggle'}>
            Toggle Dark Mode
        </button>
    )
}

export default Button;


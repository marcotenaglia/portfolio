import React from 'react';
import HamburguerMenu from './HamburguerMenu';


const AppHeader = ({ isDarkMode, toggleDarkMode, isMenuOpen, toggleMenu }) => {

    const handleNavLinkClick = () => {
        toggleMenu();
    };

    return (
        <header className="header center">

            <div className='header-title'>
                <div>M</div>
                <div>T</div>
            </div>

            <nav className="nav">
                <div className="nav-a">
                    <a href="#skills" className={`nav-anchor-tag nav-anchor-tag-${isDarkMode ? "light" : "dark"}`}>skills</a>
                    <a href="#projects" className={`nav-anchor-tag nav-anchor-tag-${isDarkMode ? "light" : "dark"}`}>projects</a>
                    <a href="#contact" className={`nav-anchor-tag nav-anchor-tag-${isDarkMode ? "light" : "dark"}`}>contact</a>
                </div>
                <button className='dark-mode-btn' onClick={toggleDarkMode}>
                    <span className="material-symbols-outlined dark-mode">{isDarkMode ? 'light_mode' : 'dark_mode'}</span>
                </button>
                <div className={`nav-list nav-list-${isDarkMode ? "light" : "dark"}`} style={{ display: isMenuOpen ? "flex" : "none" }}>
                    <a href="#skills" className={`nav-anchor-tag ${isDarkMode ? "nav-anchor-tag-light" : "nav-anchor-tag-dark"}`} onClick={handleNavLinkClick}>skills</a>
                    <a href="#projects" className={`nav-anchor-tag ${isDarkMode ? "nav-anchor-tag-light" : "nav-anchor-tag-dark"}`} onClick={handleNavLinkClick}>projects</a>
                    <a href="#contact" className={`nav-anchor-tag ${isDarkMode ? "nav-anchor-tag-light" : "nav-anchor-tag-dark"}`} onClick={handleNavLinkClick}>contact</a>
                </div>
                <HamburguerMenu isDarkMode={isDarkMode} isOpen={isMenuOpen} toggleMenu={toggleMenu} />
            </nav>

        </header>
    )
};


export default AppHeader; 
import React from 'react';

const HamburguerMenu = ({ isOpen, toggleMenu, isDarkMode }) => (
  <button className={`hamburguer-menu ${isOpen ? 'open' : ''}`} onClick={toggleMenu} role="button" tabIndex={0} >
    <div className={`hamburguer-line hamburguer-line-${isDarkMode ? 'dark' : 'light'}`}></div>
    <div className={`hamburguer-line hamburguer-line-${isDarkMode ? 'dark' : 'light'}`}></div>
    <div className={`hamburguer-line hamburguer-line-${isDarkMode ? 'dark' : 'light'}`}></div>
  </button>
);

export default HamburguerMenu;
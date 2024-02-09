import React from 'react';

const HamburguerMenu = ({ isOpen, toggleMenu, isDarkMode }) => (
  <button className={`hamburguer-menu ${isOpen ? 'open' : ''}`} onClick={toggleMenu} role="button" tabIndex={0} >
    <div className={`hamburguer-line hamburguer-line-${isDarkMode ? 'light' : 'dark'}`}></div>
    <div className={`hamburguer-line hamburguer-line-${isDarkMode ? 'light' : 'dark'}`}></div>
    <div className={`hamburguer-line hamburguer-line-${isDarkMode ? 'light' : 'dark'}`}></div>
  </button>
);

export default HamburguerMenu;
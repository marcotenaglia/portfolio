import React from 'react';

const HamburguerMenu = ({ isOpen, toggleMenu, isDarkMode }) => (
  <div className={`hamburguer-menu ${isOpen ? 'open' : ''} `} onClick={toggleMenu}>
    <div className={`hamburguer-line hamburguer-line-${isDarkMode ? 'dark' :  'light'}`}></div>
    <div className={`hamburguer-line hamburguer-line-${isDarkMode ? 'dark' : 'light'}`}></div>
    <div className={`hamburguer-line hamburguer-line-${isDarkMode ? 'dark' : 'light'}`}></div>
  </div>
);

export default HamburguerMenu;
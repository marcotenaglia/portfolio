import React from 'react';

const Contact = ({ isDarkMode }) => (
  <div id='contact' className="contact-box">
    <h2 className='section-title'>CONTACT</h2>
    <div className={`items-list contact-list items-${isDarkMode ? "light" : "dark"}`}>
      <a href="mailto:marcotenaglia98Q.com" className={`items contact-items-${isDarkMode ? "dark" : "light"}`}>
        Email
      </a>
      <a href='https://github.com/marcotenaglia' className={`items contact-items-${isDarkMode ?  "light" : "dark"}`}>
        Github
      </a>
    </div>
  </div>
);

export default Contact;
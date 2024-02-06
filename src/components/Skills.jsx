
import React from "react";

const Skills = ({ isDarkMode }) => (
  <div id="skills" className="skills-box">

    <h2 className='section-title'>SKILLS</h2>

    <ul className={`items-list items-${isDarkMode ? "light" : "dark"}`}>
      <li className="items">Javascript</li>
      <li className="items">React</li>
      <li className="items">Google Apps Script</li>
      <li className="items">Appsheet</li>
      <li className="items">HTML</li>
      <li className="items">CSS</li>
      <li className="items">SASS</li>
      <li className="items">Git</li>
    </ul>
  </div>
);

export default Skills;
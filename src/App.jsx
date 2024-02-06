import './App.css'
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import React, { useState, useEffect } from 'react';


function App() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  
  useEffect(() => {  

  }
    , [isDarkMode]);


  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };


  return (

    <>

      <body className={isDarkMode ? "body-light" : "body-dark"}>

        <header className="header center">
          <div className='header-title'>Marco Tenaglia</div>
          <nav className="nav">

            <div className='nav-btns'>
              <a href="#skills" className={`nav-anchor-tag ${isDarkMode ? "nav-anchor-tag-light" : "nav-anchor-tag-dark"}`}>Skills</a>
              <a href="#projects" className={`nav-anchor-tag ${isDarkMode ? "nav-anchor-tag-light" : "nav-anchor-tag-dark"}`}>Projects</a>
              <a href="#contact" className={`nav-anchor-tag ${isDarkMode ? "nav-anchor-tag-light" : "nav-anchor-tag-dark"}`}>Contact</a>
              <button className='dark-mode-btn' onClick={toggleDarkMode}>
                <span className="material-symbols-outlined dark-mode">
                  {isDarkMode ? 'light_mode' : 'dark_mode'}
                </span>
              </button>
            </div>

          </nav>
        </header>


        <main className="main">
          <div className='container'>

            <div className='title'>Marco Tenaglia</div>
            <div className='subtitle'>Full Stack Developer</div>

            <div className="info">
              <p className='info-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro consectetur amet libero distinctio culpa inventore vero, unde officia ipsum odio tempore ea rem repellat deserunt incidunt nostrum ullam quia suscipit?</p>
            </div>
            <section className='section'>

              <div id="projects" className="projects">
                <h2 className='section-title'>PROJECTS</h2>
                <div className='card-box'>
                  <Projects title="Band Web" description="A personalized static band website with navigable distinct sections." languages={['HTML', 'CSS', 'SASS']} linkWeb='https://marcotenaglia.github.io/las-aventuras-web/' linkCode='https://github.com/marcotenaglia/las-aventuras-web' isDarkMode={isDarkMode} />
                  <Projects title="To-do List" description="Easy and intuitive to-do list for pending tasks." languages={['HTML', 'CSS', 'JavaScript']} linkWeb='https://marcotenaglia.github.io/todo-list-js/' linkCode='https://github.com/marcotenaglia/todo-list-js' isDarkMode={isDarkMode} />
                  <Projects title="E-commerce" description="Responsive e-commerce with shoping cart." languages={['HTML', 'CSS', 'SASS', 'javaScript']} linkWeb='https://marcotenaglia.github.io/e-commerce-js/' linkCode='https://github.com/marcotenaglia/e-commerce-js' isDarkMode={isDarkMode} />
                  <Projects title="Music Single Web" description="An exclusive preview of the band's song. People would find a QR code at the end of a physical fanzine that redirects to this demo version." languages={['HTML', 'CSS', 'SASS']} linkWeb='https://marcotenaglia.github.io/las-aventuras-demo/' linkCode='https://github.com/marcotenaglia/las-aventuras-demo' isDarkMode={isDarkMode} />
                  <Projects title="Dispatch Notes Generation" description="Google Apps Script converts spreadsheet's pertinent information into a delivery receipt PDF and saves it in Google Drive." languages={['GAS', 'javaScript', 'CSS', 'HTML']} linkWeb='https://www.youtube.com/watch?v=CtWlEnBq0h0' linkCode='https://github.com/marcotenaglia/crowntainer-apps-script' isDarkMode={isDarkMode} />
                  <Projects title="Dispatch Notes Generation" description="Google Apps Script converts spreadsheet's pertinent information into a delivery receipt PDF and saves it in Google Drive." languages={['GAS', 'javaScript', 'CSS', 'HTML']} linkWeb='https://www.youtube.com/watch?v=B-kkEBgC9p4' linkCode='https://github.com/marcotenaglia/medios-litoral-apps-script' isDarkMode={isDarkMode} />
                </div>
              </div>
              <Skills isDarkMode={isDarkMode} />
              <Contact isDarkMode={isDarkMode}/>
            </section>

          </div>
        </main>
      </body>
    </>
  )
}


export default App
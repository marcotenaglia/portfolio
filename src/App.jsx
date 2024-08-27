import React, { useState, useEffect } from 'react';
import './App.css'
import AppHeader from './components/AppHeader';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';



function App() {

  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  useEffect(() => {

  }
    , [isDarkMode]);


  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (

    <>

      <div className={isDarkMode ? "body-light" : "body-dark"}>

      <AppHeader isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}/>
        <main className="main">
          <div className='container'>

            <div className='title'>Marco Tenaglia</div>
            <div className='subtitle'>Full Stack Developer</div>

            <div className="info">
              <p className='info-text'></p>
            </div>
            <section className='section'>

              <div id="projects" className="projects">
                <h2 className='section-title'>PROJECTS</h2>
                <div className='card-box'>
                  <Projects title="Artist Cathalog Web" description="WordPress site for the painter Emilio Ghilioni. With home, publications, info and contact pages. Administrable with ACF and integrated with Swiper. In development phase." languages={['WordPress', 'javaScript', 'PHP']} linkWeb='http://emilioghilioni.com.ar/' linkCode='https://github.com/marcotenaglia/emilio-ghilioni' isDarkMode={isDarkMode} />   
                  <Projects title="Dispatch Notes" description="Google Apps Script code that converts spreadsheet's pertinent information into a delivery receipt PDF and saves it in Google Drive." languages={['GAS', 'javaScript', 'CSS', 'HTML']} linkWeb='https://www.youtube.com/watch?v=CtWlEnBq0h0' linkCode='https://github.com/marcotenaglia/crowntainer-apps-script' isDarkMode={isDarkMode} />
                  <Projects title="Budget Generation" description="Google Apps Script code that fills a template with updated info from a spreadsheet, converts it into a PDF and saves it in Google Drive." languages={['GAS', 'javaScript']} linkWeb='https://www.youtube.com/watch?v=B-kkEBgC9p4' linkCode='https://github.com/marcotenaglia/medios-litoral-apps-script' isDarkMode={isDarkMode} />
                  <Projects title="Band Web" description="A personalized static band website with navigable distinct sections." languages={['HTML', 'CSS', 'SASS']} linkWeb='https://marcotenaglia.github.io/las-aventuras-web/' linkCode='https://github.com/marcotenaglia/las-aventuras-web' isDarkMode={isDarkMode} />
                  <Projects title="Music Single Web" description="An exclusive preview of the band's song. People would find a QR code at the end of a physical fanzine that redirects to this demo version." languages={['HTML', 'CSS', 'SASS']} linkWeb='https://marcotenaglia.github.io/las-aventuras-demo/' linkCode='https://github.com/marcotenaglia/las-aventuras-demo' isDarkMode={isDarkMode} />
                  <Projects title="To-do List" description="Easy and intuitive to-do list for pending tasks." languages={['HTML', 'CSS', 'JavaScript']} linkWeb='https://marcotenaglia.github.io/todo-list-js/' linkCode='https://github.com/marcotenaglia/todo-list-js' isDarkMode={isDarkMode} />
                  <Projects title="E-commerce" description="Responsive e-commerce with shoping cart." languages={['HTML', 'CSS', 'SASS', 'javaScript']} linkWeb='https://marcotenaglia.github.io/e-commerce-js/' linkCode='https://github.com/marcotenaglia/e-commerce-js' isDarkMode={isDarkMode} />
                  <Projects title="Portfolio" description="This portfolo is made with React JS." languages={['HTML', 'CSS', 'React', 'javaScript']} linkWeb='https://marcotenaglia-portfolio.vercel.app/' linkCode='https://github.com/marcotenaglia/portfolio' isDarkMode={isDarkMode} />
                </div>
              </div>
              <Skills isDarkMode={isDarkMode} />
              <Contact isDarkMode={isDarkMode} />
            </section>

          </div>
        </main>
      </div>
    </>
  )
}


export default App
import './App.css'


function App() {



  const Projects = () => (
    <div id="projects" className="projects">
      <h2 className='section-title'>PROJECTS</h2>
      <div className='card-box'>
        <div className="card">
          <h1>E-commerce</h1>
          <p>Responsive e-commerce with shoping cart</p>
          <div className='lenguages'>
            <div>HTML</div>
            <div>CSS</div>
            <div>SASS</div>
          </div>
        </div>
        <div className="card">
          <h1>To-do List</h1>
          <p>Checklist for tasks and to-do's</p>
          <div className='lenguages'>
            <div>HTML</div>
            <div>CSS</div>
            <div>SASS</div>
          </div>
        </div>
        <div className="card">
          <h1>Band Web</h1>
          <p>A band web for content, biography, shows and contact</p>
          <div className='lenguages'>
            <div>HTML</div>
            <div>CSS</div>
            <div>SASS</div>
          </div>
        </div>
        <div className="card">
          <h1>Music Single Web</h1>
          <p>This was an experimental project for my band. At the end of a gifted fanzine, people would find a QR code that redirected to this exclusive demo.</p>
          <div className='lenguages'>
            <div>HTML</div>
            <div>CSS</div>
            <div>SASS</div>
          </div>
        </div>
        <div className="card">
          <h1> Delivery Receipt Generation</h1>
          <p>Google Apps Script code that triggers with added rows, converts pertinent information into a delivery receipt PDF and saves it in Google Drive.</p>
          <div className='lenguages'>
            <div>GAS</div>
            <div>Javascript</div>
            <div>Spreadsheet</div>
            <div>CSS</div>
            <div>HTML</div>
          </div>
        </div>
        <div className="card">
          <h1>Budget Generation</h1>
          <p>A Google Apps Script code that fills a template with updated info from a spreadsheet, converts it into a PDF and saves it in Google Drive </p>
          <div className='lenguages'>
            <div>GAS</div>
            <div>Javascript</div>
            <div>Spreadsheet</div>
            <div>CSS</div>
            <div>HTML</div>
          </div>
        </div>

      </div>
    </div>
  );

  const Skills = () => (
    <div id="skills" className="skills">

      <h2 className='section-title'>SKILLS</h2>

      <ul className='skills-list'>
        <li>Javascript</li>
        <li>React</li>
        <li>Google Apps Script</li>
        <li>Appsheet</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>SASS</li>
        <li>Git Hub</li>
      </ul>
    </div>
  );

  const Contact = () => (
    <div id='contact' className="contact">
      <h2 className='section-title'>CONTACT</h2>
      <div className='contact-box'>
        <div>
          Email
        </div>
        <div>
          Github
        </div>
      </div>
    </div>
  );

  return (

    <>
      <header className="header center">
        <div className='header-title'>marco tenaglia</div>
        <nav className="nav">
          <div>
            <a href="#skills" className='anchor-tag'>Skills</a>
            <a href="#projects" className='anchor-tag'>Projects</a>
            <a href="#contact" className='anchor-tag'>Contact</a>
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
            <Projects />
            <Skills />
            <Contact />
          </section>

        </div>
      </main>
    </>
  )
}


export default App
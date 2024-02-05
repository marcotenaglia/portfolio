import React from "react"


const Projects = ({ title, description, languages, linkCode, linkWeb }) => (
    <div className="card">
        <div>
            <h1>{title}</h1>
            <p className='card-p'>{description}</p>
        </div>
        <div>
            <div className='lenguages'>
                {languages.map((language, index) => (
                    <div key={index}>{language}</div>
                ))}
            </div>
            <div className='links'>
                <a target='blank' href={linkCode}>
                    <svg fill='rgb(219, 226, 232)' className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"></path></svg>
                </a>
                <a target='blank' href={linkWeb}><svg className="MuiSvgIcon-root" fill='rgb(219, 226, 232)' focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path></svg></a>
            </div>
        </div>
    </div>
);

export default Projects;
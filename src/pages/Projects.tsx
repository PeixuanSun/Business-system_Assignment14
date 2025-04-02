import React from 'react'

const Projects: React.FC = () => {
  return (
    <div className="Content">
      <section>
        <h2>Course Projects</h2>
        <div className="Projects">
          <div className="Project-card">
            <h3>Component Library Development</h3>
            <p>
              Developed a React component library with various UI components
              such as buttons, cards, tables, using TypeScript and Styled
              Components.
            </p>
            <div className="Tech-tags">
              <span className="Tag">React</span>
              <span className="Tag">TypeScript</span>
              <span className="Tag">Styled Components</span>
            </div>
            <img
              className="Project-image"
              src="./images/component-library.jpg"
              alt="Component Library Development"
            />
            <p>
              <a
                href="https://github.com/Peixuansun/peixuan_assignment13"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Repository
              </a>
            </p>
          </div>

          <div className="Project-card">
            <h3>Responsive Web Design</h3>
            <p>
              Created a fully responsive website that adapts to various screen
              sizes, implementing a mobile-first design approach.
            </p>
            <div className="Tech-tags">
              <span className="Tag">HTML5</span>
              <span className="Tag">CSS3</span>
              <span className="Tag">JavaScript</span>
            </div>
            <img
              className="Project-image"
              src="./images/responsive-design.jpg"
              alt="Responsive Web Design"
            />
            <p>
              <a
                href="https://github.com/Peixuansun/peixuan_assignment14"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Repository
              </a>
            </p>
          </div>

          <div className="Project-card">
            <h3>Personal Portfolio Website</h3>
            <p>
              Built a personal portfolio website using a custom component
              library to showcase course projects and skills. Resolved
              TypeScript type compatibility issues.
            </p>
            <div className="Tech-tags">
              <span className="Tag">React</span>
              <span className="Tag">TypeScript</span>
              <span className="Tag">Component Library</span>
            </div>
            <img
              className="Project-image"
              src="./images/portfolio.jpg"
              alt="Personal Portfolio Website"
            />
            <p>
              <a
                href="https://github.com/Peixuansun/peixuan_assignment14"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Repository
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projects

import React from 'react'

const Home: React.FC = () => {
  return (
    <div className="Content">
      <section>
        <h2>About Me</h2>
        <div className="Info-card">
          <img
            className="Avatar"
            src="./images/avatar.jpeg"
            alt="Personal Avatar"
          />
          <p>
            I am a student passionate about web development, focused on creating
            interactive and user-friendly web applications. I&apos;m currently
            learning the latest frontend technologies including React,
            TypeScript, and component design.
          </p>
        </div>
      </section>

      <section>
        <h2>Welcome to My Portfolio</h2>
        <p className="Welcome-text">
          Thank you for visiting my portfolio website. As a web developer, I
          strive to create clean, responsive, and user-friendly web
          applications. My journey in web development has equipped me with
          various skills and experiences that I&apos;m excited to share with
          you.
        </p>
      </section>

      <section className="Highlights">
        <h2>My Expertise</h2>
        <div className="Highlight-cards">
          <div className="Highlight-card">
            <div className="Highlight-icon">💻</div>
            <h3>Frontend Development</h3>
            <p>Building responsive user interfaces with React and TypeScript</p>
          </div>
          <div className="Highlight-card">
            <div className="Highlight-icon">🎨</div>
            <h3>UI/UX Design</h3>
            <p>Creating intuitive and attractive user experiences</p>
          </div>
          <div className="Highlight-card">
            <div className="Highlight-icon">📱</div>
            <h3>Responsive Design</h3>
            <p>Ensuring websites look great on all devices</p>
          </div>
        </div>
      </section>

      <section className="Contact">
        <h2>Get In Touch</h2>
        <div className="Contact-info">
          <p>
            I&apos;m currently looking for new opportunities and collaborations.
            Feel free to reach out if you&apos;d like to connect!
          </p>
          <div className="Contact-links">
            <a href="mailto:sunpeixuan1225@gmail.com" className="Contact-link">
              <span className="Contact-icon">✉️</span> sunpeixuan1225@gmail.com
            </a>
            <a
              href="https://github.com/Peixuansun"
              className="Contact-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="Contact-icon">🐙</span> GitHub
            </a>
            <a
              href="https://linkedin.com/in/peixuan-sun-0a8674301"
              className="Contact-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="Contact-icon">🔗</span> LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

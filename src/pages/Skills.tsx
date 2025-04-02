import React from 'react'

const Skills: React.FC = () => {
  return (
    <div className="Content">
      <section>
        <h2>Skills</h2>
        <div className="Skills">
          <div className="Skill-card">
            <h3>Programming Languages</h3>
            <ul>
              <li>JavaScript/TypeScript</li>
              <li>HTML5/CSS3</li>
              <li>Python</li>
            </ul>
          </div>

          <div className="Skill-card">
            <h3>Frontend Frameworks</h3>
            <ul>
              <li>React</li>
              <li>Vue.js</li>
              <li>Next.js</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Skills

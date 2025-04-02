import React from 'react'

const Setup: React.FC = () => {
  return (
    <div className="Content">
      <section>
        <h2>Developer Setup</h2>
        <div className="Setup">
          <div className="Setup-card">
            <h3>VS Code Configuration</h3>
            <p>
              My preferred editor is VS Code, using the GitHub Dark theme and
              JetBrains Mono font. My main extensions include: ESLint, Prettier,
              GitHub Copilot and Live Server. Configured with auto-save and code
              formatting features.
            </p>
            <div className="Tech-tags">
              <span className="Tag">ESLint</span>
              <span className="Tag">Prettier</span>
              <span className="Tag">GitHub Copilot</span>
            </div>
          </div>

          <div className="Setup-card">
            <h3>Terminal Setup</h3>
            <p>
              Using zsh with Oh My Zsh, Powerlevel10k theme for a good
              command-line experience. Configured with Git integration prompts
              and syntax highlighting. Common aliases include: ls=&apos;ls
              -la&apos;, gc=&apos;git commit&apos; and gp=&apos;git push&apos;.
            </p>
            <div className="Tech-tags">
              <span className="Tag">Oh My Zsh</span>
              <span className="Tag">Powerlevel10k</span>
              <span className="Tag">Git Integration</span>
            </div>
          </div>

          <div className="Setup-card">
            <h3>Development Toolchain</h3>
            <p>
              Using Node.js (v18.x) and npm as package manager. Webpack for
              building and bundling, Jest and React Testing Library for testing.
              Docker for containerization and deployment.
            </p>
            <div className="Tech-tags">
              <span className="Tag">Node.js</span>
              <span className="Tag">Webpack</span>
              <span className="Tag">Jest</span>
              <span className="Tag">Docker</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Setup

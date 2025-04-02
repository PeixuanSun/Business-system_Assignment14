import React from 'react'

const Resources: React.FC = () => {
  return (
    <div className="Content">
      <section>
        <h2>Learning Resources</h2>
        <div className="Resources">
          <div className="Resource-card">
            <div className="Resource-icon">📘</div>
            <h3>MDN Web Docs</h3>
            <p>
              Mozilla&apos;s Web Docs is the authoritative reference for Web
              standards, JavaScript, CSS, and HTML.
            </p>
            <p>
              <a
                href="https://developer.mozilla.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit MDN
              </a>
            </p>
          </div>

          <div className="Resource-card">
            <div className="Resource-icon">⚛️</div>
            <h3>React Official Documentation</h3>
            <p>
              React&apos;s official documentation provides comprehensive guides,
              API references, and examples.
            </p>
            <p>
              <a
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit React Docs
              </a>
            </p>
          </div>

          <div className="Resource-card">
            <div className="Resource-icon">🔷</div>
            <h3>TypeScript Documentation</h3>
            <p>
              TypeScript&apos;s official documentation provides detailed
              explanations of language features, type system, and advanced
              types.
            </p>
            <p>
              <a
                href="https://www.typescriptlang.org/docs"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit TypeScript Docs
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Resources

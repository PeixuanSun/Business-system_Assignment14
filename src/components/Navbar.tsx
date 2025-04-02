import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/Navbar.css'

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <ul className="navbar-menu">
          <li className="navbar-item">
            <NavLink
              to="/"
              end
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Home
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink
              to="/projects"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Projects
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink
              to="/skills"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Skills
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink
              to="/resources"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Resources
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink
              to="/setup"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Setup
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

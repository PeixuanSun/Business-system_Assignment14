import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

const Layout: React.FC = () => {
  return (
    <div className="App">
      <div className="App-header">
        <h1>Peixuan Sun&apos;s Portfolio</h1>
        <h2>Web Development & Design</h2>
      </div>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default Layout

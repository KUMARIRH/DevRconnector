import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar bg-dark">
        <h1>
          <Link to="/">
            <i className="fas fa-code" /> DevConnector
          </Link>
        </h1>
        <ul>
          <li>
            <a href="!#">Developers</a>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="Login">Login</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
export default Navbar

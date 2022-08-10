import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

const NavBar = () => {
  return (
    <div className="navBar">
      <div className="title">
        <Link to="/">
          <h6>Huan Zeng</h6>
        </Link>
      </div>

      <div className="current">
        <h6>Currently Tinkering Around</h6>
      </div>
      <div className="links">
        <a href="https://www.linkedin.com/in/huan-zeng">
          <h6>Linkedin</h6>
        </a>
        <a href="/https://github.com/huan00/">
          <h6>Github</h6>
        </a>
        <h6 className="timezone">New York, EST</h6>
      </div>
    </div>
  )
}

export default NavBar

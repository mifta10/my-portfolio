import React from 'react'
import './Navbar.css'
import logo from '../../assets/images/logo.png'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar__container">
          <ul className="navbar__left">
            <div className="navbar__left-logo">
              <img src={logo} alt="" />
            </div>
          </ul>
          <ul className="navbar__right">
            <li><a href="">Home</a></li>
            <li><a href="">Services</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Skill</a></li>
            <li><a href="">Portfolio</a></li>
            <li><a href="">Projects</a></li>
            <li><a href="">Contact</a></li>
          </ul>
        </div>

      </div>
    </nav>
  )
}

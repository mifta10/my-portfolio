import React from 'react';
import './Navbar.css'
import logo from '../../../assets/images/logo.png';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar__container">
          <ul className="navbar__left">
            <div className="navbar__left-logo">
              <p>Mifta</p>
            </div>
          </ul>
          <ul className="navbar__right">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/blogs">Blogs</a></li>
            <li><a href="/contacts">Contact</a></li>
          </ul>
        </div>

      </div>
    </nav>
  )
}

import React from 'react'
import './Banner.css'
import { FaFacebookF , FaTwitter, FaPinterest, FaInstagram, FaLinkedinIn, FaGithub} from "react-icons/fa";

export default function Banner() {
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="header__content">
              <ul className="header__ul">
                <li>
                  <FaFacebookF />
                </li>
                <li>
                  <FaTwitter />
                </li>
                <li>
                  <FaPinterest />
                </li>
                <li>
                  <FaInstagram />
                </li>
                <li>
                  <FaLinkedinIn />
                </li>
                <li>
                  <FaGithub />
                </li>
              </ul>
            </div>
          </div>
          <div className="col-6">

          </div>
        </div>
      </div>
    </header>
  )
}

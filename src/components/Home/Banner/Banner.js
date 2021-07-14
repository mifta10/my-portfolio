import React, { useState } from 'react'
import './Banner.css';
import Typical from 'react-typical';
import Particles from 'react-particles-js';
import { FaFacebookF, FaTwitter, FaPinterest, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";


export default function Banner() {
  const [state] = useState({
    text: "I'm a Web Developer with extensive experience for over one year. My expertise is to create and design websites, writing contents and many more...",
  })
  return (
    <section className="header main_banner banner_bg cd-intro" style={{ backgroundAttachment: "fixed" }}>
      <Particles
    params={{
	    "particles": {
	        "number": {
	            "value": 80
	        },
	        "size": {
	            "value": 5
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": false,
	                "mode": "repulse"
	            }
	        }
	    }
	}} />
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <div className="header__content">
              <div className="header__section banner__content">
                <strong>Hello !</strong>
                <Typical
                  steps={["I'm Mifta Uddin Khan", 1000, "I'm a Web Developer", 500]}
                  loop={Infinity}
                  wrapper="h1"
                />
                <p>{state.text}</p>
                <ul className="header__ul">
                  <li>
                     <a href="https://www.facebook.com/profile.php?id=100070505918857" target="_blank" rel="noopener noreferrer">
                     <FaFacebookF />
                     </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/MiftaUddinKhan1?s=08" target="_blank" rel="noopener noreferrer">
                    <FaTwitter />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.pinterest.com/miftauddink/_saved/" target="_blank" rel="noopener noreferrer">
                    <FaPinterest />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/mifta_uk/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/mifta-uddin-khan-675686201/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedinIn />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/mifta10" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import React, { useState, useEffect } from 'react';
import './About.css';
import Aos from 'aos'
import 'aos/dist/aos.css'
import my2 from '../../../assets/images/h5.png';

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  const [state] = useState({ subHeader: 'About Me', text: 'There are some information given below about me.What I am basically' })
  return (
    <div className="about" id="about">
      <div className="container" data-aos="zoom-in">
        <div className="common">
          <h1 className="mainHeader1">
            {state.subHeader}
          </h1>
          <p className="mainContent">{state.text}
          </p>
          <div className="commonBorder"></div>
        </div>
        <div className="row h-6 alignCenter">
          <div className="col-md-6">
            <div className="about__img">
              <img src={my2} alt="" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="about__info">
              <h1>
                I'm Professional web Developer having one Year Of Experience in remote work.
              </h1>
              <div className="about__info-p1">
                Front End Developer with experience in
                building and maintaining
                responsive websites. Proficient in HTML,
                CSS, JavaScript plus
                modern libraries & frameworks
              </div>
              <div className="about__info-p1">
                I have done four client works remotely.There were two websites fully functional with server connection and database...
              </div>
              <div className="about__info-p2">
                I have also done a project on my Final Year Project course which is based on a social platform for mentally disturbed people.
              </div>
              <div className="info__contacts">
                <div className="row">
                  <div className="col-md-6">
                    <strong>Name</strong>
                    <p>Mifta Uddin Khan</p>
                  </div>
                  <div className="col-md-6">
                    <strong>Email</strong>
                    <p>miftauddinkhan01@gmail.com</p>
                  </div>
                  <div className="col-md-6">
                    <strong>Phone</strong>
                    <p>+8801757110249</p>
                  </div>
                  <div className="col-md-6">
                    <strong>LinkedIn</strong>
                    <a href="https://www.linkedin.com/in/mifta-uddin-khan-675686201/">
                      <br></br>
                      <i class="fab fa-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <a href="#0" className="btn btn-default main_btn d-flex justify-content-center">Download Resume</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
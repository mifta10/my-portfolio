import React, { useEffect } from 'react';
import './Skills.css';
import Aos from 'aos'
import 'aos/dist/aos.css'

const Skills = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <section id="skills" className="section-padding">
      <div className="skill__container" data-aos="zoom-in">
        <div className="row justify-content-center">
          <div className="col-md-4 my-auto">
            <div className="section-title mb-lg-0 mb-md-5" style={{ textAlign: "left" }}>
              <span>i am expert on</span>
              <h1>
                Let's Work Together
                <span></span>
              </h1>
              <p>
                I'm a Front-End Developer with one year of remote work experience.
                I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences.
                Let's make something special.
              </p>
            </div>
          </div>

          <div className="col-md-7 my-auto">
            <div class="skill wow fadeInUp" data-wow-delay="0.2s" style={{ visibility: "visible" }}>
              <p>React</p>
              <div class="skill-bar mb-5 wow slideInLeft animated" style={{ width: "88%", visibility: "visible" }}>
                <span class="skill-count">88%</span>
              </div>
            </div>
            <div class="skill wow fadeInUp" data-wow-delay="0.4s" style={{ visibility: "visible" }}>
              <p>Node JS</p>
              <div class="skill-bar wow slideInLeft animated" style={{ width: "81%", visibility: "visible" }}>
                <span class="skill-count">81%</span>
              </div>
            </div>
            <div class="skill wow fadeInUp" data-wow-delay="0.6s" style={{ visibility: "visible" }}>
              <p>Express JS</p>
              <div class="skill-bar wow slideInLeft animated" style={{ width: "70%", visibility: "visible" }}>
                <span class="skill-count">70%</span>
              </div>
            </div>
            <div class="skill wow fadeInUp" data-wow-delay="0.8s" style={{ visibility: "visible" }}>
              <p>MongoDB</p>
              <div class="skill-bar wow slideInLeft animated" style={{ width: "60%", visibility: "visible" }}>
                <span class="skill-count">60%</span>
              </div>
            </div>
            <div class="skill wow fadeInUp" data-wow-delay="0.8s" style={{ visibility: "visible" }}>
              <p>Firebase</p>
              <div class="skill-bar wow slideInLeft animated" style={{ width: "75%", visibility: "visible" }}>
                <span class="skill-count">75%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Skills;
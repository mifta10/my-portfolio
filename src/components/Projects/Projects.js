import { Chip } from '@material-ui/core';
import React, { useEffect } from 'react';
import Navbar from '../Home/Navbar/Navbar';
import './Project.css';
import Aos from 'aos';
import 'aos/dist/aos.css'
import {
  FaExternalLinkAlt,
  FaExternalLinkSquareAlt, FaGithub,
} from "react-icons/fa";

const Projects = () => {

  window.scrollTo(0, 0);

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <div className="project-cntr">
      <Navbar></Navbar>
      <div className="container project__container">
        <div className="container project__container">
          <div className="work__caption text-center">
            <h2 style={{ borderBottom: '2px solid gray' }} className='pb-5 text-primary'>Some Things I've Built</h2>
          </div>

          {/* first project */}
          <div className="work__project mt-5">
            <div data-aos="zoom-in">
              <a href="https://mentex-5b2ed.web.app/" target="_blank" rel="noopener noreferrer" className="link">
                <img src='https://i.ibb.co/vhJMG6X/Capture.png' className="img-fluid" alt="" />
              </a>
            </div>
            <div data-aos="fade-down-right">
              <h5>Featured Project</h5>
              <h2 style={{ color: "rgb(255, 90, 95)" }}>MenTex</h2>
              <div>
                <p>
                  ❖ MenTex is a web based website for online social support platform for mentally disturbed
                  people. It is fully online based system.Anyone can access this website by creating an account.
                  They can Post their feelings and thoughts with pictures also. They also can Delete their post
                  from stories. Other users can like his/her posts and comments on the posts, can like the
                  comments and replied to the comment. Users can interact with experts individually. Experts
                  are added to the website by the admins. They can add more admins and experts. Admin also
                  can edit expert’s any information or delete any experts from the website. They can request
                  any expert who are available on the platform for help and advice via post their problem
                  through a form where they can select from which expert they want advice. The Expert will
                  reply an advice and the advice will appear on the particular user’s dashboard who asked for
                  help. The user can view the advice from his dashboard and also download the pdf form of
                  advices. There is a Contact Us page form where user can email any suggestion to the
                  website administration. And there also messenger plugin user can send messages to
                  website’s page
                </p>
              </div>
              <div className="work__project__bottom">
                <Chip label="React" />
                <Chip label="Firebase" />
                <Chip label="NodeJs" />
                <Chip label="MongoDB" />
                <a href="https://github.com/mozumderTushar/mentex.git" target="_blank" rel="noopener noreferrer" className="link2">
                  <FaGithub style={{ height: '32px' }} className="commonIcons"></FaGithub>
                </a>
                <a href="https://mentex-5b2ed.web.app/" target="_blank" rel="noopener noreferrer" className="link2">
                  <FaExternalLinkSquareAlt style={{ height: '32px' }} className="commonIcons"></FaExternalLinkSquareAlt>
                </a>
              </div>
            </div>
          </div>

          {/* SECOND project */}
          <div className="work__project mt-5">
            <div data-aos="zoom-in">
              <a href="https://sports-zone-heroku.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="link">
                <img src='https://i.ibb.co/vdk6y3t/Screenshot-1.png' className="img-fluid" alt="" />
              </a>
            </div>
            <div data-aos="fade-down-right">
              <h5>Featured Project</h5>
              <h2 style={{ color: "rgb(255, 90, 95)" }}>Sports Zone</h2>
              <div>
                <p>
                  ❖ An e-commerce website for sports products.Users can buy cricket or football equipment
                  from this website.There are two categories of product football and cricket.Users have to sign in or
                  create an account to purchase the products.If the user wants to buy the product then the products are
                  added to the cart and can edit the cart later.User can pay by Paypal or cash on delivery.
                  Customers will be able to know the history of their all order. Customers will be able to check their
                   order status on the website.
                </p>
              </div>
              <div className="work__project__bottom">
                <Chip label="React" />
                <Chip label="Firebase" />
                <Chip label="NodeJs" />
                <Chip label="MongoDB" />
                <a href="https://github.com/mifta10/Sports-Zone" target="_blank" rel="noopener noreferrer" className="link2">
                  <FaGithub style={{ height: '32px' }} className="commonIcons"></FaGithub>
                </a>
                <a href="https://sports-zone-heroku.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="link2">
                  <FaExternalLinkSquareAlt style={{ height: '32px' }} className="commonIcons"></FaExternalLinkSquareAlt>
                </a>
              </div>
            </div>
          </div>

          {/* third project */}
          <div className="work__project" data-aos="fade-up">
            <div >
              <a href="https://doctors-arena.web.app/" target="_blank" rel="noopener noreferrer" className="link">
                <img src='https://i.ibb.co/jM9NXvh/Screenshot.png' className="img-fluid" alt="" />
              </a>
            </div>
            <div>
              <h5>Featured Project</h5>
              <h2 style={{ color: "red" }}>Doctors Arena</h2>
              <div>
                <p>
                  ❖ A single-page web app with a dashboard where patients can pick a date, time & fix an appointment
                  with the doctor.
                  The doctor's and patient's dashboards are separate. When a user logs in, this app can detect whether
                  the user is a doctor or not.
                  A doctor can review his appointment on a particular date & see his all appointments.
                  A patient also can see his appointment with the doctor on
                  a particular date.
                </p>
              </div>
              <div className="work__project__bottom">
                <Chip label="React" />
                <Chip label="Firebase" />
                <Chip label="NodeJs" />
                <Chip label="MongoDB" />
                <a href="https://github.com/mifta10/doctreat" target="_blank" rel="noopener noreferrer" className="link2">
                  <FaGithub style={{ height: '32px' }} className="commonIcons"></FaGithub>
                </a>
                <a href="https://doctors-arena.web.app/" target="_blank" rel="noopener noreferrer" className="link2">
                  <FaExternalLinkSquareAlt style={{ height: '32px' }} className="commonIcons"></FaExternalLinkSquareAlt>
                </a>
              </div>
            </div>
          </div>

          {/* fourth project */}
          <div className="work__project" data-aos="zoom-in">
            <div >
              <a href="https://fire-auth-ace7c.web.app/" target="_blank" rel="noopener noreferrer" className="link">
                <img src='https://i.ibb.co/D9CMdgC/Screenshot-2.png' className="img-fluid" alt="" />
              </a>
            </div>
            <div >
              <h5>Featured Project</h5>
              <h2 style={{ color: "rgb(255, 90, 95)" }}>Ema John</h2>
              <div>
                <p>
                  ❖ A single-page web app with products & their details.
                  User can register as a customer & check all the products
                  with details.
                  They can select products and add them to cart.After Selecting them they can
                  go to carts& proceed for checkout and placed their orders.
                </p>
              </div>
              <div className="work__project__bottom">
                <Chip label="React" />
                <Chip label="Firebase" />
                <Chip label="NodeJs" />
                <Chip label="MongoDB" />
                <a href="https://github.com/mifta10/ema-john" target="_blank" rel="noopener noreferrer" className="link2">
                  <FaGithub style={{ height: '32px' }} className="commonIcons"></FaGithub>
                </a>
                <a href="https://fire-auth-ace7c.web.app/" target="_blank" rel="noopener noreferrer" className="link2">
                  <FaExternalLinkSquareAlt style={{ height: '32px' }} className="commonIcons"></FaExternalLinkSquareAlt>
                </a>
              </div>
            </div>
          </div>

          {/* eight project */}
          <div className="work__project mb-5" data-aos="fade-up">
            <div>
              <a href="https://covid-tracker-013.netlify.app/" target="_blank" rel="noopener noreferrer" className="link">
                <img src='https://i.ibb.co/zn6VVSR/Screenshot-3.png' className="img-fluid" alt="" />
              </a>
            </div>
            <div >
              <h5>Featured Project</h5>
              <h2 style={{ color: "rgb(255, 90, 95)" }}>Covid Tracker</h2>
              <div>
                <p>
                  ❖ A single with the details of Total Covid Patients,Total Recovery,Total Deaths currently in the world.
                  Table Of All countries data about covid-19.

                </p>
              </div>
              <div className="work__project__bottom">
                <Chip label="HTML5" />
                <Chip label="CSS3" />
                <Chip label="API" />
                <Chip label="REACT" />
                <a href="https://github.com/mifta10/covid-tracker" target="_blank" rel="noopener noreferrer" className="link2">
                  <FaGithub style={{ height: '32px' }} className="commonIcons"></FaGithub>
                </a>
                <a href="https://covid-tracker-013.netlify.app/" target="_blank" rel="noopener noreferrer" className="link2">
                  <FaExternalLinkSquareAlt style={{ height: '32px' }} className="commonIcons"></FaExternalLinkSquareAlt>
                </a>
              </div>
            </div>
          </div>

           {/* eight project */}
           <div className="work__project mb-5" data-aos="fade-up">
            <div>
              <a href="https://mifta10.github.io/Cuda/" target="_blank" rel="noopener noreferrer" className="link">
                <img src='https://i.ibb.co/5kCYqKG/Screenshot-4.png' className="img-fluid" alt="" />
              </a>
            </div>
            <div >
              <h5>Featured Project</h5>
              <h2 style={{ color: "rgb(255, 90, 95)" }}>Cuda</h2>
              <div>
                <p>
                  ❖ A single page website converted from a PSD file and It's all about a service agency.
                  They provides services of different types like Graphics Design,Web Development,and Content 
                  Writing.

                </p>
              </div>
              <div className="work__project__bottom">
                <Chip label="HTML5" />
                <Chip label="CSS3" />
                <Chip label="BOOTSTRAP"/>
                <Chip label="JQUERY" />
                <a href="https://github.com/mifta10/Cuda" target="_blank" rel="noopener noreferrer" className="link2">
                  <FaGithub style={{ height: '32px' }} className="commonIcons"></FaGithub>
                </a>
                <a href="https://mifta10.github.io/Cuda/" target="_blank" rel="noopener noreferrer" className="link2">
                  <FaExternalLinkSquareAlt style={{ height: '32px' }} className="commonIcons"></FaExternalLinkSquareAlt>
                </a>
              </div>
            </div>
          </div>

          {/* eight project */}
          <div className="work__project mb-5" data-aos="fade-up">
            <div>
              <a href="https://trvl-world.netlify.app/" target="_blank" rel="noopener noreferrer" className="link">
                <img src='https://i.ibb.co/P5yg2Cm/Screenshot-5.png' className="img-fluid" alt="" />
              </a>
            </div>
            <div >
              <h5>Featured Project</h5>
              <h2 style={{ color: "rgb(255, 90, 95)" }}>Trvl App</h2>
              <div>
                <p>
                  ❖ A single page website about travelling.You'll find some travel destinations here.
                  it is attractive web app...

                </p>
              </div>
              <div className="work__project__bottom">
                <Chip label="HTML5" />
                <Chip label="CSS3" />
                <Chip label="BOOTSTRAP"/>
                <Chip label="REACT" />
                <Chip label="API" />
                <a href="https://github.com/mifta10/trvl-app" target="_blank" rel="noopener noreferrer" className="link2">
                  <FaGithub style={{ height: '32px' }} className="commonIcons"></FaGithub>
                </a>
                <a href="https://trvl-world.netlify.app/" target="_blank" rel="noopener noreferrer" className="link2">
                  <FaExternalLinkSquareAlt style={{ height: '32px' }} className="commonIcons"></FaExternalLinkSquareAlt>
                </a>
              </div>
            </div>
          </div>

           {/* eight project */}
           <div className="work__project mb-5" data-aos="fade-up">
            <div>
              <a href="https://avo.netlify.app/" target="_blank" rel="noopener noreferrer" className="link">
                <img src='https://i.ibb.co/whhzj21/Screenshot-6.png' className="img-fluid" alt="" />
              </a>
            </div>
            <div >
              <h5>Featured Project</h5>
              <h2 style={{ color: "rgb(255, 90, 95)" }}>Avo App</h2>
              <div>
                <p>
                  ❖ A single page website about service agency.You'll find some services like Graphics Design,Web Development and Digital Marketing here.
                  It is attractive web app...

                </p>
              </div>
              <div className="work__project__bottom">
                <Chip label="HTML5" />
                <Chip label="CSS3" />
                <Chip label="BOOTSTRAP"/>
                <Chip label="REACT" />
                <Chip label="API" />
                <a href="https://github.com/mifta10/avo-app" target="_blank" rel="noopener noreferrer" className="link2">
                  <FaGithub style={{ height: '32px' }} className="commonIcons"></FaGithub>
                </a>
                <a href="https://avo.netlify.app/" target="_blank" rel="noopener noreferrer" className="link2">
                  <FaExternalLinkSquareAlt style={{ height: '32px' }} className="commonIcons"></FaExternalLinkSquareAlt>
                </a>
              </div>
            </div>
          </div>

          {/* eight project */}
          <div className="work__project mb-5" data-aos="fade-up">
            <div>
              <a href="https://mifta10.github.io/Glozzom/" target="_blank" rel="noopener noreferrer" className="link">
                <img src='https://i.ibb.co/GRLqtw4/Screenshot-7.png' className="img-fluid" alt="" />
              </a>
            </div>
            <div >
              <h5>Featured Project</h5>
              <h2 style={{ color: "rgb(255, 90, 95)" }}>Glozzom</h2>
              <div>
                <p>
                  ❖ A multi page website about service agency.You'll find some services like Graphics Design,Web Development and Digital Marketing here.
                  It is attractive website designed with html,css and bootstrap...

                </p>
              </div>
              <div className="work__project__bottom">
                <Chip label="HTML5" />
                <Chip label="CSS3" />
                <Chip label="BOOTSTRAP"/>
                <a href="https://github.com/mifta10/Glozzom" target="_blank" rel="noopener noreferrer" className="link2">
                  <FaGithub style={{ height: '32px' }} className="commonIcons"></FaGithub>
                </a>
                <a href="https://mifta10.github.io/Glozzom/" target="_blank" rel="noopener noreferrer" className="link2">
                  <FaExternalLinkSquareAlt style={{ height: '32px' }} className="commonIcons"></FaExternalLinkSquareAlt>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Projects;
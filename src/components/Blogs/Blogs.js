import React, {useEffect} from 'react';
import './Blogs.css';
import Aos from 'aos'
import 'aos/dist/aos.css'
import blog1 from '../../assets/images/js.png';
import blog2 from '../../assets/images/design.jpg';
import blog3 from '../../assets/images/sweden.png';
import Particles from 'react-particles-js';
import Navbar from '../Home/Navbar/Navbar';
import Footer from '../Home/Footer/Footer';

const Blogs = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <div>
    <section id="blog" className="section_padding pb_70">
      <Navbar></Navbar>
     <Particles
    params={{
	    "particles": {
	        "number": {
	            "value": 50
	        },
          "color": {
            "value": "#0000ff"
          },
	        "size": {
	            "value": 3
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        }
	    }
	}} />
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div className="col-md-12 col-sm-12-col-xs-12">
            <div className="section_heading text-center">
              <strong>Blogs</strong>
              <h2>Latest Blogs</h2>
              <p>There are some blogs that I've written in different websites like medium.com</p>
              <div className="sm_border"></div>
            </div>
          </div>
          </div>

          <div className="blog_slide_area">
            <div classNameName="row">
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="single_blog">
                <div className="blog-thumb">
                  <div className="blog-image">
                    <a href="#0"><img src={blog1} className="img-responsive" alt="" /></a>
                  </div>
                  <div className="blog-info">
                    <small><i className="fa fa-clock-o"></i>July 13, 2021</small>
                    <span>| Javascript</span>
                    <a href="https://medium.com/@miftauddinkhan10/way-to-become-a-javascript-developer-3b90c4f9f1f8" target="_blank" rel="noopener noreferrer"><h4>Way to become a Javascript developer…</h4></a>
                    <p>There is certain way to become a Javascript developer.</p>
                    <a href="https://medium.com/@miftauddinkhan10/way-to-become-a-javascript-developer-3b90c4f9f1f8" target="_blank" rel="noopener noreferrer" className="btn btn-default blog_btn main_btn">Read More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="single_blog">
              <div className="blog-thumb">
                <div className="blog-image">
                  <a href="#0"><img src={blog2} className="img-responsive" alt="" /></a>
                </div>
                <div className="blog-info">
                  <small><i className="fa fa-clock-o"></i>July 13, 2021</small>
                  <span>| Design</span>
                  <a href="https://medium.com/@miftauddinkhan10/useful-resources-3bee64a71117" target="_blank" rel="noopener noreferrer"><h4>Useful Resources for designing and coding</h4></a>
                  <p>Links to useful resources in design and coding</p>
                  <a href="https://medium.com/@miftauddinkhan10/useful-resources-3bee64a71117" target="_blank" rel="noopener noreferrer" className="btn btn-default blog_btn main_btn">Read More</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="single_blog">
              <div className="blog-thumb">
                <div className="blog-image">
                  <a href="#0"><img src={blog3} className="img-responsive" alt="" /></a>
                </div>
                <div className="blog-info">
                  <small><i className="fa fa-clock-o"></i>July 13, 2021</small>
                  <span>| Economy</span>
                  <a href="https://mifta1.medium.com/economy-of-sweden-cd90c535ae2f" target="_blank" rel="noopener noreferrer"><h4>The representation of Economy Of Sweden</h4></a>
                  <p>Economy that describe a nation’s stability.</p>
                  <a href="https://mifta1.medium.com/economy-of-sweden-cd90c535ae2f" target="_blank" rel="noopener noreferrer" className="btn btn-default blog_btn main_btn">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer></Footer>
    </div>

  );
};

export default Blogs;
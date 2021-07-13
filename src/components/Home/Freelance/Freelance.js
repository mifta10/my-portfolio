import React,{useEffect} from 'react';
import './Freelance.css';
import Aos from 'aos'
import 'aos/dist/aos.css'

const Freelance = () => {

  useEffect(() => {
    Aos.init({ duration: 2000})
},[])

  return (
    <section class="cta_section section_padding">
    <div class="container" data-aos="zoom-in">
      <div class="row">
        <div class="col-lg-12 text-center">
          <div class="cta_content">
            <h3>I Am Available For Freelancing !</h3>
            <a href="#0" class="btn btn-default main_btn"><span>Hire Me</span></a>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Freelance;
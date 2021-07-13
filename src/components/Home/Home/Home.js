import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Freelance from '../Freelance/Freelance';
import Navbar from '../Navbar/Navbar';
import Services from '../Services/Services';
import Skills from '../Skills/Skills';

const Home = () => {
  return (
    <div>
     <Banner></Banner>
     <Navbar></Navbar>
     <About></About>
     <Services></Services>
     <Skills></Skills>
     <Freelance></Freelance>
     <Contact></Contact>
     <Footer></Footer>
    </div>
  );
};

export default Home;
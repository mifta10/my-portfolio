import React, { useState,useEffect } from 'react';
import './Services.css';
import Aos from 'aos'
import 'aos/dist/aos.css'
import { FaStethoscope, FaShippingFast, FaGithub, FaShoppingCart, FaSyringe, FaDove, FaTruckPickup, FaServicestack, FaAngrycreative } from 'react-icons/fa';

const Services = () => {

  useEffect(() => {
    Aos.init({ duration: 2000})
},[])

  const [header] = useState({
    mainHeader: "SERVICES",
    subHeading: "My Projects",
    text:
      "Here Are the list of some of my works that I've done recently",
  });
  const [state] = React.useState([
    {
      id: 1,
      icon: <FaGithub className="commonIcons" />,
      heading: "MenTex",
      text:
        "A website for mentally disturbed people where they can match themselves",
    },
    {
      id: 2,
      icon: <FaShoppingCart className="commonIcons" />,
      heading: "Sports Zone",
      text:
        "A sports product selling website,where customers can get equipments of sports",
    },
    {
      id: 3,
      icon: <FaStethoscope className="commonIcons" />,
      heading: "Doctors Arena",
      text:
        "A website for doctors and patients with attractive feature of patients appointment",
    },
    {
      id: 4,
      icon: <FaShippingFast className="commonIcons" />,
      heading: "Ema John",
      text:
        "An e-commerce web app for selling different products to customer.Like Amazon",
    },
    {
      id: 5,
      icon: <FaSyringe className="commonIcons" />,
      heading: "Covid Tracker",
      text:
        "A web app containing information about covid situation over the world.You'll find Every Info.",
    },
    {
      id: 6,
      icon: <FaDove className="commonIcons" />,
      heading: "Cuda",
      text:
        "A single page website converted from a PSD file and It's all about a service agency",
    },
    {
      id: 7,
      icon: <FaTruckPickup className="commonIcons" />,
      heading: "Trvl App",
      text:
        " A single page website about travelling.You'll find some travel destinations here.",
    },
    {
      id: 8,
      icon: <FaServicestack className="commonIcons" />,
      heading: "Avo App",
      text:
        "A single page website about service agency.You'll find some services like: Web Design",
    },
    {
      id: 9,
      icon: <FaAngrycreative className="commonIcons" />,
      heading: "Glozzom",
      text:
        "A multi page website about service agency.You'll find some services that is interesting",
    },
  ]);

  return (
    <div className="services" id="projects">
      <div className="container">
        <div className="services__header">
          <div className="common" data-aos="zoom-in">
            <h3 className="heading">{header.mainHeader}</h3>
            <h1 className="mainHeader">
              {header.subHeading}
            </h1>
            <p className="mainContent">{header.text}
            </p>
            <div className="commonBorder"></div>
          </div>
          <div className="row text-center" data-aos="fade-up">
            {state.map((info) => (
              <div className="col-md-4 project__link">
                <a href="/projects">
                <div className="services__box">
                  {info.icon}
                  <div className="services__box-header">{info.heading}</div>
                  <div className="services__box-p">{info.text}</div>
                </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
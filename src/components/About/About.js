import React from 'react';
import './About.css';
import profile from '../Home/HomePic.jpg';
import Contact from '../Contact/Contact';

const About = ({content}) => {
  return (
    <div className="about-container">
      <div className="about">
        <img src={profile} alt="Owner"/>
        <p>{content}</p>
      </div>
      <Contact />
    </div>
  )
}

export default About;

import React from "react";
import profile_img from "../../assets/ppcir.png";
import "./Hero.css";
import AnchorLink from 'react-anchor-link-smooth-scroll'
// import resume from '../../assets/resume.pdf'

const Hero = () => {
  return (
    <div id='home' className="hero">
      <img src={profile_img} alt="" />
      <h1><span>I'm Sohan Das,</span> full stack web developer based in India.</h1>
      <p>
        I am excited to start my career in this field. My skills in programming,
        DSA, and web development, along with my eagerness to learn and adapt,
        will help me contribute effectively.
      </p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
        <a className="hero-resume" href="https://drive.google.com/file/d/1hFmSmGGS_uUbRLhBPy8LSl5tKTPkcgIq/view?usp=sharing" download="resume" target='_blank'>Resume</a>
      </div>
    </div>
  );
};

export default Hero;

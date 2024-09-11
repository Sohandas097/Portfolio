import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/about_profile.svg";
import sideprofile from "../../assets/sidepic.png";


const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        {/* <div className="about-left"> */}
          {/* <img src={sideprofile} alt="" /> */}
        {/* </div> */}
        <div className="about-right">
          <div className="about-para">
            <p>
            I am a full-stack web developer with expertise in the MERN stack, actively solving data structures and algorithms on LeetCode. Currently, I am pursuing my Master of Computer Applications (MCA) to further enhance my technical skills.
            </p>
            {/* <p>
              Passionate about developing websites, solving DSA problems. 
            </p> */}
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>React Js</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>Javascript</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Node Js</p>
              <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>
      {/* Stats of achievements */}
      {/* <div className="about-achievements">
        <div className="about-achievement">
          <h1>10+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>90+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>15+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div> */}
    </div>
  );
};

export default About;

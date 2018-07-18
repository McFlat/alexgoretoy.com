import React from "react";
import { FaCloudDownload } from "react-icons/lib/fa";

import profilePic1 from "../assets/images/profilepic1.jpg";
import profilePic2 from "../assets/images/profilepic2.jpg";

const About = () => (
  <section id="about">
    <div className="row">
      <div className="three columns">
        <img className="profile-pic animated slideInLeft" src={profilePic1} alt="" />
        <img className="profile-pic animated slideInLeft" src={profilePic2} alt="" />
      </div>
      <div className="nine columns main-col">
        <h2 className="animated slideInDown">About Me</h2>
        <p>
          I've been working with technology since my teenage years when I bought my first computer at 15 with my paperboy money. I started with VS.net development in 2003, then grew tired of MS, learned Linux, open-source web development and have been doing it very successfully for many years now. I'm very detail oriented and like to make things that are solid and scale beyond expectations. When I am not working or learning some new technology, I like to do research about how the Earth is Flat! <a href="https://audiobible.life">Learn more</a>
        </p>
        <div className="row">
          <div className="columns contact-details animated pulse">
            <h2>Contact Details</h2>
            <p className="address">
              <span>Alex Goretoy</span>
              <br />
              <span>+1 (310) 741-0216</span>
              <br />
              <span>alex@goretoy.com</span>
            </p>
          </div>
          <div className="columns download animated slideInUp">
            <p>
              <a href="/Alex-Goretoy-Resume.docx" className="button">
                <FaCloudDownload /> Download Resume
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;

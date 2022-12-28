import React from "react";
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import { FaCloudDownload, FaSkype } from "react-icons/lib/fa";

import profilePic1 from "../assets/images/profilepic1.jpg";
import profilePic2 from "../assets/images/profilepic2.jpg";
// import profilePic3 from "../assets/images/profilepic3.png";
// {/* <img className="profile-pic animated slideInLeft" src={profilePic3} alt="" /> */}
const About = () => (
  <section id="about">
    <div className="row">
      <div className="three columns">
        <img className="profile-pic animated slideInLeft" src={profilePic1} alt="" />
        <img className="profile-pic animated slideInLeft" src={profilePic2} alt="" />
        <img className="hidden" src="//c.statcounter.com/11777445/0/9f5a21d2/1/" />
      </div>
      <div className="nine columns main-col">
        <h2 className="animated slideInDown">About Me</h2>
        <p>
          I've been working with technology since my teenage years when I bought my first computer at 15 with my paperboy money. I started with VS.net development in 2003, then grew tired of MicroSoft, learned Linux, open-source web development and have been doing it very successfully for many years now. HTML, CSS and JavaScript since 2003, internet security since 2005, jQuery since 2006, web pen testing since 2006, Python since 2007, Ruby since 2008, Node since 2009, Backbone since 2012, React since 2015, TypeScript, Angular since 2016. I prefer to work remotely not on-site, since it's all internet based industry, it makes things easier on me and on you. I'm very detail oriented and like to make things that are solid and scale beyond expectations. I like to go with the flow. I'm usually ahead of the curve. Mostly I end up teaching my cowokers a lot and learning a lot from them too. I thrive on knowledge. No one knows everything, it's impossible. I don't try to remember everything, I do things differently compared to most people. Maybe your company could benefit from the way I do things. I like to automate and optimize processes. I don't need a degree to make secure, scalable applications. Most opensource project are not very secure. My primary focus is always usability and security, building things that are pleasant to use, having a good interface, the way to use the interface, the way the data is presented, how tasks are done with the interface and very secure app from the start to protect the users and investors. I mostly learn from others, I take the good and leave the bad, I improve the bad as I see fit to make it good overall. Things take time but usually the time it takes is worth it. It's about the way a person does the stuff what matters, doesn't matter if he can remember 30 digits of PI, just because a person has a good memory doesn't say much. I'm always preparing for the future, for growth, for the worst case scenarios and apply my foreward thinking to everything I do. I'm not really looking to working with scandolous people or scam artists, I'm a pretty honest person, so if you like to sweep issues under the rug I'm not a good fit. I have real world production experience, which goes a long way compared to someone who only knows how to do what they're told and how to think. I believe the main thing is to keep seeking the truth, meditate on the word of God, be honest with yourself and keep working on yourself. There's a good reason why I dropped out of school of indoctrination camps and I never looked back. Look at so many of these college graduates without jobs and so much debt. I don't care to remember all that stuff, especially when things changes so often and I can search for them online when I need, so don't expect me to answer all your questions perfectly when you just found them online somewhere. I care more to remember the word of God, which doesn't change. I've written lot's of programs, interfaces, and created systems from the ground up. I've managed people and hired people. I've done a lot of interviews, and some interview questions are a complete copy of interview questions they found online. Some just ask me how I would do things, to find out during the interview how they can do it without even hiring me after that. While others just see my resume and hire me based on that. Judge how you want to be judged, is all I have to say. We're all created in the image of the creator. In the end, we will be given the measure that we give. Please don't waste my time. Either let's work together or get lost. Most people only know what they've been told, and what they know is lies as truth until they do their own research. Television is a form of mind control, a lesser magic, nothing but predictive programming, mental conditioning and lies on TV, there is some truth but they work on opposites, so it's a matter of knowing how they operate. If you want my advice, then here it is, never trust advertisements. REMOTE WORK ONLY PLEASE
        </p>
        <div className="row">

          <div className="columns download animated slideInUp">
            <p>
              <OutboundLink href="/Alex-Goretoy-Resume.docx" className="button">
                <FaCloudDownload /> Download Resume
              </OutboundLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;

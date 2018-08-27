import React from "react";
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import { FaCloudDownload, FaSkype } from "react-icons/lib/fa";

import profilePic1 from "../assets/images/profilepic1.jpg";
import profilePic2 from "../assets/images/profilepic2.jpg";

// <div className="columns contact-details animated pulse">
//             <h2>Contact Alex</h2>
//             <div className="row">
//               <div className="columns">
//                 <span>Aleksandr Goretoy</span>
//                 <br />
//                 <span><OutboundLink href="tel:+13107410216">+1 (310) 741-0216</OutboundLink></span>
//                 <br />
//                 <span><OutboundLink href="mailto:alex@goretoy.com">alex@goretoy.com</OutboundLink></span>
//               </div>
//               <div className="columns">
//                 <span>Remote Work Only</span>
//                 <br />
//                 <span><OutboundLink href="//goretoy.com">Hire me @ $120/hr</OutboundLink></span>             
//                 <br />
//                 <span><FaSkype />&nbsp;&nbsp;&nbsp;&nbsp;<OutboundLink href="skype:superleetdude">superleetdude</OutboundLink></span>
//               </div>
//             </div>
//           </div>
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
          I've been working with technology since my teenage years when I bought my first computer at 15 with my paperboy money. I started with VS.net development in 2003, then grew tired of MS, learned Linux, open-source web development and have been doing it very successfully for many years now. I prefer to work remotely not on-site, since it's all internet based industry, it makes things easier on me. I'm very detail oriented and like to make things that are solid and scale beyond expectations. I love open-source, hot-pockets and kittens. <OutboundLink href="http://waterizlife.com">Ask me about the water that I drink and get you some!</OutboundLink> I'm self-taught and I'm not cheap! I don't need a degree to make secure, scalable applications. I have real world production experience and that goes a long way compared to someone who only knows how to do what they're told and how to think. There's a good reason why I dropped out of school of indoctrination camps and I never looked back. I'm not some circus clown! When I am not working or learning some new technology, or creating something from nothing, I like to seek the truth and do research about how the Earth is Flat, amongst other topics! I highly recommend you read the <OutboundLink href="https://biblehub.com/kjv/" title="KJV is the only true word of God, the others are esoteric satanic versions, just FYI!">KJV Bible</OutboundLink>, if you know whats good for you! <OutboundLink href="https://audiobible.life" title="Proceed with the github SSL to view the site">Learn more</OutboundLink>
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

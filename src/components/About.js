import React from "react";
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import { FaCloudDownload, FaSkype } from "react-icons/lib/fa";

import profilePic1 from "../assets/images/profilepic1.jpg";
import profilePic2 from "../assets/images/profilepic2.jpg";

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
          I've been working with technology since my teenage years when I bought my first computer at 15 with my paperboy money. I started with VS.net development in 2003, then grew tired of MS, learned Linux, open-source web development and have been doing it very successfully for many years now. I prefer to work remotely not on-site, since it's all internet based industry, it makes things easier on me. I'm very detail oriented and like to make things that are solid and scale beyond expectations. I love open-source, hot-pockets and kittens. <OutboundLink href="http://waterizlife.com">Ask me about the water that I drink and get you some!</OutboundLink> I'm self-taught and I'm not cheap! I don't need a degree to make secure, scalable applications. I have real world production experience and that goes a long way compared to someone who only knows how to do what they're told and how to think. There's a good reason why I dropped out of school of indoctrination camps and I never looked back. I'm not some circus clown! When I am not working or learning some new technology, or creating something from nothing, I like to seek the truth and do research about how the Earth is Flat, amongst other topics! I also like to read <OutboundLink href="https://top-secret-documents.com">top secret documents</OutboundLink> that have been declassified, and watch educational videos for fun. I highly recommend you read the <OutboundLink href="https://biblehub.com/kjv/" title="KJV is the only true word of God, the others are esoteric satanic versions, just FYI!">KJV Bible</OutboundLink>, or listen to the <OutboundLink href="https://soundcloud.com/search/sets?q=audiobible&filter.genre_or_tag=audiobooks">AudioBible</OutboundLink>.
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

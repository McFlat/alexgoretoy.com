import React from "react";
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import SocialLinks from "./SocialLinks";

const Banner = () => (
  <div className="row banner">
    <div className="banner-text">
      <h1 className="responsive-headline animated slideInDown">I'm Alex Goretoy.</h1>
      <h3 className="animated pulse">
        I'm a US based <span>full-stack web developer</span>,{" "}
        <span>lead solutions architect</span> and <span>devops engineer</span>.<br />Let's
        <OutboundLink className="smoothscroll" href="#about">
          {" "}
          make something
        </OutboundLink>{" "}
        and <span>change the world</span> together. <span>Jesus Christ is LORD!</span>
        <br />
        <span>Psalm 23:4 Yea, though I walk through the valley of the shadow of death, I will fear no evil; for thou <italic>art</italic> with me; thy rod and thy staff they comfort me.</span>
      </h3>
      <hr />
      <SocialLinks />
    </div>
  </div>
);

export default Banner;

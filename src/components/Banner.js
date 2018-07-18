import React from "react";
import SocialLinks from "./SocialLinks";

const Banner = () => (
  <div className="row banner">
    <div className="banner-text">
      <h1 className="responsive-headline animated slideInDown">I'm Alex Goretoy.</h1>
      <h3 className="animated pulse">
        I'm a US based <span>full-stack web developer</span>,{" "}
        <span>lead solutions architect</span> and <span>devops engineer</span>.<br />Let's
        <a className="smoothscroll" href="#about">
          {" "}
          make something
        </a>{" "}
        and change the world together.
      </h3>
      <hr />
      <SocialLinks />
    </div>
  </div>
);

export default Banner;

import React from "react";
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import SocialLinks from "./SocialLinks";
import { FaChevronCircleUp } from "react-icons/lib/fa";

// <div className="row">
//   <div className="twelve columns">
//     Score by <OutboundLink href="//k4god.pl">K4GOD.pl</OutboundLink>
//   </div>
// </div>

const Footer = () => (
  <footer id="footer">
    <div className="row">
      <div className="twelve columns">
        <SocialLinks />

        &copy; Copyright {new Date().getFullYear()} Alex Goretoy All rights reserved.
      </div>
      <div className="row">
        <div className="twelve columns">
          Images from <OutboundLink href="//unsplash.com">UnSplash</OutboundLink>
        </div>
      </div>

      <div id="go-top">
        <OutboundLink className="smoothscroll" title="Back to Top" href="#home">
          <FaChevronCircleUp />
        </OutboundLink>
      </div>
    </div>
  </footer>
);

export default Footer;

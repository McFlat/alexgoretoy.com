import React from "react";
import { OutboundLink } from 'gatsby-plugin-google-analytics';

const Navigation = () => (
  <nav id="nav-wrap">
    <a className="mobile-btn" href="#nav-wrap" />
    <ul id="nav" className="nav">
      <li>
        <OutboundLink className="smoothscroll" href="#home">
          Home
        </OutboundLink>
      </li>
      <li>
        <OutboundLink className="smoothscroll" href="#about">
          About
        </OutboundLink>
      </li>
      <li>
        <OutboundLink className="smoothscroll" href="#education">
          Education
        </OutboundLink>
      </li>
      <li>
        <OutboundLink className="smoothscroll" href="#skills">
          Skills
        </OutboundLink>
      </li>
      <li>
        <OutboundLink className="smoothscroll" href="#experience">
          Experience
        </OutboundLink>
      </li>
      <li>
        <OutboundLink className="smoothscroll" href="#stuff">
          Stuff
        </OutboundLink>
      </li>
      <li>
        <OutboundLink className="smoothscroll" href="#portfolio">
          Portfolio
        </OutboundLink>
      </li>
      <li>
        <OutboundLink className="smoothscroll" href="#recommendations">
          Recommendations
        </OutboundLink>
      </li>
    </ul>
  </nav>
);

export default Navigation;

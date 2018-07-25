import React from "react";
import { OutboundLink } from 'gatsby-plugin-google-analytics';

const audioTrack = "/I-feel-No-Pain-couse-GOD-is-Here-by-K4GOD.pl"

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
      <li>
        <audio preload loop autoPlay controls style={{height: '30px', width: '180px'}}>
          <source src={audioTrack + '.ogg'} type="audio/ogg" />
          <source src={audioTrack + '.mp3'} type="audio/mpeg" />
          <embed src={audioTrack + '.mp3'} width="180" height="30" hidden="true" />
        </audio>
      </li>
    </ul>
  </nav>
);

export default Navigation;

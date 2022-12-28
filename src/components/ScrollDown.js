import React from "react";
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import { FaChevronCircleDown } from "react-icons/lib/fa";

const ScrollDown = () => (
  <p className="scrolldown">
    <OutboundLink className="smoothscroll" href="#about">
      <FaChevronCircleDown />
    </OutboundLink>
  </p>
);

export default ScrollDown;

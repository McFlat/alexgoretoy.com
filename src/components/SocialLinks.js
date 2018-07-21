import React from "react";
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import {
  FaFacebook,
  FaGithub,
  FaBitbucket,
  FaGooglePlus,
  FaInstagram,
  FaTwitter
} from "react-icons/lib/fa";
// https://gorangajic.github.io/react-icons/fa.html

const SocialLinks = () => (
  <ul className="social">
    <li className="animated slideInLeft">
      <OutboundLink href="https://bitbucket.org/FlatEarthTruther/">
        <FaBitbucket />
      </OutboundLink>
    </li>
    <li className="animated slideInRight">
      <OutboundLink href="https://github.com/FlatEarthTruther">
        <FaGithub />
      </OutboundLink>
    </li>
  </ul>
);

export default SocialLinks;

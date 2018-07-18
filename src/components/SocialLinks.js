import React from "react";
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
      <a href="https://bitbucket.org/FlatEarthTruther/">
        <FaBitbucket />
      </a>
    </li>
    <li className="animated slideInRight">
      <a href="https://github.com/FlatEarthTruther">
        <FaGithub />
      </a>
    </li>
  </ul>
);

export default SocialLinks;

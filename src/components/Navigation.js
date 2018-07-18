import React from "react";

const Navigation = () => (
  <nav id="nav-wrap">
    <a className="mobile-btn" href="#nav-wrap" />
    <ul id="nav" className="nav">
      <li>
        <a className="smoothscroll" href="#home">
          Home
        </a>
      </li>
      <li>
        <a className="smoothscroll" href="#about">
          About
        </a>
      </li>
      <li>
        <a className="smoothscroll" href="#education">
          Education
        </a>
      </li>
      <li>
        <a className="smoothscroll" href="#skills">
          Skills
        </a>
      </li>
      <li>
        <a className="smoothscroll" href="#experience">
          Experience
        </a>
      </li>
      <li>
        <a className="smoothscroll" href="#portfolio">
          Portfolio
        </a>
      </li>
      <li>
        <a className="smoothscroll" href="#recommendations">
          Recommendations
        </a>
      </li>
    </ul>
  </nav>
);

export default Navigation;

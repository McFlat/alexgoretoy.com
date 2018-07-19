import React from "react";

import Navigation from "./Navigation";
import Banner from "./Banner";
import ScrollDown from "./ScrollDown";

let bgImageClass = 'bg-1'

const Header = () => (
  <header id="home" className={bgImageClass}>
    <Navigation />
    <Banner />
    <ScrollDown />
  </header>
);

export default Header;

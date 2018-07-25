import React from "react";

import Navigation from "./Navigation";
import Banner from "./Banner";
import ScrollDown from "./ScrollDown";

const imagesCount = 10;
const imageNumber = randomInt(1, imagesCount);
let bgImageClass = 'bg-' + imageNumber;

function randomInt (low, high) {
  low = parseInt(low, 10);
  high = parseInt(high, 10);
  let number = -1;
  do {
    number = Math.floor(Math.random() * (high - low + 1) + low);
  } while(number < low && number > high);
  return number;
}

const Header = () => (
  <header id="home" className={bgImageClass}>
    <Navigation />
    <Banner />
    <ScrollDown />
  </header>
);

export default Header;

import React from "react";

import Navigation from "./Navigation";
import Banner from "./Banner";

const imagesCount = 9;
const imageNumber = randomInt(1, imagesCount);
let bgImageClass = 'bg-' + imageNumber;

function randomInt (low, high) {
  low = parseInt(low, 10);
  high = parseInt(high, 10);
  let number = -1;
  do {
    number = Math.floor(Math.random() * (high - low + 1) + low);
  } while(number < low && number > high);
  console.log(number)
  return number;
}

const Header = () => (
  <header id="home" className={bgImageClass}>
    <Navigation />
    <Banner />
  </header>
);

export default Header;

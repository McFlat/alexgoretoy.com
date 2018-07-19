import React from 'react';

import {
  FaArrowCircleLeft
} from "react-icons/lib/fa";
import GematriaCalculator from "./GematriaCalculator";


export default () => (
	<section id="code">
    <div className="row">
      <div className="three columns header-col">
        <h1 className="animated slideInLeft">
          <span>Code Samples</span>
        </h1>
      </div>

      <div className="nine columns main-col">
        <div className="row item">
	        <div className="twelve columns">
	          <h3><a href="https://gist.github.com/FlatEarthTruther">Github Gists <FaArrowCircleLeft /></a></h3>
	        	<p className="info">
              One of my github accounts, the other(better) one is flagged for "spam".
            </p>
	        </div>
	      </div>

	      <div className="row item">
	        <div className="twelve columns">
	          <h3><a href="https://stackoverflow.com/users/2530572/art-gallery">StackOverflow Profile <FaArrowCircleLeft /></a></h3>
	        	<p className="info">
              My StackOverflow profile.
            </p>
	        </div>
	      </div>

	      <div className="row item">
	        <div className="twelve columns">
	          <h3><a href="https://coderwall.com/gxela">Coderwall Protips <FaArrowCircleLeft /></a></h3>
	        	<p className="info">
              My CoderWall profile.
            </p>
	        </div>
	      </div>

	      <div className="row item">
	        <div className="twelve columns">
	          <h3><a href="http://angular-address-book.appspot.com/#/">Angular Address Book <FaArrowCircleLeft /></a></h3>
	        	<p className="info">
              Demo Address Book app written with Angular running on Google Cloud.
            </p>
	        </div>
	      </div>

        <div className="row item">
          <div className="twelve columns">
            <h3><a href="https://jsfiddle.net/9Lkaynz7">Gematria Calculator <FaArrowCircleLeft /></a></h3>
            <p className="info">
            	Just a simple calculator to translate letters to numbers.
            </p>
            <GematriaCalculator />
          </div>
        </div>

        
      </div>
    </div>
  </section>
)
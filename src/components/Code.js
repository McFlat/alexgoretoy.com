import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import {
  FaArrowCircleLeft
} from "react-icons/lib/fa";
import GematriaCalculator from "./GematriaCalculator";


export default () => (
	<section id="stuff">
    <div className="row">
      <div className="three columns header-col">
        <h1 className="animated slideInLeft">
          <span>Code Samples & Stuff</span>
        </h1>
      </div>

      <div className="nine columns main-col">
        <div className="row item">
	        <div className="twelve columns">
	          <h3><OutboundLink href="https://gist.github.com/FlatEarthTruther">Github Gists <FaArrowCircleLeft /></OutboundLink></h3>
	        	<p className="info">
              One of my github accounts, the other(better) one is flagged for "spam".
            </p>
	        </div>
	      </div>

	      <div className="row item">
	        <div className="twelve columns">
	          <h3><OutboundLink href="https://stackoverflow.com/users/2530572/art-gallery">StackOverflow Profile <FaArrowCircleLeft /></OutboundLink></h3>
	        	<p className="info">
              My StackOverflow profile.
            </p>
	        </div>
	      </div>

	      <div className="row item">
	        <div className="twelve columns">
	          <h3><OutboundLink href="https://coderwall.com/gxela">Coderwall Protips <FaArrowCircleLeft /></OutboundLink></h3>
	        	<p className="info">
              CoderWall profile.
            </p>
	        </div>
	      </div>

	      <div className="row item">
	        <div className="twelve columns">
	          <h3><OutboundLink href="https://travis-ci.org/FlatEarthTruther">Travis CI profile <FaArrowCircleLeft /></OutboundLink></h3>
	        	<p className="info">
              Travis CI profile with my public projects configures for continuous integration.
            </p>
	        </div>
	      </div>

	      <div className="row item">
	        <div className="twelve columns">
	          <h3><OutboundLink href="https://libraries.io/github/FlatEarthTruther">Libraries.IO profile <FaArrowCircleLeft /></OutboundLink></h3>
	        	<p className="info">
              Libraries.IO profile.
            </p>
	        </div>
	      </div>

	      <div className="row item">
	        <div className="twelve columns">
	          <h3><OutboundLink href="https://www.npmjs.com/package/mongoclient">📦 MongoClient <FaArrowCircleLeft /></OutboundLink></h3>
	        	<code>
	        		$ npm install --save mongoclient
	        	</code>
	        	<p className="info">
              A mongodb client wrapper for mongoose.
            </p>

	        </div>
	      </div>

	      <div className="row item">
	        <div className="twelve columns">
	          <h3><OutboundLink href="https://www.npmjs.com/package/videolerx">📦 VIDEOLERX <FaArrowCircleLeft /></OutboundLink></h3>
	        	<code>
	        		$ npm install -g videolerx
	        	</code>
	        	<p className="info">
              Downloads videos from youtube, vimeo, etc and uploads them to S3.
            </p>
	        </div>
	      </div>

	      <div className="row item">
	        <div className="twelve columns">
	          <h3><OutboundLink href="https://www.npmjs.com/package/notify-used-or-free">📦 notify-used-or-free <FaArrowCircleLeft /></OutboundLink></h3>
	        	<code>
            	$ npm install -g notify-used-or-free
            </code>
	        	<p className="info">
              Notify by email or sms of free disk space on server or when a certain amount of disk space has been used.
            </p>
	        </div>
	      </div>

	      <div className="row item">
	        <div className="twelve columns">
	          <h3><OutboundLink href="https://www.npmjs.com/package/dictionary-definitions-data">📦 dictionary-definitions-data <FaArrowCircleLeft /></OutboundLink></h3>
	        	<code>
        			$ npm i -S dictionary-definitions-data
	        	</code>
	        	<p className="info">
              Data scraped with spiders from dictionary.com on 2018-03
            </p>
	        </div>
	      </div>

	      <div className="row item">
	        <div className="twelve columns">
	          <h3><OutboundLink href="https://www.npmjs.com/package/thesaurus-synonyms-data">📦 thesaurus-synonyms-data <FaArrowCircleLeft /></OutboundLink></h3>
	        	<code>
        			$ npm i -S thesaurus-synonyms-data
	        	</code>
	        	<p className="info">
              Data scraped with spiders from thesaurus.com on 2018-03
            </p>
	        </div>
	      </div>

          <div className="row item">
	        <div className="twelve columns">
	          <h3><OutboundLink href="https://github.com/FlatEarthTruther/clipbucket-downloader-script">ClipBucket Downloader Script <FaArrowCircleLeft /></OutboundLink></h3>
	        	<p className="info">
              The Best ClipBucket Downloader you will find until youtube-dl adds support for clipbucket sites.
            </p>
	        </div>
	      </div>
	      <div className="row item">
	        <div className="twelve columns">
	          <h3><OutboundLink href="http://angular-address-book.appspot.com/#/">Angular Address Book <FaArrowCircleLeft /></OutboundLink></h3>
	        	<p className="info">
              Demo Address Book app written with Angular running on Google Cloud.
            </p>
	        </div>
	      </div>

	      <div className="row item">
	        <div className="twelve columns">
	          <h3><OutboundLink href="https://repl.it/@FlatEarthTruth/MerryWhirlwindFreesoftware">Python Console Card Game of War on REPL.it <FaArrowCircleLeft /></OutboundLink></h3>
	        	<p className="info">
              A simple card game of war, written using python3, this was a test exam for job placement at a company.
            </p>
	        </div>
	      </div>

        <div className="row item">
          <div className="twelve columns">
            <h3><OutboundLink href="https://jsfiddle.net/9Lkaynz7">Gematria Calculator <FaArrowCircleLeft /></OutboundLink></h3>
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
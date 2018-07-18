import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import 'animate.css';
import { siteMetadata } from "../../gatsby-config";

// import SmoothScroll from 'smooth-scroll/dist/smooth-scroll.polyfills.min.js';
// const scroll = new SmoothScroll('a[href*="#"]');

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
      <meta name="author" description={siteMetadata.author} />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <title>{siteMetadata.title}</title>
      <link rel="icon" href="../assets/favicon.png" type="image/x-icon"/>
    </Helmet>
    {children()}
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;

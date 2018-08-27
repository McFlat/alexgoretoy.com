import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import 'animate.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { siteMetadata } from "../../gatsby-config";
import favicon from "../assets/favicon.png";
// import SmoothScroll from 'smooth-scroll';


class TemplateWrapper extends React.Component {
  constructor(props) {
    super(props)
  }
  // componentDidMount() {
  //   new SmoothScroll('.smoothscroll');
  //   if (
  //     typeof location !== 'undefined' && 
  //     typeof location.hash !== 'undefined' && 
  //     location.hash !== '' && typeof $ !== 'undefined'
  //   ) {
  //     $('a[href="'+location.hash+'"]').click();
  //   }
    
  // }
  render() {
    return (
      <div>
        <Helmet>
          <meta charset="utf-8" />
          <meta http-equiv="x-ua-compatible" content="ie=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <title>{siteMetadata.title}</title>
          <meta name="author" description={siteMetadata.author} />
          
          <link rel="icon" href={favicon} type="image/x-icon"/>
          <link href="https://fonts.googleapis.com/css?family=Rubik+Mono+One" rel="stylesheet"/>
        </Helmet>
        {this.props.children()}
      </div>
    )
  }
};

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;

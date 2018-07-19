import React from "react";
import Link from "gatsby-link";

import "../assets/css/main.css";

import Header from "../components/Header";
import About from "../components/About";
import Resume from "../components/Resume";
import Portfolio from "../components/Portfolio";
import Code from "../components/Code";
import Recommendations from "../components/Recommendations";
import Footer from "../components/Footer";

const IndexPage = () => (
  <div>
    <Header />
    <About />
    <Resume />
    <Portfolio />
    <Code />
    <Recommendations />
    <Footer />
  </div>
);

export default IndexPage;

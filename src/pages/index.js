import React from "react";

import "../assets/css/main.css";

import Header from "../components/Header";
import About from "../components/About";
import Videos from "../components/Videos";
import Education from "../components/Education";
import Portfolio from "../components/Portfolio";
import Code from "../components/Code";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Recommendations from "../components/Recommendations";
import Footer from "../components/Footer";

const IndexPage = () => (
  <div>
    <Header />
    <About />
    <Experience />
    <Portfolio />
    <Code />
    <Education />
    <Skills />
    <Recommendations />
    <Videos />
    <Footer />
  </div>
);

export default IndexPage;

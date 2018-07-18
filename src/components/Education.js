import React from "react";

import HTMLcert from "../assets/images/certifications/cert-1014-860659.jpg";
import CSScert from "../assets/images/certifications/cert-1023-860659.jpg";
import JScert from "../assets/images/certifications/cert-1024-860659.jpg";
import PHPcert from "../assets/images/certifications/cert-1059-860659.jpg";
import SQLcert from "../assets/images/certifications/cert-1060-860659.jpg";
import JAVAcert from "../assets/images/certifications/cert-1068-860659.jpg";
import RUBYcert from "../assets/images/certifications/cert-1081-860659.jpg";
import Python3cert from "../assets/images/certifications/cert-1073-860659.jpg";

const Education = () => (
  <section id="education">
    <div className="row">
      <div className="three columns header-col">
        <h1 className="animated slideInLeft">
          <span>Education</span>
        </h1>
      </div>

      <div className="nine columns main-col">
        <div className="row item">
          <div className="twelve columns">
            <h3><a href="https://www.sololearn.com/Profile/860659">SoloLearn.com</a></h3>
            <p className="info">
              Learn to code for FREE!
              <span>&bull;</span>
              <em className="date">Nov. 2016</em>
            </p>

            <ol>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Python 3</li>
              <li>PHP</li>
              <li>SQL</li>
              <li>Java</li>
              <li>Ruby</li>            
            </ol>
            <div className="row certifications">
              <div className="three columns">
                <img src={HTMLcert} />
              </div>
              <div className="three columns">
                <img src={CSScert} />
              </div>
              <div className="three columns">
                <img src={JScert} />
              </div>
              <div className="three columns">
                <img src={Python3cert} />
              </div>
            </div>
            <div className="row certifications">
              <div className="three columns">
                <img src={PHPcert} />
              </div>
              <div className="three columns">
                <img src={SQLcert} />
              </div>
              <div className="three columns">
                <img src={JAVAcert} />
              </div>
              <div className="three columns">
                <img src={RUBYcert} />
              </div>
            </div>
          </div>
        </div>
        
        <div className="row item">
          <div className="twelve columns">
            <h3><a href="https://aws.amazon.com/certification/certification-prep/">AWS Certified Solutions Architect</a></h3>
            <p className="info">
              Self-prep for AWS Certified Solutions Architect - Associate Exam
              <span>&bull;</span>
              <em className="date">May 2016</em>
            </p>
            
            <ol>
              <li>Amazon Web Services</li>
            </ol>
            <div className="row certifications">
              <div className="three columns">

              </div>
            </div>
          </div>
        </div>
        <div className="row item">
          <div className="twelve columns">
            <h3><a href="https://egghead.io/users/126924">EggHead.io</a></h3>
            <p className="info">
              Learn the best JavaScript tools and frameworks from industry pros.
              <span>&bull;</span>
              <em className="date">Nov. 2015</em>
            </p>
            
            <ol>
              <li>React</li>
              <li>Redux</li>
              <li>Redux Saga</li>
              <li>TypeScript</li>
            </ol>
            
          </div>
        </div>
        <div className="row item">
          <div className="twelve columns">
            <h3><a href="https://teamtreehouse.com/alexgoretoy">TeamTreeHouse.com</a></h3>
            <p className="info">
              Learn to code, gain a new skill, get a new job.
              <span>&bull;</span>
              <em className="date">Jun. 2015</em>
            </p>
            
            <ol>
              <li>HTML</li>
              <li>CSS</li>
              <li>PHP</li>
              <li>Python</li>
              <li>Ruby</li>
              <li>JavaScript</li>
              <li>Java</li>
              <li>iOS - Swift</li>
              <li>Android - Java</li>
              <li>WordPress</li>
              <li>Design</li>
              <li>Development Tools</li>
              <li>Digital Literacy</li>
              <li>Business</li>

            </ol>
            
          </div>
        </div>

        <div className="row item">
          <div className="twelve columns">
            <h3><a href="http://www.crisaga.org/closure.htm">Court Reporting Institute (CRI)</a></h3>
            <p className="info">
              Learn computer programming with Visual Studio .Net Framework 1.1
              <span>&bull;</span>
              <em className="date">Jul. 2003</em>
            </p>
            
            <ol>
              <li>C#</li>
              <li>VB.net</li>
              <li>ASP.net</li>
              <li>SQL</li>
            </ol>
            <div className="row certifications">
              <div className="three columns">
                
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  </section>
);

export default Education;

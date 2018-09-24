import React from "react";
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import {
  FaArrowCircleLeft
} from "react-icons/lib/fa";

import Subnetcert from "../assets/images/certifications/cybrary-subnetting.png";
import PCIcert from "../assets/images/certifications/cybrary-payment-card-industry.png";
import InfoSeccert from "../assets/images/certifications/cybrary-infosec-intro.png";
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
            <h3><OutboundLink href="http://www.cybrary.it/members/gxela/">Cybrary.IT <FaArrowCircleLeft /></OutboundLink></h3>
            <p className="info">
              Build your cyber security or IT career, for free.
              <span>&bull;</span>
              <em className="date">Jan. 2017</em>
            </p>

            <ol>
              <li>Create A Subnet</li>
              <li>Payment Card Industry Data Security Standard PCI/DSS</li>
              <li>InfoSec Intro</li>
              <li>Web Penetration Testing</li>
            </ol>
            <div className="row certifications">
              <div className="three columns">
                <img src={Subnetcert} />
              </div>
              <div className="three columns">
                <img src={PCIcert} />
              </div>
              <div className="three columns">
                <img src={InfoSeccert} />
              </div>
            </div>
          </div>
        </div>
        <div className="row item">
          <div className="twelve columns">
            <h3><OutboundLink href="https://www.sololearn.com/Profile/860659">SoloLearn.com <FaArrowCircleLeft /></OutboundLink></h3>
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
            <h3><OutboundLink href="https://aws.amazon.com/certification/certification-prep/">AWS Certified Solutions Architect <FaArrowCircleLeft /></OutboundLink></h3>
            <p className="info">
              Self-prep for AWS Certified Solutions Architect - Associate Exam
              <span>&bull;</span>
              <em className="date">May 2016</em>
            </p>
            <p>The prep exams/tests prep-material are nothing like the actual exam!</p>
            <ol>
              <li>VPC</li>
              <li>EC2</li>
              <li>S3</li>
              <li>CloudFront</li>
              <li>Route53</li>
              <li>RDS</li>
              <li>ElastiCache</li>
              <li>SES</li>
              <li>Simple Queue Service</li>
              <li>EMR</li>
              <li>Elastic Transcoder</li>
              <li>API Gateway</li>
              <li>Lambda</li>
              <li>DynamoDB</li>
              <li>Elastic Container Service</li>
              <li>Elastic Beanstalk</li>
              <li>CloudFormation</li>
              <li>OpsWorks</li>
            </ol>
            <p>And more recently I'm learning more tools that weren't on that exam ...</p>
            <ol>
              <li>CodeBuild</li>
              <li>CodeCommit</li>
              <li>CodeDeploy</li>
              <li>CodePipeline</li>
              <li>CodeStar</li>
              <li>AWS X-Ray</li>
            </ol>
          </div>
        </div>
        <div className="row item">
          <div className="twelve columns">
            <h3><OutboundLink href="https://egghead.io/users/126924">EggHead.io <FaArrowCircleLeft /></OutboundLink></h3>
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
            <h3><OutboundLink href="https://teamtreehouse.com/alexgoretoy">TeamTreeHouse.com <FaArrowCircleLeft /></OutboundLink></h3>
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
            <h3><OutboundLink href="https://aws.amazon.com/certification/certification-prep/">Cloudera Certified Admin for Apache HADOOP <FaArrowCircleLeft /></OutboundLink></h3>
            <p className="info">
              Self-prep for Cloudera Certified Admin for Apache HADOOP - Administrator Exam
              <span>&bull;</span>
              <em className="date">Feb 2014</em>
            </p>
            
            <ol>
              <li>Cloudera</li>
              <li>HortonWorks</li>
            </ol>
          </div>
        </div>
        <div className="row item">
          <div className="twelve columns">
            <h3>Miscellaneous Sources</h3>
            <p className="info">
              Self-taught many languages, patterns, algorithms, frameworks, concepts, use cases, lifecycles, configurations, deployments, processes, etc.
              <span>&bull;</span>
              <em className="date">2004 - Current</em>
            </p>
            
            <ol>
              <li>Github & Bitbucket & Google Code</li>
              <li>Online Docs & Readmes</li>
              <li>Books & White Papers</li>
              <li>YouTube Videos & Playlists</li>
              <li>Coworkers & places of employment</li>
            </ol>
          </div>
        </div>
        <div className="row item">
          <div className="twelve columns">
            <h3><OutboundLink href="http://www.crisaga.org/closure.htm">Court Reporting Institute (CRI) <FaArrowCircleLeft /></OutboundLink></h3>
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

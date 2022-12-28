import React from "react";
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import { FaPlus, FaTag } from "react-icons/lib/fa";

import ABTranslator from "../assets/images/portfolio/AB-Translator.png";
import App4 from "../assets/images/portfolio/AppliedMerchant-HostGator.png";
import BarnIO from "../assets/images/portfolio/Barn.IO.png";
import BoostMood from "../assets/images/portfolio/BoostMood.png";
import Causecast from "../assets/images/portfolio/Causecast.png";
import CentralMotorAuto from "../assets/images/portfolio/centralmotorauto.com.jpg";
import Courtesyflush from "../assets/images/portfolio/Courtesyflush.png";
import DeveloperAccess from "../assets/images/portfolio/Developer_Access-screenshot.png";
import CDMRewards from "../assets/images/portfolio/cdm-rewards.jpg";
import EasyTurf from "../assets/images/portfolio/easyturf.png";
import FasterNotes from "../assets/images/portfolio/fasternotes.jpg";
import FOX from "../assets/images/portfolio/fox-dcg.png";
import FMM from "../assets/images/portfolio/fmm-after.jpg";
import HotPersonals from "../assets/images/portfolio/hotpersonals.ws.jpg";
import Jellpy from "../assets/images/portfolio/jellpy-screenshot.png";
import Llama from "../assets/images/portfolio/llama.com.png";
import MMX from "../assets/images/portfolio/mmx.png";
import OriginalGlo from "../assets/images/portfolio/originalglo.com.png";
import POCBuilder from "../assets/images/portfolio/Cisco-POCBuilder-Dashboard.png";
import ConfigParser from "../assets/images/portfolio/pyGTK-configparser-screenshot.jpg";
import Quizzes from "../assets/images/portfolio/quizzes-matching.jpg";
import RDNSpy from "../assets/images/portfolio/rdns-scraper_640.jpg";
import CSVFieldData from "../assets/images/portfolio/screenshot-pygtk-csvfieldsdata.jpg";
import Sindulge from "../assets/images/portfolio/sindulge-harvest.png";
import TimeTracker from "../assets/images/portfolio/TimeTracker.png";
import VlifeTech from "../assets/images/portfolio/vlifetech.png";
import VOC from "../assets/images/portfolio/VOC.png";

const Portfolio = () => (
  <section id="portfolio">
    <div className="row">
      <div className="twelve columns collapsed">
        <h1>Check Out Some of My Works.</h1>

        <div
          id="portfolio-wrapper"
          className="bgrid-quarters s-bgrid-thirds cf"
        >
          <div className="columns portfolio-item animated pulse">
            <div className="item-wrap">
              <OutboundLink href="http://originalglo.com" title="OriginalGlo by Vita - Mobile Express Tanning">
                <img alt="" src={OriginalGlo} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>OriginalGlo.com</h5>
                    <p>React.js, Bootstrap, Full-Stack Web Development, Design, Engineering Solutions, Business Marketing</p>
                  </div>
                </div>
                <div className="link-icon">
                  <FaPlus />
                </div>
              </OutboundLink>
            </div>
          </div>

          <div className="columns portfolio-item animated pulse">
            <div className="item-wrap">
              <OutboundLink href="https://www.casademontecristo.com/rewards/" title="CDM Rewards">
                <img alt="" src={CDMRewards} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>CasaDeMonteCristo Rewards</h5>
                    <p>Angular.js, Full-Stack Web Development, Engineering Solutions</p>
                  </div>
                </div>
                <div className="link-icon">
                  <FaPlus />
                </div>
              </OutboundLink>
            </div>
          </div>

          <div className="columns portfolio-item animated pulse">
            <div className="item-wrap">
              <OutboundLink href="http://fox.com" title="FOX Broadcasting">
                <img alt="" src={FOX} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>FOX.com</h5>
                    <p>React.js, Full-Stack Web Development, Engineering Solutions</p>
                  </div>
                </div>
                <div className="link-icon">
                  <FaPlus />
                </div>
              </OutboundLink>
            </div>
          </div>

          <div className="columns portfolio-item animated pulse">
            <div className="item-wrap">
              <OutboundLink href="http://app4.appliedmerchant.com" title="AppliedMerchant.com HostGator">
                <img alt="" src={App4} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>AppliedMerchant.com</h5>
                    <p>Django, Full-Stack Web Development, Engineering Solutions</p>
                  </div>
                </div>
                <div className="link-icon">
                  <FaPlus />
                </div>
              </OutboundLink>
            </div>
          </div>

          <div className="columns portfolio-item animated pulse">
            <div className="item-wrap">
              <OutboundLink href="#" title="Cisco POCBuilder">
                <img alt="" src={POCBuilder} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>Cisco POCBuilder</h5>
                    <p>Python, jQuery, Bootstrap, Docker</p>
                  </div>
                </div>
                <div className="link-icon">
                  <FaPlus />
                </div>
              </OutboundLink>
            </div>
          </div>

          <div className="columns portfolio-item animated pulse">
            <div className="item-wrap">
              <OutboundLink href="https://www.fasternotes.com/" title="FasterNotes">
                <img alt="" src={FasterNotes} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>FasterNotes</h5>
                    <p>WordPress, PHP, HTML5, CSS3/SASS</p>
                  </div>
                </div>
                <div className="link-icon">
                  <FaPlus />
                </div>
              </OutboundLink>
            </div>
          </div>

          <div className="columns portfolio-item animated pulse">
            <div className="item-wrap">
              <OutboundLink href="http://www.boostmood.com" title="BoostMood">
                <img alt="" src={BoostMood} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>BoostMood.com</h5>
                    <p>WordPress, Laravel</p>
                  </div>
                </div>
                <div className="link-icon">
                  <FaPlus />
                </div>
              </OutboundLink>
            </div>
          </div>

          <div className="columns portfolio-item animated pulse">
            <div className="item-wrap">
              <OutboundLink href="https://www.causecast.org" title="Causecast">
                <img alt="" src={Causecast} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>Causecast</h5>
                    <p>PHP, Ruby, BASH</p>
                  </div>
                </div>
                <div className="link-icon">
                  <FaPlus />
                </div>
              </OutboundLink>
            </div>
          </div>

          <div className="columns portfolio-item animated pulse">
            <div className="item-wrap">
              <OutboundLink href="http://mindsandmachines.com" title="">
                <img alt="" src={MMX} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>MindsAndMachines.com</h5>
                    <p>BootStrap, jQuery, PHP, Symfony, Full-Stack Web Development</p>
                  </div>
                </div>
                <div className="link-icon">
                  <FaPlus />
                </div>
              </OutboundLink>
            </div>
          </div>

          <div className="columns portfolio-item animated pulse">
            <div className="item-wrap">
              <OutboundLink href="https://villageofchange.com/" title="Village of Change">
                <img alt="" src={VOC} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>Village of Change - Crowdfunding for High School Seniors going to College</h5>
                    <p>Laravel5, WordPress, Zurb Foundation, AWS, Vagrant</p>
                  </div>
                </div>
                <div className="link-icon">
                  <FaPlus />
                </div>
              </OutboundLink>
            </div>
          </div>

          <div className="columns portfolio-item animated pulse">
            <div className="item-wrap">
              <OutboundLink href="#" title="Sindulge Contest">
                <img alt="" src={Sindulge} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>Sindulge Contest</h5>
                    <p>Bootstrap, Laravel4</p>
                  </div>
                </div>
                <div className="link-icon">
                  <FaPlus />
                </div>
              </OutboundLink>
            </div>
          </div>

          <div className="columns portfolio-item animated pulse">
            <div className="item-wrap">
              <OutboundLink href="#" title="">
                <img alt="" src={TimeTracker} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>TimeTracker for Linux</h5>
                    <p>Python2, pyGTK</p>
                  </div>
                </div>
                <div className="link-icon">
                  <FaPlus />
                </div>
              </OutboundLink>
            </div>
          </div>

          <div className="columns portfolio-item animated pulse">
            <div className="item-wrap">
              <OutboundLink href="#" title="Barn.IO">
                <img alt="" src={BarnIO} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>Barn.IO</h5>
                    <p>jQuery, Bootstrap, CakePHP, AWS API</p>
                  </div>
                </div>
                <div className="link-icon">
                  <FaPlus />
                </div>
              </OutboundLink>
            </div>
          </div>

          <div className="columns portfolio-item animated pulse">
            <div className="item-wrap">
              <OutboundLink href="http://www.llama.com" title="">
                <img alt="" src={Llama} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>Llama.com</h5>
                    <p>BootStrap, CakePHP, Full-Stack Web Development</p>
                  </div>
                </div>
                <div className="link-icon">
                  <FaPlus />
                </div>
              </OutboundLink>
            </div>
          </div>

          <div className="columns portfolio-item animated pulse">
            <div className="item-wrap">
              <OutboundLink href="#" title="AB Translator">
                <img alt="" src={ABTranslator} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>AB Translator</h5>
                    <p>jQuery, Bootstrap</p>
                  </div>
                </div>
                <div className="link-icon">
                  <FaPlus />
                </div>
              </OutboundLink>
            </div>
          </div>

          <div className="columns portfolio-item animated pulse">
            <div className="item-wrap">
              <OutboundLink href="https://www.easyturf.com/" title="EasyTurf">
                <img alt="" src={EasyTurf} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>EasyTurf.com</h5>
                    <p>PHP, HTML5, jQuery</p>
                  </div>
                </div>
                <div className="link-icon">
                  <FaPlus />
                </div>
              </OutboundLink>
            </div>
          </div>

          <div className="columns portfolio-item animated pulse">
            <div className="item-wrap">
              <OutboundLink href="#" title="Quizzes Interface">
                <img alt="" src={Quizzes} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>Quizzes Interface</h5>
                    <p>Bring wireframes to life with jQuery</p>
                  </div>
                </div>
                <div className="link-icon">
                  <FaPlus />
                </div>
              </OutboundLink>
            </div>
          </div>

          <div className="columns portfolio-item animated pulse">
            <div className="item-wrap">
              <OutboundLink href="#" title="">
                <img alt="" src={VlifeTech} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>vLifeTech</h5>
                    <p>CakePHP, jQuery, Full-Stack Web Development</p>
                  </div>
                </div>
                <div className="link-icon">
                  <FaPlus />
                </div>
              </OutboundLink>
            </div>
          </div>

          

          <div className="columns portfolio-item animated pulse">
            <div className="item-wrap">
              <OutboundLink href="https://github.com/FlatEarthTruther/rdns.py" title="Reverse DNS Console client">
                <img alt="" src={RDNSpy} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>RDNS.py</h5>
                    <p>Python2</p>
                  </div>
                </div>
                <div className="link-icon">
                  <FaPlus />
                </div>
              </OutboundLink>
            </div>
          </div>

          <div className="columns portfolio-item animated pulse">
            <div className="item-wrap">
              <OutboundLink href="https://github.com/FlatEarthTruther/pygtk-csvfieldsdata" title="PyGTK CSV Fields Data">
                <img alt="" src={CSVFieldData} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>CSVFieldData</h5>
                    <p>Python2, pyGTK</p>
                  </div>
                </div>
                <div className="link-icon">
                  <FaPlus />
                </div>
              </OutboundLink>
            </div>
          </div>
          
          <div className="columns portfolio-item animated pulse">
            <div className="item-wrap">
              <OutboundLink href="https://github.com/FlatEarthTruther/pygtk-configparser" title="PyGTK ConfigParser">
                <img alt="" src={ConfigParser} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>PyGTK ConfigParser</h5>
                    <p>Python2, pyGTK</p>
                  </div>
                </div>
                <div className="link-icon">
                  <FaPlus />
                </div>
              </OutboundLink>
            </div>
          </div>

          <div className="columns portfolio-item animated pulse">
            <div className="item-wrap">
              <OutboundLink href="https://launchpad.net/~a1g/+archive/ubuntu/courtesyflush" title="CourtesyFlush">
                <img alt="" src={Courtesyflush} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>CourtesyFlush</h5>
                    <p>Python2, GTK</p>
                  </div>
                </div>
                <div className="link-icon">
                  <FaPlus />
                </div>
              </OutboundLink>
            </div>
          </div>

          <div className="columns portfolio-item animated pulse">
            <div className="item-wrap">
              <OutboundLink href="https://github.com/FlatEarthTruther/developer_access" title="Developer Access">
                <img alt="" src={DeveloperAccess} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>Developer Access</h5>
                    <p>PHP5, HTML</p>
                  </div>
                </div>
                <div className="link-icon">
                  <FaPlus />
                </div>
              </OutboundLink>
            </div>
          </div>

          <div className="columns portfolio-item animated pulse">
            <div className="item-wrap">
              <OutboundLink href="#" title="">
                <img alt="" src={Jellpy} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>JellPy</h5>
                    <p>Python2, pyGTK</p>
                  </div>
                </div>
                <div className="link-icon">
                  <FaPlus />
                </div>
              </OutboundLink>
            </div>
          </div>

          <div className="columns portfolio-item animated pulse">
            <div className="item-wrap">
              <OutboundLink href="#" title="">
                <img alt="" src={FMM} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>FMM</h5>
                    <p>PHP5, HTML4, CSS2, XCart</p>
                  </div>
                </div>
                <div className="link-icon">
                  <FaPlus />
                </div>
              </OutboundLink>
            </div>
          </div>

          <div className="columns portfolio-item animated pulse">
            <div className="item-wrap">
              <OutboundLink href="#" title="">
                <img alt="" src={HotPersonals} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>HotPersonals.WS</h5>
                    <p>HTML, CSS, MooTools, CodeIgniter</p>
                  </div>
                </div>
                <div className="link-icon">
                  <FaPlus />
                </div>
              </OutboundLink>
            </div>
          </div>

          <div className="columns portfolio-item animated pulse">
            <div className="item-wrap">
              <OutboundLink href="http://www.centralmotorauto.com" title="Central Motor Auto">
                <img alt="" src={CentralMotorAuto} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>CentralMotorAuto.com</h5>
                    <p>jQuery, HTML, CSS, CodeIgniter</p>
                  </div>
                </div>
                <div className="link-icon">
                  <FaPlus />
                </div>
              </OutboundLink>
            </div>
          </div>

        </div>
      </div>

      {/* <div id="modal-01" className="popup-modal mfp-hide">
        <img
          className="scale-with-grid"
          src="images/portfolio/modals/m-coffee.jpg"
          alt=""
        />

        <div className="description-box">
          <h4>Coffee Cup</h4>
          <p>
            Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
            lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
            sem nibh id elit.
          </p>
          <span className="categories">
            <FaTag /> Branding, Webdesign
          </span>
        </div>

        <div className="link-box">
          <a href="http://www.behance.net">Details</a>
          <a className="popup-modal-dismiss">Close</a>
        </div>
      </div>

      <div id="modal-02" className="popup-modal mfp-hide">
        <img
          className="scale-with-grid"
          src="images/portfolio/modals/m-console.jpg"
          alt=""
        />

        <div className="description-box">
          <h4>Console</h4>
          <p>
            Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
            lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
            sem nibh id elit.
          </p>
          <span className="categories">
            <FaTag />Branding, Web Development
          </span>
        </div>

        <div className="link-box">
          <a href="http://www.behance.net">Details</a>
          <a className="popup-modal-dismiss">Close</a>
        </div>
      </div>

      <div id="modal-03" className="popup-modal mfp-hide">
        <img
          className="scale-with-grid"
          src="images/portfolio/modals/m-judah.jpg"
          alt=""
        />

        <div className="description-box">
          <h4>Judah</h4>
          <p>
            Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
            lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
            sem nibh id elit.
          </p>
          <span className="categories">
            <FaTag />Branding
          </span>
        </div>

        <div className="link-box">
          <a href="http://www.behance.net">Details</a>
          <a className="popup-modal-dismiss">Close</a>
        </div>
      </div>

      <div id="modal-04" className="popup-modal mfp-hide">
        <img
          className="scale-with-grid"
          src="images/portfolio/modals/m-intothelight.jpg"
          alt=""
        />

        <div className="description-box">
          <h4>Into the Light</h4>
          <p>
            Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
            lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
            sem nibh id elit.
          </p>
          <span className="categories">
            <FaTag />Photography
          </span>
        </div>

        <div className="link-box">
          <a href="http://www.behance.net">Details</a>
          <a className="popup-modal-dismiss">Close</a>
        </div>
      </div>

      <div id="modal-05" className="popup-modal mfp-hide">
        <img
          className="scale-with-grid"
          src="images/portfolio/modals/m-farmerboy.jpg"
          alt=""
        />

        <div className="description-box">
          <h4>Farmer Boy</h4>
          <p>
            Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
            lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
            sem nibh id elit.
          </p>
          <span className="categories">
            <FaTag />Branding, Webdesign
          </span>
        </div>

        <div className="link-box">
          <a href="http://www.behance.net">Details</a>
          <a className="popup-modal-dismiss">Close</a>
        </div>
      </div>

      <div id="modal-06" className="popup-modal mfp-hide">
        <img
          className="scale-with-grid"
          src="images/portfolio/modals/m-girl.jpg"
          alt=""
        />

        <div className="description-box">
          <h4>Girl</h4>
          <p>
            Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
            lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
            sem nibh id elit.
          </p>
          <span className="categories">
            <FaTag />Photography
          </span>
        </div>

        <div className="link-box">
          <a href="http://www.behance.net">Details</a>
          <a className="popup-modal-dismiss">Close</a>
        </div>
      </div>

      <div id="modal-07" className="popup-modal mfp-hide">
        <img
          className="scale-with-grid"
          src="images/portfolio/modals/m-origami.jpg"
          alt=""
        />

        <div className="description-box">
          <h4>Origami</h4>
          <p>
            Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
            lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
            sem nibh id elit.
          </p>
          <span className="categories">
            <FaTag />Branding, Illustration
          </span>
        </div>

        <div className="link-box">
          <a href="http://www.behance.net">Details</a>
          <a className="popup-modal-dismiss">Close</a>
        </div>
      </div>

      <div id="modal-08" className="popup-modal mfp-hide">
        <img
          className="scale-with-grid"
          src="images/portfolio/modals/m-retrocam.jpg"
          alt=""
        />

        <div className="description-box">
          <h4>Retrocam</h4>
          <p>
            Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
            lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
            sem nibh id elit.
          </p>
          <span className="categories">
            <i className="fa fa-tag" />Webdesign, Photography
          </span>
        </div>

        <div className="link-box">
          <a href="http://www.behance.net">Details</a>
          <a className="popup-modal-dismiss">Close</a>
        </div>
      </div> */}
    </div>
  </section>
);

export default Portfolio;

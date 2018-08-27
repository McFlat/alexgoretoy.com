import React from "react";
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import Slider from "react-slick";
// import { Timeline } from 'react-twitter-widgets'
import YouTube from "react-youtube";

const opts={
  width: '100%',
  height: '100%'
}
const _onReady = (event) => event.target.pauseVideo()

const settings = {
  // dots: true,
  infinite: true,
  autoplay: false,
  speed: 1500,
  slideToShow: 1,
  slideToScroll: 1,
  swipeToSlide: true
};

import Jesal from "../assets/documents/CalistoLabs_Letter_Of_Recommendation.pdf";
import Theresa from "../assets/documents/MCM_Letter_of_Recommendation.pdf";
import Sean from "../assets/documents/Sean-Hennessy.png";
import Diane from "../assets/documents/Diane-Krehbiel.png";
import Felicia from "../assets/documents/Felicia-McCrossin.png";

// <Timeline
//   dataSource={{
//     sourceType: 'profile',
//     screenName: 'AlexGoretoy'
//   }}
//   options={{
//     username: 'AlexGoretoy',
//     height: '1800'
//   }}
//   onLoad={() => console.log('Timeline is loaded!')}
// />

const Testimonials = () => (
  <section id="recommendations">
    <div className="text-container">
      <div className="row">
        <div className="six columns">
          <h1 className="animated slideInDown">This guy believes the earth is flat!</h1>
          <div className="row item">
            <div className="six columns video">
              <YouTube
                videoId={'JEN9NW6qjCw'}
                opts={opts}
                onReady={_onReady}
              />
            </div>
            <div className="six columns video">
              <YouTube
                videoId={'PZcrSyMM1ZM'}
                opts={opts}
                onReady={_onReady}
              />
            </div>
          </div>
          <div className="row item">
            <blockquote>
              <p>
<OutboundLink href='https://www.youtube.com/watch?v=JEN9NW6qjCw'>Government Documents Admit Flat Earth</OutboundLink>
<br />
<OutboundLink href='https://www.youtube.com/watch?v=PZcrSyMM1ZM'>Do official government documents confirm Flat Earth and the Firmament?</OutboundLink>

<br />

Here are some of the military & NASA documents that are used in the videos above “Government Documents Admit Flat Earth:”
<br />
Russia 1948
Shape of the earth unknown..
<br />
https://www.cia.gov/library/readingroom/docs/CIA-RDP80-00809A000600231031-1.pdf
<br />
Russian Light Study
“Brightness of the firmament”
Flat earth :
<br />
https://drive.google.com/file/d/1KX7_0tlTAzFEWJ1CWOXQ_K2JnUgbfzb8/view
<br />
Propagation of Electromagnetic Fields Over Flat Earth
<br />
http://www.arl.army.mil/arlreports/2001/ARL-TR-2352.pdf
<br />
page 9: based upon the signal having a single bounce on a flat Earth
<br />
http://www.arl.army.mil/arlreports/2009/ARL-TR-4998.pdf
<br />
page 1:
Trajectory of Spinning Projectiles: 
<br />
“These equations assume a flat Earth.”
<br />
http://www.arl.army.mil/arlreports/2010/ARL-TR-5118.pdf
<br />
page 2:
“These equations assume a flat Earth..”
<br />
http://www.arl.army.mil/arlreports/2011/ARL-TR-5810.pdf
<br />
page 216:
"assuming a flat Earth"
<br />
http://tycho.usno.navy.mil/ptti/2007papers/paper21.pdf
<br />
Page 1:
“...so that a flat-earth approximation provides the best estimate.”
<br />
http://www.arl.army.mil/arlreports/2001/ARL-TN-175.pdf
<br />
Page 39:
model works over a flat earth
http://www.arl.army.mil/arlreports/2003/ARL-TR-2696.pdf
<br />
page 1:
transmission loss over flat earth
http://www.arl.army.mil/arlreports/2000/ARL-TR-2156.pdf
<br />
page 9:
“...input to a flat earth”
<br />
http://www.arl.army.mil/arlreports/2003/ARL-MR-563.pdf
<br />
page 3:
“The first is the Earth-fixed coordinate system, which is fixed to the Earth with a flat Earth assumption.”
<br />
http://www.arl.army.mil/arlreports/2010/ARL-CR-650.pdf
<br />
page 1:
flat earth approximation provides the best estimate
http://www.arl.army.mil/arlreports/2002/ARL-TR-2683.pdf
<br />
page 32:
This model works well over a flat-earth
http://www.arl.army.mil/arlreports/2000/ARL-TR-1812.pdf
<br />
page 168:
equations of flat-earth trigonometry.
<br />
http://www.irig106.org/docs/106-17/106-17_Telemetry_Standards.pdf
<br />

page 8:
The Earth is flat and nonrotating.
<br />
http://www.navair.navy.mil/nawcwd/command/Inplace.aspx/LoadFile/531
<br />
General Equations of Motion for Damaged Asymmetric Aircraft
<br />
Page 1: “...equations of motions must properly reflect the underlying physics.”
<br />
page 2:
"In this paper, the rigid body equations of motion over a flat
non-rotating earth are developed...”
<br />
https://ntrs.nasa.gov/archive/nasa/casi.ntrs.nasa.gov/20070030307.pdf
<br />
Approximate Optimal Guidance for the Advanced Launch System 
<br />
On page one this document does mention a spherical rotating earth but then states that “...these schemes” (based on  a spherical rotating earth) 1) “...are difficult to prove” and 2) “...not suggested to be used as a basis for an online real-time guidance law.”
<br />
Page 32 goes on to say:
<br />
"Lastly, the equations of motion for the zeroth-order problem of flight in a vacuum over a flat Earth are presented."
<br />
https://ntrs.nasa.gov/archive/nasa/casi.ntrs.nasa.gov/19940020279.pdf
<br />
SR-71 
<br />
Page 8: “...nonrotating Earth...”
<br />
https://www.nasa.gov/centers/dryden/pdf/88507main_H-2179.pdf
<br />
page 14:
(2) A flat, nonrotating earth
<br />
https://ntrs.nasa.gov/archive/nasa/casi.ntrs.nasa.gov/19710018599.pdf
<br />
page 8:
the missile position in space is computed relative to a flat nonrotating earth.
<br />
https://ntrs.nasa.gov/archive/nasa/casi.ntrs.nasa.gov/20040008097.pdf
<br />


page 108:
aircraft flying over flat, nonrotating earth
<br />
page:12
"aircraft flying in a stationary atmosphere over flat nonrotating earth"
<br />
https://www.nasa.gov/centers/dryden/pdf/88072main_H-1259.pdf
<br />

NASA Technical Paper 2835
<br />
Page 1 Summary:
<br />
Flat nonrotating earth 
<br />
page 126:
"The nonlinear equations of motion used are six-degree-of-freedom equations
sith stationary atmosphere and flat, nonrotating earth"
<br />
https://ntrs.nasa.gov/archive/nasa/casi.ntrs.nasa.gov/19890007066.pdf
<br />
Determination of Angles of Attack and Sideslip from Radar Data and a Roll Stabilized Platform
<br />
NASA 
March 1972 
<br />
page 2:
"The method is limited, however, to application where a flat, nonrotating earth"
<br />
https://ntrs.nasa.gov/archive/nasa/casi.ntrs.nasa.gov/19720012071.pdf
<br />
An Aircraft Model for the AIAA Controls Design Challenge
<br />
NASA
1991
<br />
page 11:
"The nonlinear equations of motion used in this model are general six-degree-of-freedom equations representing the flight dynamics of a rigid aircraft flying in a stationary atmosphere over a flat nonrotating earth"
<br />
https://www.nasa.gov/centers/dryden/pdf/88248main_H-1777.pdf
<br />
Investigation of Aircraft Landing in Variable Wind Fields
<br />
NASA 1973
<br />
page 14 pdf or 6 on actual report:
<br />
a) The earth is flat and non-rotating.
<br />
https://ntrs.nasa.gov/archive/nasa/casi.ntrs.nasa.gov/19790005472.pdf
<br />

A Mathematical Model of the CH-53 Helicopter
<br />
NASA  
<br />
page 17:
<br />
“The helicopter equations of motion are given in body axes with rerpect to
a flat, nonrotating Earth.”
<br />
https://ntrs.nasa.gov/archive/nasa/casi.ntrs.nasa.gov/19810003557.pdf
<br />
Atmospheric Oscillations
<br />
Georgia Tech April 1965
<br />
Prepared for NASA
<br />
page 13:
A model frequently used is that of a flat, nonrotating earth.
<br />
https://ntrs.nasa.gov/archive/nasa/casi.ntrs.nasa.gov/19650015408.pdf
<br />

page 19:
These equations assume a rigid vehicle and a flat, nonrotating Earth.
https://www.nasa.gov/centers/dryden/pdf/88733main_H-2465.pdf
<br />

Flight Testing a VSTOL Aircraft
<br />
NASA 1988
<br />
page 9 pdf or 4-5 on actual doc:
<br />
“For aircraft problems, the state and measurement models together represent the kinematics of a rigid body for describing motion over a flat, nonrotating Earth...”
<br />
https://ntrs.nasa.gov/archive/nasa/casi.ntrs.nasa.gov/19880014378.pdf
<br />
Time to Climb
<br />
page2:
“In our minimum time-to-climb problem, the aircraft is modeled as a point mass and the flight trajectory is strictly
confined in a vertical plane on a non-rotating, flat earth.
<br />
https://ntrs.nasa.gov/archive/nasa/casi.ntrs.nasa.gov/20060053337.pdf
<br />
Smoke on that Mr. Smarty pants!
</p></blockquote>
          </div>
        </div>
        <div className="six columns">
          <h1 className="animated slideInDown">Work Recommendations</h1>
          <ul className="animated fadeInUpBig">
            <Slider {...settings}>
              <li>
                <blockquote>
                  <p>
                    I am writing to recommend Alex Goretoy. As a Web Technical Lead, I had the privilege of working with Alex for more
than one year at MC Management, Inc. Serving in this capacity allowed me to work very closely with Alex, so I fully
understand his capabilities.
Alex's extensive experience with various technologies proved to be very helpful in our environment. Although our
shop is primarily an older version of NodeJS Express with MongoDB, we have several platforms that need to be
supported simultaneously requiring both noSQL and relational database skills (MS SQL and AS400), knowledge of
short-hand version of Javascript called CoffeeScript, as well as knowledge of AngularJS with ES6. Alex
demonstrated incredible adaptability and a "can-do" attitude, no matter what the mix of technology for any given
assignment. His wealth of experience with other scripting languages such as PHP, Python, and various popular
frameworks allowed him to be extremely knowledgeable and flexible when it came to tackling assignments.
Alex also provided many helpful suggestions and solutions to the environment so that we could become more
effective and efficient in our day-to-day DevOps tasks using Jenkins and AWS. He provided helpful testing
approaches, tools, and suggestions on how we could do things better. He tackled critical and complex assignments
involving Redis and SimpleCache with professionalism and much success.
Overall, I would highly recommend Alex and believe he would be a great addition to any team. If you have any
questions, please feel free to contact me at the number below.
                  </p>
                  <cite>Theresa Temple - MC Management, Inc. <OutboundLink href={Theresa}>Letter of recommendation</OutboundLink></cite>
                </blockquote>
              </li>
              <li>
                <blockquote>
                  <p>
                    Alex is a highly knowledgeable and creative systems and application engineer. His passion for applying leading edge technology to solve business problems is demonstrated in his ability to design and build flexible, forward looking applications which respond not only to the immediate project specifications but also position the application/framework for future use cases best in class design patterns and upcoming technology trends.
                  </p>
                  <cite>Sean Hennessy - Stratus Technology Services, LLC <OutboundLink href={Sean}>Letter of recommendation</OutboundLink></cite>
                </blockquote>
              </li>
              <li>
                <blockquote>
                  <p>
                    DKKD Staffing rarely employs remote workers, but Alex is worth it. EXCELLENT job for our client. He's very proactive and researches what he doesn't know. Alex has been working as a Developer since 2003 building web services. He is a lead Architect working in Backend, Frontend UI/UX Development and DevOps for Web based and Mobile applications. Very strong experience with Python and Django and has experience working with Java. Thanks for doing a great job for us/our client Alex.
                  </p>
                  <cite>Diane "Di" Krehbiel - DKKD Staffing<OutboundLink href={Diane}>Letter of recommendation</OutboundLink></cite>
                </blockquote>
              </li>
              <li>
                <blockquote>
                  <p>
                    I would like to recommend Alex Goretoy as a candidate for a position with your
organization. In his role as a PHP Developer, Alex provided consultation services for
our company from 5/31/2012 - 7/20/2012.
Alex did an excellent job in this position and was an asset to our organization during
his tenure. He has excellent written and verbal communication skills, is extremely
organized, can work independently, and is able to effectively multi-task to ensure that all
tasks are completed in a timely manner.
Alex also has good problem solving skills, he was always able to offer new ideas to get
things done in a more efficient manner. He had an excellent rapport with his co-workers,
managers and clients. He would be an asset to any employer and I recommend him for
any endeavor he chooses to pursue.
                  </p>
                  <cite>Jesal Gadhia - Calisto Labs, LLC <OutboundLink href={Jesal}>Letter of recommendation</OutboundLink></cite>
                </blockquote>
              </li>
              <li>
                <blockquote>
                  <p>
                    I immediately recognized Alex Goretoy's phenomenal programming proficiency, vast skill set versatility, and unparalleled work ethic within the first few wks after I hired him. Though he excels at complex back-end programming and information architecting, he is also adept at front-end programming and UI/UX design. He worked tirelessly on each project with passion and acuity, working from home extending far beyond work hours, without compensation. Each day, he surprised me with the progress he was able to make, in addition to introducing innovative new ideas he devised for the product at hand. I cannot say that I have met a more ambitious, zealous, innovative, versatile, supremely skilled programmer as Mr. Goretoy. He was also an excellent collaborator and team player -- polite, punctual, reliable, open to feedback, tactful with feedback of his own and very respectful to me as his manager. He was an invaluable asset to our team and any company in need of superior IT talent would be fortunate to have him.
                  </p>
                  <cite>Felicia McCrossin - Cyber2Media, Inc.<OutboundLink href={Felicia}>Letter of recommendation</OutboundLink></cite>
                </blockquote>
              </li>
            </Slider>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default Testimonials;

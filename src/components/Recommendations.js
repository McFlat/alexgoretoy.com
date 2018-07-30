import React from "react";
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import Slider from "react-slick";

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

const Testimonials = () => (
  <section id="recommendations">
    <div className="text-container">
      <div className="row">
        
        <div className="twelve columns">
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

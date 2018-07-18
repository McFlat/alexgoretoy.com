import React from "react";
import Slider from "react-slick";

const settings = {
  // dots: true,
  infinite: true,
  autoplay: true,
  speed: 1500,
  slideToShow: 1,
  slideToScroll: 1,
  swipeToSlide: true
};

import Jesal from "../assets/documents/CalistoLabs_Letter_Of_Recommendation.pdf";
import Theresa from "../assets/documents/CalistoLabs_Letter_Of_Recommendation.pdf";
import Sean from "../assets/documents/CalistoLabs_Letter_Of_Recommendation.pdf";

const Testimonials = () => (
  <section id="recommendations">
    <div className="text-container">
      <div className="row">
        <div className="two columns header-col" />
        <div className="ten columns">
          <h1 className="animated slideInDown">Work Recommendations</h1>
          <ul className="animated fadeInUpBig">
            <Slider {...settings}>
              <li>
                <blockquote>
                  <p>
                    Alex also has good problem solving skills, he was always able to offer new ideas to get things done in a more efficient manner. He had an excellent rapport with his co-workers, managers and clients. He would be an asset to any employer and I recommend him for any endeavor he chooses to pursue.
                  </p>
                  <cite>Jesal Gadhia - Calisto Labs, LLC <a href={Jesal}>Letter of recommendation</a></cite>
                </blockquote>
              </li>
              <li>
                <blockquote>
                  <p>
                    Alex's extensive experience with various technologies proved to be very helpful in our environment. Although our shop is primarily an older version of Node.JS Express with MongoDB, we have several platforms that need to be supported simultaneously requiring both noSQL and relational database skills (MS SQL and AS400), knowledge of short-hand version of Javascript called CoffeeScript, as well as knowledge of AngularJS with ES6. Alex demonstrated incredible adaptability and a "can-do" attitude, no matter what the mix of technology for any given assignment. His wealth of experience with other scripting languages such as PHP, Python, and various popular frameworks allowed him to be extremely knowledgeable and flexible when it came to tackling assignments.
                  </p>
                  <cite>Theresa Temple - MC Management, Inc. <a href={Theresa}>Letter of recommendation</a></cite>
                </blockquote>
              </li>
              <li>
                <blockquote>
                  <p>
                    Alex is a highly knowledgeable and creative systems and application engineer. His passion for applying leading edge technology to solve business problems is demonstrated in his ability to design and build flexible, forward looking applications which respond not only to the immediate project specifications but also position the application/framework for future use cases best in class design patterns and upcoming technology trends.
                  </p>
                  <cite>Sean Hennessy - Stratus Technology Services, LLC <a href={Sean}>Letter of recommendation</a></cite>
                </blockquote>
              </li>
            </Slider>
          </ul>
        </div>
        {/* <div className="ten columns flex-container">
          <div className="flexslider">
            <ul className="slides">
              <li>
                <blockquote>
                  <p>
                    Your work is going to fill a large part of your life, and
                    the only way to be truly satisfied is to do what you believe
                    is great work. And the only way to do great work is to love
                    what you do. If you haven't found it yet, keep looking.
                    Don't settle. As with all matters of the heart, you'll know
                    when you find it.
                  </p>
                  <cite>Steve Jobs</cite>
                </blockquote>
              </li>

              <li>
                <blockquote>
                  <p>
                    This is Photoshop's version of Lorem Ipsum. Proin gravida
                    nibh vel velit auctor aliquet. Aenean sollicitudin, lorem
                    quis bibendum auctor, nisi elit consequat ipsum, nec
                    sagittis sem nibh id elit. Duis sed odio sit amet nibh
                    vulputate cursus a sit amet mauris.
                  </p>
                  <cite>Mr. Adobe</cite>
                </blockquote>
              </li>
            </ul>
          </div>
        </div> */}
      </div>
    </div>
  </section>
);

export default Testimonials;

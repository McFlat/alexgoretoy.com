import React from "react";

const Work = () => (
  <section id="experience">
    <div className="row experience">
      <div className="three columns header-col">
        <h1 className="animated slideInLeft">
          <span>Work Experience</span>
        </h1>
      </div>

      <div className="nine columns main-col">
        <div className="row item">
          <div className="twelve columns">
            <h3>MC Management, Inc. - Apex Systems</h3>
            <p className="info">
              Node.js/CoffeeScript Developer
              <span>&bull;</span>
              <em className="date">Apr. 2017 - Mar. 2018</em>
            </p>

            <p>
              ●   Work on a distributed team as a remote developer on BackEnd Team, fixing existing functionality written in coffeescript connecting to AS400, MS SQL and MongoDB
              ●   Refactored Coldfusion scripts and fixed bugs in legacy code
              ●   Rewrote coldfusion scripts in node.js coffeescript
              ●   Migrated data and created transformers for syncing data between merchants and order databases
              ●   Created and added new pages and routes utilizing existing design templates styles
              ●   Configured and Secured servers by installing newer versions of software
              ●   Implemented featured provided by third party development teams and worked with other development teams to finish requested features
              ●   Worked on various problems that range from caching to order transfer solutions
              ●   Fixed shopping cart and made shopping experience more enjoyable
              ●   Worked on zendesk apps for customer support techs for finding order information
              ●   Used tools like jenkins, screenhero, basecamp and github
              ●   Participated in meetings with many third-party partners and teams to provide solutions for requested features, communicated back and forth with third-party teams as needed
              ●   Lead team members in planning for building out app infrastructure and configuring tools
              ●   Provided support to call-center, fixed underlying system bugs and maintained end-user satisfaction by fixing problems in customer facing solutions
              ●   Created deployment scripts, project and documentation management bash scripts
              ●   Created re-usable library for communicating with third-party POS provider
              ●   Created ES6 angular2 node.js app, integrates with POS system for redeemable voucher
              ●   Created customer facing documentation using python sphinx utilizing ReadTheDocs theme and administrator documentation using markdown for above application
              ●   Fixed bugs in coffeescript apps, connect partner API functionality, terminal cli/web apps

            </p>
          </div>
        </div>

        <div className="row item">
          <div className="twelve columns">
            <h3>FOX Broadcasting - XTeam</h3>
            <p className="info">
              Node.js/React.js Full-Stack Developer
              <span>&bull;</span>
              <em className="date">Dec. 2016 - Mar. 2017</em>
            </p>

            <p>
              ●      Work on a distributed team as remote developer on the API Team, building apps with JavaScript/ES6
              ●      NPM/Node.js, ElasticSearch, ElasticMQ, Redis, Mongo, React/Redux, Docker, Nginx, AWS/S3, Postman, Jet, Mocha; MEAN Stack
              ●      Scaling apps beyond 500 thousand requests per second
              ●      Scraping data with Python connected to ElasticSearch server and building application around collected indexed data
              ●      Resolving issues in the form of tickets in JIRA, creating tickets in JIRA for identified issues
              ●      Communicating with team via Slack, attending meetings over Cisco WebEx and using TeamViewer or Google Hangouts, Screenshots and keeping a daily journal
              ●      Fixing bugs in node app codebase, writing unit tests, updating in the documentation

            </p>
          </div>
        </div>

        <div className="row item">
          <div className="twelve columns">
            <h3>Applied Merchant - DKKD Staffing</h3>
            <p className="info">
              
              <span>&bull;</span>
              <em className="date">May 2016 - Current</em>
            </p>

            <p>
              ●      Created local development environment with vagrant in a private github repo
              ●      Communicated with team using JIRA, phone, skype and email.
              ●      Worked with a resources which were provided by a third party web development firm
              ●      Made site responsive for mobile device visitors, fixed issues with style, layout and design
              ●      Transitioned legacy application database from sqlite3 to MySQL and added django-fernet-fields to secure data stored in the database
              ●      Finished development on the app, it is now running on Amazon AWS
              ●      Found hackers on legacy app server, de-compiled their software locally, found the IRC server/channels in question and tracked down the guy to his IP address
              ●      Deployed the app on a new server with nginx/uWSGI and decommissioned a legacy app
              ●      Fixed issues with the application user interface and user experience, added analytics
              ●      Created CloudFormation single instance stack for the app
              ●      Re-wrote app, created a new brand for the app, created the app to be frontend centric in React, Redux, Redux-Form, WebPack and using Python Django Rest Framework as the backend API and NPM/Node.js; MEAN Stack
              ●      Created a multi-tiered CloudFormation stack
              ●      Applied Hashicorp app delivery suite of tools to deploy and devt process; otto, nomad, consul, terraform, vault, serf, packer
              ●      Launched 3 partner sites that use the main application with some minor business logic changes in the backend or simply logos and contact info differences from the main site

            </p>
          </div>
        </div>

        <div className="row item">
          <div className="twelve columns">
            <h3>Cisco Systems, Inc. - Stratus Technology Services, LLC</h3>
            <p className="info">
              
              <span>&bull;</span>
              <em className="date">Nov. 2015 - Apr. 2016</em>
            </p>

            <p>
              ●   Build an app for Cisco Systems, Inc with Tornado and jQuery, NPM/Node.js, Bower
              ●   Created a dynamic page generator command-line tool
              ●   Created a web user interface to the command-line page generator
              ●   Created a deployment process with docker, shell scripts and make
              ●   Created a development environment with vagrant that re-uses the docker shell scripts
              ●   Managed a team of developers and managers who managed me
              ●   Came up with tons of solutions for the application, system and processes of doing admin tasks and creating generated pages
              ●   Created a database migration system which imports files into the database from the filesystem
              ●   Created a import/export system so admins can transition to other docker containers much easier and so to have a way to back things up in the system
              ●   Created frontend user experience and user Interfaces and for processes

            </p>
          </div>
        </div>


      </div>
    </div>
  </section>
);

export default Work;

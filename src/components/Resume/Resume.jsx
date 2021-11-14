import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./cssResume.css";
import $ from "jquery";

const Exploratory = () => {
  useEffect(() => {
    $(".navbar-fading-effect").css("background", "rgba(4, 1, 130, 1)");

    window.onscroll = () => {
      var scrollStatus = $(window).scrollTop();

      if (scrollStatus > 115) {
        $(".navbar-fading-effect").css("background", "rgba(4, 1, 130, .6)"); // changes to...
        $(".navbar-fading-effect").css("transition", ".7s");
      } else {
        $(".navbar-fading-effect").css("background", "rgba(4, 1, 130, 1)");
      }
    };
  });

  return (
    <React.Fragment>
      <div id="resume-container">
        <Container>
          <div id="resume" style={{ paddingTop: "3%" }}>
            <img
              src="https://rmrdetailing.com/wp-content/uploads/2021/10/Alfredo_Pic.png"
              alt="Alfredo Pabon"
              className="professional-picture"
            />
            <h1>Alfredo R. Pabón</h1>

            {/* ////////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <section
              className="contact-information"
              style={{
                background: "rgba(173, 216, 230, .5)",
                padding: "1% 0 .01% 1%",
                borderRadius: "5px",
              }}
            >
              <div style={{ display: "flex", marginBottom: "1.5%" }}>
                <div style={{ minWidth: "52%" }}>
                  <div style={{ display: "flex" }}>
                    <a
                      href="https://rmrdetailing.com/wp-content/uploads/2021/10/AlfredoDeveloper-Resume.pdf"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <i
                        className="fas fa-file-pdf"
                        style={{
                          fontSize: "160%",
                          marginLeft: ".20%",
                          marginRight: "3.5%",
                          color: "#464646",
                        }}
                      />{" "}
                    </a>
                    &nbsp; &nbsp;
                    <a
                      href="https://rmrdetailing.com/wp-content/uploads/2021/10/AlfredoDeveloper-Resume.pdf"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <h2
                        className="text-in-contact-info"
                        style={{ fontSize: "110%", marginTop: "1%" }}
                      >
                        PDF version
                      </h2>
                    </a>
                  </div>
                </div>

                <div style={{ maxWidth: "52%" }}>
                  <div style={{ display: "flex" }}>
                    <a
                      href="mailto:alfredrafael@gmail.com?Subject=Regarding%20your%20web-development%20services"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <i
                        className="fas fa-envelope"
                        style={{
                          fontSize: "150%",
                          color: "#464646",
                          marginRight: "3%",
                        }}
                      />{" "}
                    </a>
                    &nbsp; &nbsp;
                    <a
                      href="mailto:alfredrafael@gmail.com?Subject=Regarding%20your%20web-development%20services"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <h2
                        style={{ fontSize: "110%", marginTop: "1%" }}
                        className="text-in-contact-info"
                      >
                        alfredrafael@gmail.com
                      </h2>
                    </a>
                  </div>
                </div>
              </div>

              <div style={{ display: "flex", marginBottom: "1.5%" }}>
                <div style={{ minWidth: "52%" }}>
                  <div style={{ display: "flex" }}>
                    <a
                      href="tel:+16175801400"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <i
                        className="fas fa-phone-square-alt"
                        style={{
                          fontSize: "160%",
                          marginLeft: ".20%",
                          marginRight: "3.5%",
                          color: "#464646",
                        }}
                      />{" "}
                    </a>
                    &nbsp;
                    <a
                      href="tel:+16175801400"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <h2
                        className="text-in-contact-info"
                        style={{ fontSize: "110%", marginTop: "1%" }}
                      >
                        {" "}
                        &nbsp;(617) 580-1400 &nbsp;
                      </h2>
                    </a>
                  </div>
                </div>

                <div style={{ maxWidth: "52%" }}>
                  <div style={{ display: "flex" }}>
                    <a
                      href="https://www.linkedin.com/in/alfredo-rafael/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <i
                        className="fab fa-linkedin"
                        style={{
                          fontSize: "160%",
                          color: "#464646",
                          marginRight: "3%",
                        }}
                      />{" "}
                    </a>
                    &nbsp; &nbsp;
                    <a
                      href="https://www.linkedin.com/in/alfredo-rafael/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <h2
                        style={{ fontSize: "110%", marginTop: "1%" }}
                        className="text-in-contact-info"
                      >
                        linkedin/alfredo-rafael
                      </h2>
                    </a>
                  </div>
                </div>
              </div>
            </section>
            {/* ////////////////////////////////////////////////////////////////////////////////////////////////////// */}

            <br />

            <dl id="skillset">
              <dt>SKILLS SET</dt>
              <dd>
                <h2>
                  <strong>Software Development</strong>
                </h2>
                <br />

                <div className="2skillColumns" style={{ display: "flex" }}>
                  <Col className="skillColumn1" style={{ flex: "1" }}>
                    <p>
                      <i
                        className="devicon-javascript-plain"
                        style={{ fontSize: "250%", color: "black" }}
                      />{" "}
                      Javascript
                    </p>
                    <p>
                      <i
                        className="devicon-react-plain"
                        style={{ fontSize: "250%", color: "black" }}
                      />{" "}
                      React;
                    </p>
                    <p>
                      <i
                        className="devicon-nodejs-plain"
                        style={{ fontSize: "250%" }}
                      />{" "}
                      Node.js;
                    </p>
                    <p>
                      <i
                        className="devicon-postgresql-plain"
                        style={{ fontSize: "250%" }}
                      />{" "}
                      PostgreSQL;
                    </p>
                    <p>
                      <i
                        className="devicon-wordpress-plain"
                        style={{ fontSize: "250%" }}
                      />{" "}
                      WordPress;
                    </p>
                  </Col>

                  <Col className="skillColumn2" style={{ flex: "1" }}>
                    <p>
                      <i
                        className="devicon-css3-plain"
                        style={{ fontSize: "250%", color: "black" }}
                      />{" "}
                      CSS3;
                    </p>
                    <p>
                      <i
                        className="devicon-jquery-plain"
                        style={{ fontSize: "250%", color: "black" }}
                      />{" "}
                      jQuery;
                    </p>
                    <p>
                      <i
                        className="devicon-github-plain"
                        style={{ fontSize: "250%", color: "black" }}
                      />{" "}
                      Github;
                    </p>
                    <p>
                      <i
                        className="devicon-bootstrap-plain"
                        style={{ fontSize: "250%", color: "black" }}
                      />{" "}
                      Bootstrap;
                    </p>
                    <p>
                      <i
                        className="devicon-git-plain"
                        style={{ fontSize: "250%", color: "black" }}
                      />{" "}
                      Git;
                    </p>
                  </Col>
                </div>

                <hr
                  style={{
                    height: "1px",
                    border: "none",
                    backgroundColor: "rgba(105, 186, 213, 0.5)",
                  }}
                />
              </dd>
            </dl>

            <dl>
              <dt>EXPERIENCE</dt>
              <dd>
                {/* // Experience 0 //////////////////////////////////////////////////////////////////////////////////////////////////// */}
                <h2>
                  <strong>Software Developer II</strong>
                  <span>October 2020 – present</span>
                </h2>
                <span
                  className="company-name"
                  style={{ fontStyle: "italic", fontSize: "100%" }}
                >
                  Merrill Lynch / Bank of America
                </span>
                <br />
                <br />
                <ul>
                  <li>
                    Create responsive iterations of our clients' websites &
                    update content through Documentum CMS
                  </li>
                </ul>
                <hr
                  style={{
                    height: "1px",
                    border: "none",
                    backgroundColor: "rgba(105, 186, 213, 0.3)",
                    marginTop: "5%",
                    width: "70%",
                  }}
                />

                {/* // Experience 0.5 //////////////////////////////////////////////////////////////////////////////////////////////////// */}

                <h2>
                  <strong>Assistant Web Developer</strong>
                  <span>September 2020 – present</span>
                </h2>
                <span
                  className="company-name"
                  style={{ fontStyle: "italic", fontSize: "100%" }}
                >
                  Massachusetts Institute of Technology
                </span>
                <br />
                <br />
                <ul>
                  <li>
                    Design and update web-content to improve company UX/UI using
                    Worpdress CMS
                  </li>
                </ul>
                <hr
                  style={{
                    height: "1px",
                    border: "none",
                    backgroundColor: "rgba(105, 186, 213, 0.3)",
                    marginTop: "5%",
                    width: "70%",
                  }}
                />

                {/* // Experience 1 //////////////////////////////////////////////////////////////////////////////////////////////////// */}
                <h2>
                  <strong>Front-End Developer</strong>
                  <span>December 2019 – June 2020</span>
                </h2>
                <span
                  className="company-name"
                  style={{ fontStyle: "italic", fontSize: "100%" }}
                >
                  Softworld Consulting & Solutions
                </span>
                <br />
                <br />
                <ul>
                  <li>
                    Used jQuery for DOM manipulation, while optimizing the
                    company’s internal web-application for responsiveness, UX,
                    usability and cross-browser compatibility
                  </li>
                </ul>
                <hr
                  style={{
                    height: "1px",
                    border: "none",
                    backgroundColor: "rgba(105, 186, 213, 0.3)",
                    marginTop: "5%",
                    width: "70%",
                  }}
                />
                {/* // Experience 2 //////////////////////////////////////////////////////////////////////////////////////////////////// */}
                <h2>
                  <strong>Software Developer</strong>
                  <span>August-December – 2019</span>
                </h2>
                <span
                  className="company-name"
                  style={{ fontStyle: "italic", fontSize: "100%" }}
                >
                  Beacon Hill Staffing Group
                </span>
                <br />
                <br />
                <ul>
                  <li>
                    Built functional components with modern React.js (hooks +
                    redux) in SaaS project gathering data from company’s private
                    API
                  </li>
                  <br />
                  <li>
                    Used React-Bootstrap and Styled-Components to develop
                    engaging, responsive UI
                  </li>
                  <br />
                  <li>
                    Experienced using OpenText CMS, Microsoft TFS and GIT for
                    version control
                  </li>
                </ul>
                <hr
                  style={{
                    height: "1px",
                    border: "none",
                    backgroundColor: "rgba(105, 186, 213, 0.3)",
                    marginTop: "5%",
                    width: "70%",
                  }}
                />
                {/* // Experience 3 //////////////////////////////////////////////////////////////////////////////////////////////////// */}
                <h2>
                  <strong>Freelance Developer</strong>
                  <span>December 2017 – August 2019</span>
                </h2>
                <span
                  className="company-name"
                  style={{ fontStyle: "italic", fontSize: "100%" }}
                >
                  AR Web-Communications
                </span>
                <br />
                <br />
                <ul>
                  <li>
                    Developed wireframes and redesigned WordPress websites while
                    meeting both: my clients’ aesthetic preferences and the
                    projects technical needs
                  </li>
                </ul>
                <hr
                  style={{
                    height: "1px",
                    border: "none",
                    backgroundColor: "rgba(105, 186, 213, 0.3)",
                    marginTop: "5%",
                    width: "70%",
                  }}
                />
                {/* // Experience 3 //////////////////////////////////////////////////////////////////////////////////////////////////// */}
                <h2>
                  <strong>Spanish Teacher</strong>
                  <span>December 2013 – June 2017</span>
                </h2>
                <span style={{ fontStyle: "italic", fontSize: "100%" }}>
                  Boston Public Schools
                </span>
                <br />
                <br />
                <ul>
                  <li>
                    Instructed Spanish as a foreign language to students ranging
                    from high school to elementary school
                    <br />
                    <br />
                  </li>
                  <li>
                    Developed and implemented a humanities curriculum for
                    bilingual students across several inner-city schools
                  </li>
                </ul>
                <hr
                  style={{
                    height: "1px",
                    border: "none",
                    backgroundColor: "rgba(105, 186, 213, 0.5)",
                    marginTop: "5%",
                  }}
                />
                {/* // END Experiences ///////////////////////////////////////////////////////////////////////////////////////////////// */}
                <h2>
                  <strong>CBRN Specialist</strong>
                  <span>1-296 C/Co, 2004 – 2011</span>
                </h2>
                <span style={{ fontStyle: "italic", fontSize: "100%" }}>
                  US Army National Guard
                </span>
                <br />
                <br />
                <ul>
                  <li>
                    Provided training on chemical-defense readiness as Sergeant
                    E-5, NCOIC. Experienced in tactical movement, strategic
                    firearms use and security operations. Overseas deployments
                    as follows:
                    <br />
                    <br />
                  </li>
                  <ul>
                    <li>
                      <strong>
                        Multinational Force and Observers – Egypt; 2006
                      </strong>
                      <br />
                      <br />
                      <div className="deployment-details">
                        <ul>
                          <li>
                            Ensured implementation of Egypt and Israel Peace
                            Treaty’s security provisions
                          </li>
                          <br />
                          <li>
                            Patrolled the Egyptian-Israel’s northern border,
                            providing surveillance across MFO observation posts.{" "}
                          </li>
                          <br />
                        </ul>
                      </div>
                    </li>

                    <li>
                      <strong>NATO KFOR: Camp Bondsteel – Kosovo; 2009</strong>
                      <br />
                      <br />
                      <div className="deployment-details">
                        <ul>
                          <li>
                            Patrolled Serbian-Kosovo border in NATO-led
                            peacekeeping operation responsible for establishing
                            Kosovo’s secure environment
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </ul>
                <hr
                  style={{
                    height: "1px",
                    border: "none",
                    backgroundColor: "rgba(105, 186, 213, 0.5)",
                    marginTop: "3%",
                  }}
                />
              </dd>
            </dl>
            <dl>
              <dt id="education">EDUCATION</dt>
              <dd>
                <h2>
                  <strong>Certificate in Web Development</strong>
                  <span>2017</span>
                </h2>
                <span style={{ fontStyle: "italic", fontSize: "100%" }}>
                  Antioch University; Los Angeles, CA
                </span>
                <br />
                {/* 
                <span>
                  <a
                    href="https://alfredorafael.com/wp-content/uploads/2020/04/Antioch.png"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="creds"
                  >
                    Credentials
                  </a>
                </span>
                 */}

                <hr
                  style={{
                    height: "1px",
                    border: "none",
                    backgroundColor: "rgba(105, 186, 213, 0.5)",
                    marginTop: "5%",
                  }}
                />
                <h2>
                  <strong>Web Development Immersive</strong>
                  <span>2019</span>
                </h2>
                <span style={{ fontStyle: "italic", fontSize: "100%" }}>
                  General Assembly; Boston, MA
                </span>
                <br />

                {/* 
                <span>
                  <a
                    href="https://alfredorafael.com/wp-content/uploads/2020/04/WDI.png"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="creds"
                  >
                    Credentials
                  </a>
                </span>
                */}
                <hr
                  style={{
                    height: "1px",
                    border: "none",
                    backgroundColor: "rgba(105, 186, 213, 0.5)",
                    marginTop: "5%",
                  }}
                />

                <h2>
                  <strong>Front-End Web Development</strong>
                  <span>2018</span>
                </h2>
                <span style={{ fontStyle: "italic", fontSize: "100%" }}>
                  General Assembly; Boston, MA
                </span>
                <br />

                {/* 
                <span>
                  <a
                    href="https://alfredorafael.com/wp-content/uploads/2020/04/Screen-Shot-2020-04-30-at-3.26.05-PM.png"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="creds"
                  >
                    Credentials
                  </a>
                </span>
                */}
                <hr
                  style={{
                    height: "1px",
                    border: "none",
                    backgroundColor: "rgba(105, 186, 213, 0.5)",
                    marginTop: "5%",
                  }}
                />

                <h2>
                  <strong>Masters in Education and Globalization</strong>
                  <span>2013</span>
                </h2>
                <span style={{ fontStyle: "italic", fontSize: "100%" }}>
                  Oulu University; Finland, Oulu
                </span>
                <br />
                {/* 
                <span>
                  <a
                    href="https://alfredorafael.com/wp-content/uploads/2020/05/Oulu-Transcript-Screenshot.png"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="creds"
                  >
                    Credentials
                  </a>
                </span>
                */}

                <hr
                  style={{
                    height: "1px",
                    border: "none",
                    backgroundColor: "rgba(105, 186, 213, 0.5)",
                    marginTop: "5%",
                  }}
                />

                <h2>
                  <strong>Bachelors in Health Education</strong>
                  <span>2009</span>
                </h2>
                <span style={{ fontStyle: "italic", fontSize: "100%" }}>
                  Inter-American University; San Germán, PR
                </span>
                <br />

                {/* 
                <span>
                  <a
                    href="https://alfredorafael.com/wp-content/uploads/2020/05/Diploma-Inter-scaled.jpeg"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="creds"
                  >
                    Credentials
                  </a>
                </span>
                */}

                <hr
                  style={{
                    height: "1px",
                    border: "none",
                    backgroundColor: "rgba(105, 186, 213, 0.5)",
                    marginTop: "5%",
                  }}
                />

                <h2>
                  <strong>US Army Chemical School</strong>
                  <span>2005</span>
                </h2>
                <span style={{ fontStyle: "italic", fontSize: "100%" }}>
                  Fort Leonard Wood; Big Piney, MO
                </span>
                <br />
                {/* 
                <span>
                  <a
                    href="https://alfredorafael.com/wp-content/uploads/2020/05/DiplomaArmy-scaled.jpeg"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="creds"
                  >
                    Credentials
                  </a>
                </span>
                */}

                <hr
                  style={{
                    height: "1px",
                    border: "none",
                    backgroundColor: "rgba(105, 186, 213, 0.5)",
                    marginTop: "5%",
                  }}
                />
              </dd>
            </dl>
            {/* <dl>
            <dt>Hobbies</dt>
            <dd>Lorem ipsum</dd>
          </dl> */}

            {/* <dl>
            <dt>References</dt>
            <dd>Available on request</dd>
          </dl> 
        */}
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Exploratory;

{
  /*Return to the original blog article: "http://thenewcode.com/553/Build-A-Responsive-Web-Résumé"> */
}

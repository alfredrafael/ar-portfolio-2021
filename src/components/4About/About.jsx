import React from "react";
import "./cssAbout.css";
import { Container } from "reactstrap";
import Fade from "react-reveal/Fade";

const About = () => {
  return (
    <React.Fragment>
      <div className="about-info-area">
        <Container>
          <Fade>
            <h2>
              <strong>
                About<span> Alfredo Rafael</span>
              </strong>
            </h2>
          </Fade>
          <Fade>
            <img
              className="curve"
              src="https://rmrdetailing.com/wp-content/uploads/2021/10/Alfredo-picture.png"
              alt="A photograph of Alfredo Rafael"
            />
          </Fade>

          <Fade>
            <p>
              Hi! I’m a US Army veteran, educator and a{" "}
              <span>front end developer</span>. I create <span>React.js</span>,
              jQuery, <span>Node.js</span> and <span>WordPress</span>{" "}
              applications for your business or organization. My experience
              coding responsive and engaging user interfaces (
              <span>from wireframe to deployment</span>) and teamwork attitude
              are my greatest assets. I look forward to joining a collaborative
              environment with other fellow developers. Welcome to my website!
            </p>
          </Fade>
          <hr style={{ border: ".5px solid #D3D3D3", maxWidth: "40%" }} />
        </Container>
      </div>
    </React.Fragment>
  );
};

export default About;

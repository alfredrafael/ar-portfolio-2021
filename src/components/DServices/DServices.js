import React from "react";
import "./dServices.css";
import { Row, Col, Container } from "react-bootstrap";
import Fade from "react-reveal/Fade";

const DServices = () => {
  return (
    <React.Fragment>
      <section id="services" style={{ justifyContent: "space-around" }}>
        <Container>
          <h2>
            <Fade>
              <strong>
                How Can <span>I Help You?</span>
              </strong>
            </Fade>
          </h2>

          <Row className="projectRow" style={{}}>
            <Col className="serviceImageDiv" style={{ textAlign: "center" }}>
              <h4 className="mobileServiceText">UX Design</h4>
              <img src="https://rmrdetailing.com/wp-content/uploads/2021/11/UX.png" />
            </Col>
            <Col
              className="serviceTextDiv"
              style={{
                margin: "auto 0",
                paddingRight: "10%",
              }}
            >
              <h4 className="desktopServiceText">UX Design </h4>
              <p>
                We'll work to translate your ideas into a fully functional
                web-application. From logo design, color pallete and wireframe,
                we'll develop a comprehensive template that mirror your
                application's look, feel and needs before diving into
                production.
              </p>
            </Col>
          </Row>

          <hr
            style={{
              border: ".5px solid #D3D3D3",
              maxWidth: "25%",
              marginBottom: "2em",
            }}
          />
          <Fade>
            <Row className="projectRow" style={{}}>
              <Col className="serviceImageDiv" style={{ textAlign: "center" }}>
                <h4 className="mobileServiceText">UI Development</h4>

                <img
                  style={{ maxWidth: "53%" }}
                  src="https://rmrdetailing.com/wp-content/uploads/2021/11/UX8.png"
                />
              </Col>
              <Col
                className="serviceTextDiv"
                style={{
                  margin: "auto 0",
                  paddingRight: "10%",
                }}
              >
                <h4 className="desktopServiceText">UI Development</h4>
                <p>
                  Once we identify all the different parts of your website and
                  how they interact with each other, the software-development
                  work to bring your web-application to life starts. My software
                  development tools are Javascript, CSS, HTML5, Github, Netlify
                  and Wordpress CMS.
                </p>
              </Col>
            </Row>
          </Fade>

          <hr
            style={{
              border: ".5px solid #D3D3D3",
              maxWidth: "25%",
              marginBottom: "2em",
            }}
          />
          <Fade>
            <Row className="projectRow" style={{}}>
              <Col className="serviceImageDiv" style={{ textAlign: "center" }}>
                <h4 className="mobileServiceText">Tech Advisory</h4>

                <img src="https://rmrdetailing.com/wp-content/uploads/2021/11/ADV.png" />
              </Col>
              <Col
                className="serviceTextDiv"
                style={{
                  margin: "auto 0",
                  paddingRight: "10%",
                }}
              >
                <h4 className="desktopServiceText">Tech Advisory </h4>
                <p>
                  Before, during and after we bring your web-application to
                  life, along the way I'll provide you with advice on the best
                  user-expereince practices and the software-development tools
                  that best suits our project specific needs. Developing this
                  helpful relationship with my clients is one of the apsects I
                  enjoy the most.
                </p>
              </Col>
            </Row>
          </Fade>

          <br />
        </Container>
      </section>
    </React.Fragment>
  );
};

export default DServices;

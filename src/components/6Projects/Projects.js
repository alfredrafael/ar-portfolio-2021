import React, { useState } from "react";
import { Container, Row, Col, Button, Card, Modal } from "react-bootstrap";
import { Fade } from "react-reveal";
import "./projects.css";

const Projects = () => {
  //modals setup:
  const [showBofaState, setShowBofa] = useState(false);
  const handleCloseBofa = () => setShowBofa(false);
  const showBofa = () => setShowBofa(true);

  const [showMITState, setShowMIT] = useState(false);
  const handleCloseMIT = () => setShowMIT(false);
  const showMIT = () => setShowMIT(true);

  const [showRelataState, setShowRelata] = useState(false);
  const handleCloseRelata = () => setShowRelata(false);
  const showRelata = () => setShowRelata(true);

  const [showRMRState, setShowRMR] = useState(false);
  const handleCloseRMR = () => setShowRMR(false);
  const showRMR = () => setShowRMR(true);

  const [showMelodiasState, setShowMelodias] = useState(false);
  const handleCloseMelodias = () => setShowMelodias(false);
  const showMelodias = () => setShowMelodias(true);

  const [showMoviesState, setShowMovies] = useState(false);
  const handleCloseMovies = () => setShowMovies(false);
  const showMovies = () => setShowMovies(true);

  return (
    <React.Fragment>
      <div id="projectsComponent">
        <br />
        <Container id="projects">
          <h2>
            <hr style={{ border: ".5px solid #D3D3D3", maxWidth: "45%" }} />{" "}
            <strong>
              Code <span>Samples</span>
            </strong>
          </h2>
          <Fade>
            <Row className="project-rows">
              <Col>
                <Card className="highlight-on-hover" onClick={showMovies}>
                  <Card.Img
                    variant="top"
                    src="https://rmrdetailing.com/wp-content/uploads/2021/11/MovieApp.png"
                  />
                  <Card.Body>
                    <Card.Title>Movie App</Card.Title>
                  </Card.Body>
                </Card>

                <Modal
                  size="lg"
                  show={showMoviesState}
                  onHide={handleCloseMovies}
                >
                  <Modal.Header className="proj-modal-header" closeButton>
                    <Modal.Title>Movie App</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Row>
                      <div className="flexed-modal-body-proj">
                        <img
                          className="proj-modal-pic"
                          src="https://rmrdetailing.com/wp-content/uploads/2021/11/MovieApp.png"
                        />
                        <div className="proj-modal-text">
                          This application is a fun-project that fetches data
                          from The Movie Database API (TMDB) using React.js, and
                          allow users to see TMDB's most-popular films + search
                          for specific movies within their database. Users can
                          select movies and read additional information about
                          them: plot, actors, budget, etc. I built this
                          application with create-react-app, styled-components
                          for CSS styling, @reach/router for routing, prop-types
                          for components' output checking, and font-awesome
                          icons.
                        </div>
                      </div>
                    </Row>
                  </Modal.Body>
                  <Modal.Footer>
                    <a
                      href="https://alfredo-movie-app-with-react.netlify.app/"
                      target="_target"
                    >
                      <Button onClick={handleCloseMovies}>
                        {" "}
                        <i class="fas fa-tv"></i> &nbsp;Visit Site
                      </Button>
                    </a>

                    <a
                      href="https://github.com/alfredrafael/react-movie-app"
                      target="_blank"
                    >
                      <Button onClick={handleCloseMovies}>
                        {" "}
                        <i className="devicon-github-plain" /> &nbsp;See Code
                      </Button>
                    </a>
                    <Button
                      style={{
                        background: "white",
                        color: "#040182",
                        border: "1px solid #040182",
                      }}
                      onClick={handleCloseMovies}
                    >
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
              </Col>

              {/* //////////////////////////////////// */}

              <Col>
                <Card className="highlight-on-hover" onClick={showRelata}>
                  <Card.Img
                    variant="top"
                    src="https://rmrdetailing.com/wp-content/uploads/2021/11/Relata2.png"
                  />
                  <Card.Body>
                    <Card.Title>Relata</Card.Title>
                  </Card.Body>
                </Card>

                <Modal
                  size="lg"
                  show={showRelataState}
                  onHide={handleCloseRelata}
                >
                  <Modal.Header className="proj-modal-header" closeButton>
                    <Modal.Title>Relata</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Row>
                      <div className="flexed-modal-body-proj">
                        <img
                          className="proj-modal-pic"
                          src="https://rmrdetailing.com/wp-content/uploads/2021/11/Relata2.png"
                        />
                        <div className="proj-modal-text">
                          This web-application is built using React.js,
                          React-Bootsrap and Email-js for its "Contact Us" email
                          funcionality. Relata is a digital media and marketing
                          agency aimed at building peace and understanding,
                          promoting dialogue, and interconnectedness for
                          nonprofits, NGOs, labor organizations, as well as
                          houses of worship, small businesses and entrepreneurs.
                        </div>
                      </div>
                    </Row>
                  </Modal.Body>
                  <Modal.Footer>
                    <a href="https://relata.us/" target="_target">
                      <Button onClick={handleCloseRelata}>
                        {" "}
                        <i class="fas fa-tv"></i> &nbsp;Visit Site
                      </Button>
                    </a>

                    <a
                      href="https://github.com/mylesgreen/relata"
                      target="_blank"
                    >
                      <Button onClick={handleCloseRelata}>
                        {" "}
                        <i className="devicon-github-plain" /> &nbsp;See Code
                      </Button>
                    </a>
                    <Button
                      style={{
                        background: "white",
                        color: "#040182",
                        border: "1px solid #040182",
                      }}
                      onClick={handleCloseRelata}
                    >
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
              </Col>

              {/* //////////////////////////////////// */}

              <Col>
                <Card className="highlight-on-hover" onClick={showRMR}>
                  <Card.Img
                    variant="top"
                    src="https://rmrdetailing.com/wp-content/uploads/2021/11/RMR2.png"
                  />
                  <Card.Body>
                    <Card.Title>RMR</Card.Title>
                  </Card.Body>
                </Card>

                <Modal size="lg" show={showRMRState} onHide={handleCloseRMR}>
                  <Modal.Header className="proj-modal-header" closeButton>
                    <Modal.Title>RMR</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Row>
                      <div className="flexed-modal-body-proj">
                        <img
                          className="proj-modal-pic"
                          src="https://rmrdetailing.com/wp-content/uploads/2021/11/RMR2.png"
                        />
                        <div className="proj-modal-text">
                          Wordpress is a powerful tool to develop enterprise
                          level applications, allowing clients edit their
                          website's content thru a wysiwyg editor. I created
                          this UI theme with custom HTML, vanilla CSS, added
                          WPForms to its contact page, use Sketch to create
                          their PNG logo, and additional Worpdress pluggings to
                          enhance user experience.
                        </div>
                      </div>
                    </Row>
                  </Modal.Body>
                  <Modal.Footer>
                    <a href="https://rmrdetailing.com" target="_target">
                      <Button onClick={handleCloseRMR}>
                        {" "}
                        <i class="fas fa-tv"></i> &nbsp;Visit Site
                      </Button>
                    </a>

                    <Button
                      style={{
                        background: "white",
                        color: "#040182",
                        border: "1px solid #040182",
                      }}
                      onClick={handleCloseRMR}
                    >
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
              </Col>
            </Row>
          </Fade>

          {/* ////////////////////////////////////////////////////// */}

          <Fade>
            <Row className="project-rows">
              <Col>
                <Card className="highlight-on-hover" onClick={showBofa}>
                  <Card.Img
                    variant="top"
                    src="https://rmrdetailing.com/wp-content/uploads/2021/10/BofA-page.png"
                  />
                  <Card.Body>
                    <Card.Title>Merrill Lynch</Card.Title>
                  </Card.Body>
                </Card>

                <Modal size="lg" show={showBofaState} onHide={handleCloseBofa}>
                  <Modal.Header className="proj-modal-header" closeButton>
                    <Modal.Title>Merrill Lynch</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Row>
                      <div className="flexed-modal-body-proj">
                        <img
                          className="proj-modal-pic"
                          src="https://rmrdetailing.com/wp-content/uploads/2021/10/BofA-page.png"
                        />
                        <div className="proj-modal-text">
                          I code webpages for Bank of America's Merrill Lynch
                          using HTML5, vanilla CSS, vanilla-JS and jQuery. When
                          I am not coding + assisting the creation of these
                          landing pages, I am updating time-sensitive content
                          using the company's CMS, and keeping track of multiple
                          updates using Jira's Kanban board and Scrum
                          methodologies accross several business owners,
                          coworkers and other stakeholders alike.
                        </div>
                      </div>
                    </Row>
                  </Modal.Body>
                  <Modal.Footer>
                    <a
                      href="https://www.merrilledge.com/merrill-edge-advisory-center"
                      target="_target"
                    >
                      <Button>
                        {" "}
                        <i class="fas fa-tv"></i> &nbsp;Visit Site
                      </Button>
                    </a>

                    <Button
                      style={{
                        background: "white",
                        color: "#040182",
                        border: "1px solid #040182",
                      }}
                      onClick={handleCloseBofa}
                    >
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
              </Col>

              {/* //////////////////////////////////// */}

              <Col>
                <Card className="highlight-on-hover" onClick={showMelodias}>
                  <Card.Img
                    variant="top"
                    src="https://rmrdetailing.com/wp-content/uploads/2021/11/Melodias2.png"
                  />
                  <Card.Body>
                    <Card.Title>Melodías</Card.Title>
                  </Card.Body>
                </Card>

                <Modal
                  size="lg"
                  show={showMelodiasState}
                  onHide={handleCloseMelodias}
                >
                  <Modal.Header className="proj-modal-header" closeButton>
                    <Modal.Title>Melodias Restaurant</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Row>
                      <div className="flexed-modal-body-proj">
                        <img
                          className="proj-modal-pic"
                          src="https://rmrdetailing.com/wp-content/uploads/2021/11/Melodias2.png"
                        />
                        <div className="proj-modal-text">
                          Wordpress is a powerful tool to develop enterprise
                          level applications, allowing clients edit their
                          website's content thru a wysiwyg editor. I created
                          this UI theme with custom HTML, vanilla CSS, added
                          WPForms to its contact page, use Sketch to create
                          their PNG logo, and additional Worpdress pluggings to
                          enhance user experience.
                        </div>
                      </div>
                    </Row>
                  </Modal.Body>
                  <Modal.Footer>
                    <a href="https://melodias-restaurant.com" target="_target">
                      <Button>
                        {" "}
                        <i class="fas fa-tv"></i> &nbsp;Visit Site
                      </Button>
                    </a>

                    <Button
                      style={{
                        background: "white",
                        color: "#040182",
                        border: "1px solid #040182",
                      }}
                      onClick={handleCloseMelodias}
                    >
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
              </Col>

              {/* //////////////////////////////////// */}

              <Col>
                <Card className="highlight-on-hover" onClick={showMIT}>
                  <Card.Img
                    variant="top"
                    src="https://rmrdetailing.com/wp-content/uploads/2021/11/MIT2.png"
                  />
                  <Card.Body>
                    <Card.Title>M.I.T</Card.Title>
                  </Card.Body>
                </Card>

                <Modal size="lg" show={showMITState} onHide={handleCloseMIT}>
                  <Modal.Header className="proj-modal-header" closeButton>
                    <Modal.Title>MIT</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Row>
                      <div className="flexed-modal-body-proj">
                        <img
                          className="proj-modal-pic"
                          src="https://rmrdetailing.com/wp-content/uploads/2021/11/MIT2.png"
                        />
                        <div className="proj-modal-text">
                          Wordpress is a powerful tool to develop enterprise
                          level applications, allowing clients edit their
                          website's content thru a wysiwyg editor. I created
                          this UI theme with custom HTML, vanilla CSS, added
                          WPForms to its contact page, use Sketch to create
                          their PNG logo, and additional Worpdress pluggings to
                          enhance user experience.
                        </div>
                      </div>
                    </Row>
                  </Modal.Body>
                  <Modal.Footer>
                    <a href="https://cheme.mit.edu/" target="_target">
                      <Button>
                        {" "}
                        <i class="fas fa-tv"></i> &nbsp;Visit Site
                      </Button>
                    </a>

                    <Button
                      style={{
                        background: "white",
                        color: "#040182",
                        border: "1px solid #040182",
                      }}
                      onClick={handleCloseMIT}
                    >
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
              </Col>
            </Row>
          </Fade>
          <br />
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Projects;

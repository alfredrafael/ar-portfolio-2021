import React, { useState, useRef, useEffect } from "react";
import emailjs, { init } from "emailjs";
import { Form, NavDropdown } from "react-bootstrap";
import "./navbarStyles.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Button,
  Modal,
  ModalBody,
} from "reactstrap";
import $ from "jquery";

import { MY_MAIL_USER_ID, MY_SERVICE_ID } from "../../config";

const Bar = (props) => {
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

  // init("user_HOHwzUZ9ZKm88Y5S2m9s0");
  const form = useRef();

  //////////for modal-mail/////////////////
  const [isOpen, setIsOpen] = useState(false);
  let toggleNavbar = () => setIsOpen(!isOpen);
  const { className } = props;

  //////////for collapsible navbar menu//////////

  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(!modal);

  /////////// for email /////////////////

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        MY_SERVICE_ID,
        "template_only_message",
        e.target,
        MY_MAIL_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    toggleModal();
    alert("Got your message!");
  }

  // function sendEmail(e) {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       MY_SERVICE_ID,
  //       "template_only_message",
  //       e.target,
  //       MY_MAIL_USER_ID
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );

  //   e.target.reset();
  //   toggleModal();
  //   alert("Got your message!");
  // }

  //////////----------------/////////////---------------- /////////////

  return (
    <React.Fragment>
      <Navbar
        dark
        style={{ background: "#040182", borderBottom: "1px solid #040182" }}
        expand="md"
        sticky={"top"}
        className="navbar-fading-effect"
      >
        <Container>
          <NavbarBrand href="/">
            <img
              className="navbar-logo"
              src="https://rmrdetailing.com/wp-content/uploads/2021/10/AR-logo-white.png"
            />
            &nbsp;
          </NavbarBrand>

          <NavbarToggler onClick={toggleNavbar} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">
                  <i className="fas fa-home"></i>&nbsp; Home
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="/resume">
                  <i className="fas fa-book"></i>&nbsp; Resume
                </NavLink>
              </NavItem>

              <NavDropdown title="Contact" id="offcanvasNavbarDropdown">
                <NavDropdown.Item
                  href="https://www.linkedin.com/in/alfredo-rafael/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {" "}
                  <i className="fab fa-linkedin"></i>
                  &nbsp;LinkedIn
                </NavDropdown.Item>
                <NavDropdown.Divider />

                <NavDropdown.Item
                  href="mailto:alfredrafael@gmail.com?Subject=Regarding%20your%20web-development%20services"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {" "}
                  <i className="fas fa-envelope"></i>&nbsp;Email
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="tel:+16175801400">
                  {" "}
                  <i className="fas fa-phone-square-alt"></i>
                  &nbsp;Telephone
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            {/* 
          &nbsp; <NavbarText><span style={{color: 'white'}}>Text</span></NavbarText>
          */}
          </Collapse>
        </Container>
      </Navbar>

      <div>
        <Modal isOpen={modal} className={className}>
          <ModalBody>
            <Form className="" onSubmit={sendEmail} style={{ width: "100%" }}>
              <Form.Control
                name="user_user"
                as="input"
                value="RESUME BAR"
                style={{ display: "none" }}
              />
              <Form.Control
                name="message"
                as="textarea"
                rows={12}
                placeholder="Your message goes here :)"
              />
              <p className="fromGeneric"></p>
              <Button className="sendButton" type="submit" value="Send">
                Well, send it!
              </Button>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Button
                color="transparent"
                style={{ border: "1px solid #040182" }}
                onClick={toggleModal}
              >
                Cancel
              </Button>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    </React.Fragment>
  );
};

export default Bar;

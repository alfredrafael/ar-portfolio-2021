import React, { useState, useEffect } from "react";
import { NavDropdown } from "react-bootstrap";
import "./navbar.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from "reactstrap";
import $ from "jquery";

const NavigationBar = (props) => {
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

  //////////for collapsible navbar menu//////////

  const [isOpen, setIsOpen] = useState(false);
  let toggleNavbar = () => setIsOpen(!isOpen);

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
    </React.Fragment>
  );
};

export default NavigationBar;

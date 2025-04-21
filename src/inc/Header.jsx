import React, { useEffect, useState } from 'react';
import { Navbar, Nav, NavDropdown, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import logo from "../assets/images/logo.png";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsSticky(scrollTop > 50); // adjust the scroll threshold as needed
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`custom_nav ${isSticky ? 'sticky-nav' : ''}`}>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              src={logo}
              alt="Acelot Logo"
              className="headLogo d-inline-block align-top"
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center">
              <Nav.Link as={Link} to="/">Home</Nav.Link>

              <NavDropdown title="About Us" id="about-dropdown">
                <NavDropdown.Item as={Link} to="/about-us">About Us</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/meet-team-acelot">Meet Team Acelot</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Products" id="product-dropdown">
                <NavDropdown.Item as={Link} to="/contact-us">LMS Platform</NavDropdown.Item>
                {/* <NavDropdown.Item as={Link} to="/contact-us">AI Proctoring</NavDropdown.Item> */}
                <NavDropdown.Item as={Link} to="/corporate-training">Corporate Training</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Solutions" id="solutions-dropdown">
                <NavDropdown.Item as={Link} to="/contact-us">Onboarding Training</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/contact-us">Product Training</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/contact-us">Remote Workforce Training</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/contact-us">Sales Training</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/contact-us">Compliance Training</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link as={Link} to="/contact-us">Contact Us</Nav.Link>
              <Button as={Link} to={'/select-instance'} variant="primary" className="ms-3 btn_one topbtn">Login </Button>

              <div className='loginarea'>
                <Nav.Link as={Link} to={'/contact-us'} className='blue'><b>Request a Demo</b></Nav.Link>
              </div>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;

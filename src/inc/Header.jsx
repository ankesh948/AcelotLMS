import React, { useEffect, useState } from 'react';
import { Navbar, Nav, NavDropdown, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import logo from "../assets/images/logo.png";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [expanded, setExpanded] = useState(false); // track menu toggle state

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsSticky(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavItemClick = () => {
    setExpanded(false); // Close the menu on link click
  };

  return (
    <div className={`custom_nav ${isSticky ? 'sticky-nav' : ''}`}>
      <Navbar expand="lg" expanded={expanded} onToggle={setExpanded}>
        <Container>
          <Navbar.Brand as={Link} to="/" onClick={handleNavItemClick}>
            <img
              src={logo}
              alt="Acelot Logo"
              className="headLogo d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center">
              <Nav.Link as={Link} to="/" onClick={handleNavItemClick}>Home</Nav.Link>

              <NavDropdown title="About Us" id="about-dropdown">
                <NavDropdown.Item as={Link} to="/about-us" onClick={handleNavItemClick}>About Us</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/meet-team-acelot" onClick={handleNavItemClick}>Meet Team Acelot</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Products" id="product-dropdown">
                <NavDropdown.Item as={Link} to="/lms-platform" onClick={handleNavItemClick}>LMS Platform</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/corporate-training" onClick={handleNavItemClick}>Corporate Training</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Solutions" id="solutions-dropdown">
                <NavDropdown.Item as={Link} to="/onboarding-training" onClick={handleNavItemClick}>Onboarding Training</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/product-training" onClick={handleNavItemClick}>Product Training</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/remote-workforce-training" onClick={handleNavItemClick}>Remote Workforce Training</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/sales-training" onClick={handleNavItemClick}>Sales Training</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/compliance-training" onClick={handleNavItemClick}>Compliance Training</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link as={Link} to="/contact-us" onClick={handleNavItemClick}>Contact Us</Nav.Link>

              <div className='loginarea'>
                <Nav.Link as={Link} to="/contact-us" className='blue' onClick={handleNavItemClick}><b>Request a Demo</b></Nav.Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};


export default Header;

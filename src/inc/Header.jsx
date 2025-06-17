import React, { useEffect, useState } from 'react';
import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Offcanvas,
  Button
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavItemClick = () => {
    setShowMenu(false); // Close mobile menu on link click
  };

  return (
    <div className={`custom_nav ${isSticky ? 'sticky-nav' : ''}`}>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/" onClick={handleNavItemClick}>
            <img
              src={logo}
              alt="Acelot Logo"
              className="headLogo d-inline-block align-top"
            />
          </Navbar.Brand>

          {/* Mobile Menu Button */}
          <div className="d-flex align-items-center gap-2 d-lg-none ">
            <Button as={Link} to={'/request-a-demo'} className='btn_mobile'>Book Demo</Button>
            <button type="button" className="custom-bar" onClick={() => setShowMenu(true)}>
              <i className='bx bx-menu fs-1'></i> 
            </button>
          </div>

          {/* Desktop Menu */}
          <Navbar.Collapse id="basic-navbar-nav" className="d-none d-lg-block">
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

              <div className="loginarea">
                <Nav.Link as={Link} to="/request-a-demo" className="blue" onClick={handleNavItemClick}><b>Request a Demo</b></Nav.Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Offcanvas Menu for Mobile */}
      <Offcanvas show={showMenu} onHide={() => setShowMenu(false)} placement="start" className="d-lg-none">
        <Offcanvas.Header closeButton>
            <Navbar.Brand as={Link} to="/" onClick={handleNavItemClick}>
            <img
              src={logo}
              alt="Acelot Logo"
              className="headLogo d-inline-block align-top"
            />
          </Navbar.Brand>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link as={Link} to="/" onClick={handleNavItemClick}>Home</Nav.Link>

            <NavDropdown title="About Us" id="mobile-about-dropdown">
              <NavDropdown.Item as={Link} to="/about-us" onClick={handleNavItemClick}>About Us</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/meet-team-acelot" onClick={handleNavItemClick}>Meet Team Acelot</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Products" id="mobile-product-dropdown">
              <NavDropdown.Item as={Link} to="/lms-platform" onClick={handleNavItemClick}>LMS Platform</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/corporate-training" onClick={handleNavItemClick}>Corporate Training</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Solutions" id="mobile-solutions-dropdown">
              <NavDropdown.Item as={Link} to="/onboarding-training" onClick={handleNavItemClick}>Onboarding Training</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/product-training" onClick={handleNavItemClick}>Product Training</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/remote-workforce-training" onClick={handleNavItemClick}>Remote Workforce Training</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/sales-training" onClick={handleNavItemClick}>Sales Training</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/compliance-training" onClick={handleNavItemClick}>Compliance Training</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to="/contact-us" onClick={handleNavItemClick}>Contact Us</Nav.Link>
            <Nav.Link as={Link} to="/request-a-demo" onClick={handleNavItemClick}><b>Request a Demo</b></Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default Header;

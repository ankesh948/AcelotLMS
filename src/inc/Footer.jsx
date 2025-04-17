import React from 'react';
import { Container, Image, Col, Row } from 'react-bootstrap';

import logo from "../assets/images/logo.svg";
import msme from "../assets/images/msme.png";
import dpiit from "../assets/images/dpiit.png";
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <>
      <section className='footer'>
        <Container>
          <Row className='g-0'>
            <Col lg={4}>
              <div className='logo-footer'>
                <Link to='/'>
                  <Image
                    src={logo}
                    className='img-fluid'
                    alt='AcelotLMS'
                  />
                </Link>
                <h3 className='mt-4 fs-4 mb-2 fw-600'>Address : </h3>
                <p className='pe-5'>90 B Delhi – Jaipur Expressway, Udyog Vihar, Sector 18, Gurugram – 122018 ,Haryana, India</p>


                <div className='startupbx d-flex gap-5 mt-5'>
                <img src={msme} className='img-fluid' alt="" />
                <img src={dpiit} className='img-fluid' alt="" />
                </div>
              </div>
            </Col>


            <Col lg={2}>
              <div className='footer_bx1'>
                <h3>Quick Links:</h3>
                <ul>
                  <li><Link to='/'>Home</Link></li>
                  <li><Link to='/about-us'>About Us</Link></li>
                  <li><Link to='/blog'>Blog</Link></li>
                  <li><Link to='/privacy-policy'>Privacy Policy</Link></li>
                </ul>
              </div>
            </Col>

            <Col lg={2}>
              <div className='footer_bx1'>
                <h3>Our Producs:</h3>
                <ul>

                  <li>
                    <Link to='/' onClick={() => {
                      setTimeout(() => {
                        const el = document.getElementById('products');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    }}>
                      LMS Platform
                    </Link>
                  </li>
                  <li>
                    <Link to='/' onClick={() => {
                      setTimeout(() => {
                        const el = document.getElementById('products');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    }}>
                      AI Proctoring
                    </Link>
                  </li>
                  <li>
                    <Link to='/' onClick={() => {
                      setTimeout(() => {
                        const el = document.getElementById('products');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    }}>
                      Corporate Training
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={2}>
              <div className='footer_bx1'>
                <h3>Our Solutions:</h3>
                <ul>

                  <li><Link to='/' onClick={() => {
                    setTimeout(() => {
                      const el = document.getElementById('solutions');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}>Onboarding Training</Link></li>
                  <li><Link to='/' onClick={() => {
                    setTimeout(() => {
                      const el = document.getElementById('solutions');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}>Product Training</Link></li>
                  <li><Link to='/' onClick={() => {
                    setTimeout(() => {
                      const el = document.getElementById('solutions');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}>Remote Workforce Training</Link></li>
                  <li><Link to='/' onClick={() => {
                    setTimeout(() => {
                      const el = document.getElementById('solutions');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}>Sales Training </Link></li>
                  <li><Link to='/' onClick={() => {
                    setTimeout(() => {
                      const el = document.getElementById('solutions');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}>Compliance Training </Link></li>
                  <li><Link to='/' onClick={() => {
                    setTimeout(() => {
                      const el = document.getElementById('solutions');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}>Localization </Link></li>
                </ul>
              </div>
            </Col>
            <Col lg={2}>
              <div className='footer_bx1'>
                <h3>Follow Us</h3>
                <ul className='socialbx_two'>
                  <li>
                    <Link to='https://www.facebook.com/acelotacademy/' target='_blank'>
                      <i className='bx bxl-facebook-circle'></i>
                      <span>Facebook</span>
                    </Link>
                  </li>
                  <li>
                    <Link to='https://twitter.com/Acelot_Academy?s=09' target='_blank'>
                      <i className='bx bxl-twitter'></i>
                      <span>Twitter</span>
                    </Link>
                  </li>
                  <li>
                    <Link to='https://www.linkedin.com/company/acelot-academy' target='_blank'>
                      <i className='bx bxl-linkedin'></i>
                      <span>Linkedin</span>
                    </Link>
                  </li>
                  <li>
                    <Link to='https://youtube.com/channel/UCTVGTNSJpmkFWG9-ZGQkqKA' target='_blank'>
                      <i className='bx bxl-youtube'></i>
                      <span>Youtube</span>
                    </Link>
                  </li>
                  <li>
                    <Link to='https://instagram.com/acelot.academy?utm_medium=copy_link' target='_blank'>
                      <i className='bx bxl-instagram'></i>
                      <span>Instagram</span>
                    </Link>
                  </li>
                  <li>
                    <Link to='https://wa.me/+919999211110' target='_blank'>
                      <i className='bx bxl-whatsapp'></i>
                      <span>Whatsapp</span>
                    </Link>
                  </li>
                </ul>
                {/* <ul className='socialbx'>
                  <li>
                    <Link to='https://www.facebook.com/acelotacademy/'>
                      <i class='bx bxl-facebook-circle'></i>
                    </Link>
                  </li>
                  <li>
                    <Link to='https://twitter.com/Acelot_Academy?s=09'>
                      <i class='bx bxl-twitter'></i>
                    </Link>
                  </li>
                  <li>
                    <Link to='https://www.linkedin.com/company/acelot-academy'>
                      <i class='bx bxl-linkedin'></i></Link>
                  </li>
                  <li>
                    <Link to='https://youtube.com/channel/UCTVGTNSJpmkFWG9-ZGQkqKA'>
                      <i class='bx bxl-youtube'></i></Link>
                  </li>
                  <li>
                    <Link to='https://instagram.com/acelot.academy?utm_medium=copy_link'>
                      <i class='bx bxl-instagram'></i></Link>
                  </li>
                  <li>
                    <Link to='https://wa.me/+919999211110'>
                      <i class='bx bxl-whatsapp'></i></Link>
                  </li>
                </ul> */}

              </div>
            </Col>

          </Row>


        </Container>

        <div className='bottom-bar'>
          <p className='mb-0'>Copyright © 2025 - Acelot - All Rights Reserved.</p>
        </div>
      </section >
    </>
  );
};

export default Footer;


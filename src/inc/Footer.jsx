import React from 'react';
import { Container, Image, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import logo from "../assets/images/logo.png";
import logowhite from "../assets/images/logo-white.png";
import msme from "../assets/images/msme.png";
import dpiit from "../assets/images/dpiit.png";
import mepse from "../assets/images/mepse.png";


const Footer = () => {
  return (
    <>
        <section className='footer_mobile pb-0'>
        <Container>
          <Row className='g-0 justify-content-center'>
            <Col lg={12} xs={12}>
              <div className='logo-footer'>
                <Link to='/' className='d-flex justify-content-center'>
                  <Image
                    src={logowhite}
                    className='img-fluid logo-footer-logo'
                    alt='Acelot'
                  />
                </Link>

                 <ul className='socialbx'>
                  <li>
                    <Link to='https://www.facebook.com/acelotacademy/' target='_blank'>
                      <i className='bx bxl-facebook-circle'></i>
                    </Link>
                  </li>
                  <li>
                    <Link to='https://twitter.com/Acelot_Academy?s=09' target='_blank'>
                      <i className='bx bxl-twitter'></i>
                    </Link>
                  </li>
                  <li>
                    <Link to='https://www.linkedin.com/company/acelot-academy' target='_blank'>
                      <i className='bx bxl-linkedin'></i>
                    </Link>
                  </li>
                  <li>
                    <Link to='https://youtube.com/channel/UCTVGTNSJpmkFWG9-ZGQkqKA' target='_blank'>
                      <i className='bx bxl-youtube'></i>
                    </Link>
                  </li>
                  <li>
                    <Link to='https://instagram.com/acelot.academy?utm_medium=copy_link' target='_blank'>
                      <i className='bx bxl-instagram'></i>
                    </Link>
                  </li>
                  <li>
                    <Link to='https://wa.me/+919999211110' target='_blank'>
                      <i className='bx bxl-whatsapp'></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>


            <Col lg={12} xs={12}>
              <div className='footer_bx2'>
                <h3 className='text-center mt-4 mb-3 text-white'>Quick Links:</h3>
                <ul>
                  <li><Link to='/'>Home</Link></li>
                  <li><Link to='/about-us'>About Us</Link></li>
                  <li><Link to='/blog'>Blog</Link></li>
                  <li><Link to='/contact-us'>Contact Us</Link></li>
                  <li><Link to='/privacy-policy'>Privacy Policy</Link></li>
                  <li><Link to='/onboarding-training'>Onboarding Training</Link></li>
                  <li><Link to='/product-training'>Product Training</Link></li>
                  <li><Link to='/remote-workforce-training'>Remote Workforce Training</Link></li>
                  <li><Link to='/sales-training'>Sales Training </Link></li>
                  <li><Link to='/compliance-training'>Compliance Training </Link></li>
                  <li><Link to='/lms-platform'>LMS Platform</Link></li>
                  <li><Link to='/corporate-training'>Corporate Training</Link></li>
                </ul>
              </div>
            </Col>

            <Col lg={12} xs={12}>
              <div className='footer_bx2 mt-4'>
                <ul>
                  <li><Link to='/contact-us' className='fw-bold'>Contact Us</Link></li>
                  <li><Link to='/blog' className='fw-bold'>Blog</Link></li>
                  <li><Link to='/privacy-policy' className='fw-bold'>Privacy Policy</Link></li>
                </ul>
              </div>
            </Col>

           

          </Row>
        </Container>

        <div className='bottom-bar'>
          <Container>
            <Row>
              <Col lg={12} className='text-center'>
                <p className='mb-0 cont'>Copyright © 2025 Acelot. All Rights Reserved.</p>
              </Col>
            </Row>
          </Container>
        </div>
      </section >




      <section className='footer'>
        <Container>
          <Row className='g-0'>
            <Col lg={4} xs={12}>
              <div className='logo-footer'>
                <Link to='/'>
                  <Image
                    src={logo}
                    className='img-fluid logo-footer-logo'
                    alt='Acelot'
                  />
                </Link>
                <h3 className='mt-4 fs-4 mb-2 fw-600'>Address : </h3>
                <p className='pe-5'>90 B Delhi – Jaipur Expressway, Udyog Vihar, Sector 18, Gurugram – 122018 ,Haryana, India</p>


                <div className='startupbx d-flex flex-wrap gap-4 mt-5'>
                  <div>
                    <img src={msme} className='' alt="" />
                  </div>
                  <div>
                    <img src={dpiit} className='' alt="" />
                  </div>
                   <div>
                    <img src={mepse} className='' alt="" />
                  </div>
                  {/*<div className=''>
                    <img src={certification1} className='' alt="" />
                  </div>
                  <div>
                    <img src={certification2} className='' alt="" />
                  </div> */}
                </div>
              </div>
            </Col>


            <Col lg={2} xs={12}>
              <div className='footer_bx1'>
                <h3>Quick Links:</h3>
                <ul>
                  <li><Link to='/'>Home</Link></li>
                  <li><Link to='/about-us'>About Us</Link></li>
                  <li><Link to='/blog'>Blog</Link></li>
                  <li><Link to='/contact-us'>Contact Us</Link></li>
                  <li><Link to='/privacy-policy'>Privacy Policy</Link></li>
                </ul>
              </div>
            </Col>

            <Col lg={2}  xs={12}>
              <div className='footer_bx1'>
                <h3>Our Products:</h3>
                <ul>
                  <li>
                    <Link to='/lms-platform'>
                      LMS Platform
                    </Link>
                  </li>
                  {/* <li>
                    <Link to='/' onClick={() => {
                      setTimeout(() => {
                        const el = document.getElementById('products');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    }}>
                      AI Proctoring
                    </Link>
                  </li> */}
                  <li>
                    <Link to='/corporate-training'>
                      Corporate Training
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={2}  xs={12}>
              <div className='footer_bx1'>
                <h3>Our Solutions:</h3>
                <ul>
                  <li><Link to='/onboarding-training'>Onboarding Training</Link></li>
                  <li><Link to='/product-training'>Product Training</Link></li>
                  <li><Link to='/remote-workforce-training'>Remote Workforce Training</Link></li>
                  <li><Link to='/sales-training'>Sales Training </Link></li>
                  <li><Link to='/compliance-training'>Compliance Training </Link></li>
                </ul>
              </div>
            </Col>
            <Col lg={2}  xs={12}>
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
              </div>
            </Col>

          </Row>


        </Container>

        <div className='bottom-bar'>
          <Container>
            <Row>
              <Col lg={7} className='text-start text-lg-start text-center'>
                <p className='mb-0 cont'>Copyright © 2025 Acelot. All Rights Reserved.</p>
              </Col>
              <Col lg={5} className='text-lg-end text-center'>
                <p className='mb-0 cont'><span>Build With</span> <i className='bx bxs-heart text-danger sdsd fs-3'></i>  <span> In India</span></p>
              </Col>
            </Row>
          </Container>
        </div>
      </section >
    </>
  );
};

export default Footer;


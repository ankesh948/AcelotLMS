import React from 'react'
import { Col, Container, Image, Row, Button } from 'react-bootstrap'
import Whyacelotlms from '../assets/images/Why-acelot-lms.png'
import { Link } from 'react-router-dom'

function Home_section_five() {
  return (
    <>
      <section className='home_section_five'>
        <Container>
          <Row className='align-items-center justify-content-center gx-5'>
            <Col lg={6}>
              <div className='whybx-left'>
                <Image src={Whyacelotlms} className='img-fluid' alt='' />
              </div>
            </Col>
            <Col lg={6}>
              <div className='whybx-right'>
                <h3 className='lead mb-4'><span className='blue'>Why</span> AcelotLMS ?</h3>
                <p className='subhead'>AcelotLMS is a powerful yet simple platform that makes learning easy and effective. It helps you create, manage, and track courses effortlessly, allowing both learners and administrators to focus on growth and success</p>
                <p className='cont'>With features like customisable courses, real-time progress tracking, and interactive tools, AcelotLMS keeps learners engaged while offering insights through detailed reports and analytics.</p>
                <p className='cont'>Secure, mobile-friendly, and cloud-based, AcelotLMS grows with your needs. It’s the perfect solution for a seamless, always-improving learning experience.</p>
                <Button as={Link} to={'solutions'} variant="primary" className="btn_two mt-4">
                  Find Out How
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Home_section_five
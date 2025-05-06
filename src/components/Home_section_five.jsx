import React from 'react'
import { Col, Container, Image, Row, Button } from 'react-bootstrap'
import Whyacelotlms from '../assets/images/Why-acelot-lms.png'
import { Link } from 'react-router-dom'

function Home_section_five() {
  return (
    <>
      <section className='home_section_five'>
        <Container>
          <Row className='align-items-center justify-content-center gx-lg-5'>
            {/* <Col lg={6}>
              <div className='whybx-left'>
                <Image src={Whyacelotlms} className='img-fluid' alt='' />
              </div>
            </Col> */}
            <Col lg={12}>
              <div className='whybx-right'>
                <h3 className='lead mb-4'>Why Choose <span className='blue'>Us?</span></h3>
                <p className='subhead'>At Acelot, we combine the timeless value of traditional learning with the flexibility of technology and AI. While classroom training offers direct interaction and structured learning, it can be limited by time, location, and scalability.  Our platform bridges these gaps by offering both self-paced and instructor-led learning, providing your team with the freedom to learn at their own pace while maintaining personalised guidance.
                </p>
                <p className='cont'>We enhance this experience with advanced, adaptive technologies that ensure every learner gets the most relevant and engaging content tailored to their needs. With Acelot, you get the best of both worlds—combining the structure and personal touch of traditional training with the flexibility and scalability of modern learning solutions.
                </p>
                <Button as={Link} to={'contact-us'} variant="primary" className="btn_two mt-4">
                  Know More
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
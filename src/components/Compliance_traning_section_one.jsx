import React from 'react'
import { Button, Col, Container, Row, Image } from 'react-bootstrap'
import banner from '../assets/images/compliance-banner.jpg'
import { Link } from 'react-router-dom'


function Compliance_traning_section_one() {
  return (
    <>
      <section className="banner_section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <div className="left_banner">
                <h1 className="slide_head mb-3">
                  Compliance Training
                </h1>
                <p className="slide_description">
                  Simplify Compliance Training with Acelot’s Easy-to-Use LMS
                </p>
                <p>Every organization needs compliance training to meet regulatory standards. But it’s not just about ticking boxes. With Acelot’s intuitive compliance training, your teams learn to follow industry regulations while reinforcing trust and professionalism in every interaction. When your employees understand the rules, they represent your brand with confidence—building long-term credibility where it counts most.
                </p>
                <Button as={Link} to={'/contact-us'} variant="primary" className="btn_two mt-4 mb-5">
                  Get a Demo
                </Button>
              </div>
            </Col>

            <Col lg={6}>
              <div className="right_banner text-center">
                <Image
                  src={banner}
                  alt=""
                  fluid
                  className="rounded"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Compliance_traning_section_one
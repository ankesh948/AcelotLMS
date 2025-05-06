import React from 'react'
import { Button, Col, Container, Row, Image } from 'react-bootstrap'
import banner from '../assets/images/remote-banner.png'
import { Link } from 'react-router-dom'


function Remote_workforce_section_one() {
  return (
    <>
      <section className="banner_section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <div className="left_banner">
                <h1 className="slide_head mb-3">
                  Remote Workforce Training
                </h1>
                <p className="slide_description">
                  Close the distance between teams and training.
                </p>
                <p>
                  Learning without boundaries—designed for today’s remote teams.
                </p>
                <Button as={Link} to={'/contact-us'} variant="primary" className="btn_two mt-4 mb-5">
                  Get Started
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

export default Remote_workforce_section_one
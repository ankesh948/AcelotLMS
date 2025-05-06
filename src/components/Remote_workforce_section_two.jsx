import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import img_one from '../assets/images/sales1.png'
import img_two from '../assets/images/sales2.png'
import img_three from '../assets/images/sales3.png'
import img_four from '../assets/images/sales4.png'


function Remote_workforce_section_two() {
  return (
    <>
      <section className="Onboarding_section_two">
        <Container>
          <Row className="gx-5 align-items-center justify-content-center">
            <Col lg={10} className="mb-4 text-center" data-aos="fade-down">
              <h1 className="lead mb-3">
                Why remote training has become a must for organisations in the new age of working?
              </h1>
            </Col>
          </Row>
          <Row>
            <Col lg={4} data-aos="fade-up" data-aos-delay="100">
              <div className="problem-bx">
                <img
                  src={img_one}
                  className="img-fluid w-50"
                  alt=""
                />
                <p className="phead fw-600">
                  Despite all our technological advances, Psico Smart reports that 68% of organisations still struggle to measure the real impact of their training programs.

                </p>
                

              </div>
            </Col>

            <Col lg={4} data-aos="fade-up" data-aos-delay="100">
              <div className="problem-bx">
                <img
                  src={img_three}
                  className="img-fluid w-50"
                  alt=""
                />
                <p className="phead fw-600">
                  Remote work has made us realise how much we miss casual coffee chats and quick desk-side conversations. Staying connected in a virtual setup remains a real challenge.

                </p>
                
              </div>
            </Col>

            <Col lg={4} data-aos="fade-up" data-aos-delay="100">
              <div className="problem-bx">
                <img
                  src={img_four}
                  className="img-fluid w-50"
                  alt=""
                />
                <p className="phead fw-600">
                  Traditional one-size-fits-all training programs fail to capture attention or maintain interest. When learners aren't engaged, information goes in one ear and out the other.
                </p>
               

              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Remote_workforce_section_two
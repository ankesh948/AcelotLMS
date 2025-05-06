import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import fourthsection from '../assets/images/corporate-banner.jpg'


function Remote_workforce_section_five() {
  return (
    <>
      <section className='Onboarding_section_four'>
        <Container>
          <Row className='align-items-center justify-content-center'>
            <Col lg={5}>
              <img src={fourthsection} className='img-fluid' alt="" />
            </Col>
            <Col lg={7}>
              <div>
                <h1 className='lead mb-5'>Why Acelot is the Smart Choice for Remote Workforce Training
                </h1>
                <ul>
                  <li> Quick Course Creation: Build and launch training modules in minutes.</li>
                  <li> Always-Updated Content: Onboarding materials stay relevant at all times.</li>
                  <li> Assessments to Reinforce Learning: Check understanding and retention easily.</li>
                  <li> Leaderboards to Keep Employees Engaged: Friendly competition encourages participation.</li>
                  <li> Multilingual Support: Deliver content in employees’ preferred languages for better clarity.</li>
                </ul>
              </div>
            </Col>
          </Row>

        </Container>
      </section>
    </>
  )
}

export default Remote_workforce_section_five
import React from 'react'
import {Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Remote_workforce_section_six() {
  return (
    <>
      <section className='extra_link_solution'>
        <Container>
          <Row className='justify-content-center'>
            <Col lg={10} className='text-center'>
              <h1 className='lead mb-5'>The Best Remote Training Software Does More Than Just Train
              </h1>
            </Col>
          </Row>

          <Row className='justify-content-center'>
            <Col lg={12} className='text-center'>
              <div className='extra_link mt-4'>
                <ul className="list-unstyled d-flex flex-wrap gap-3">
                  <li>
                    <Link to="/onboarding-training" data-discover="true">Onboarding Training</Link>
                  </li>
                  <li>
                    <Link to="/product-training" data-discover="true">Product Training</Link>
                  </li>
                  <li>
                    <Link to="/sales-training" data-discover="true">Sales Training</Link>
                  </li>
                  <li>
                    <Link to="/compliance-training" data-discover="true">Compliance Training</Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Remote_workforce_section_six
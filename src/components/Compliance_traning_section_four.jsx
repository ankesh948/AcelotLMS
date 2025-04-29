import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Compliance_traning_section_four() {
  return (
    <div>
      <section className='extra_link_solution'>
        <Container>
          <Row>
            <Col lg={12}>
              <h1 className='lead mb-5'>
                Learning goes beyond onboarding with Acelot.
              </h1>
              <div className='extra_link mt-4'>
                <ul className="list-unstyled d-flex flex-wrap gap-3">
                  <li>
                    <Link to={'/onboarding-training'}>Onboarding Training</Link>
                  </li>
                  <li>
                    <Link to={'/product-training'}>Product Training</Link>
                  </li>
                  <li>
                    <Link to={'/remote-workforce-training'}>Remote Workforce Training</Link>
                  </li>
                  <li>
                    <Link to={'/sales-training'}>Sales Training</Link>
                  </li>

                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default Compliance_traning_section_four
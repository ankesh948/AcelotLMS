import React from 'react'
import {Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Accordion } from 'react-bootstrap'

function Remote_workforce_section_seven() {
  return (
    <>
      <section className='Onboarding_section_five'>
        <Container>
          <Row>
            <Col lg={12} className="mb-4">
              <h2 className='lead'><span className='blue'>Frequently</span> asked questions</h2>
              <p className='subhead'>Can’t find any answer for your question? Ask our experts</p>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>How do remote workers get trained?
                  </Accordion.Header>
                  <Accordion.Body>
                    Remote workers get trained through Acelot’s remote workforce training software, which offers virtual classrooms, self-paced modules, and real-time collaboration tools for flexible, effective learning.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Which software is best for remote workforce training?
                  </Accordion.Header>
                  <Accordion.Body>
                    The best remote workforce training software supports instructor-led training, eLearning, and progress tracking—ideal for teams working across different locations.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>How can I train remotely?</Accordion.Header>
                  <Accordion.Body>
                    You can train remotely through digital platforms that offer online courses, live virtual classrooms, and interactive learning paths tailored to your role.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>What is remote training software?
                  </Accordion.Header>
                  <Accordion.Body>
                    Remote training software is a digital solution that helps organizations deliver, manage, and measure employee training, regardless of location or time zone.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Remote_workforce_section_seven
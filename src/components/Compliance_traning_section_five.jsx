import React from 'react'
import { Col, Container, Row, Accordion } from 'react-bootstrap'


function Compliance_traning_section_five() {
  return (
    <>
      <section className='Compliance_training_four'>
        <Container>
          <Row>
            <Col lg={12} className="mb-4">
              <h2 className='lead'><span className='blue'>Frequently</span> asked questions</h2>
              <p className='subhead'>Can’t find any answer for your question? Ask our experts</p>
            </Col>
          </Row>
          <Row>
            <Col lg={12} className="">
              <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>What is Compliance Training?</Accordion.Header>
                  <Accordion.Body>
                    <b>Compliance training</b> helps employees understand the laws, regulations, and ethical standards relevant to their roles. It ensures your team knows how to act responsibly and follow industry-specific legal and moral guidelines.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header> How does an LMS ensure compliance with regulations?
                  </Accordion.Header>
                  <Accordion.Body>
                    A Learning Management System (LMS) plays a key role in ensuring regulatory compliance. It tracks employee progress to confirm that all required training is completed on time. As regulations evolve, the LMS allows for quick and easy updates to training content, keeping learning materials current. It also provides a secure, centralized location for storing all compliance-related documents, making audits and reporting more efficient.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Can an LMS accommodate different industry-specific compliance requirements?
                  </Accordion.Header>
                  <Accordion.Body>
                    A flexible LMS can be customised to meet the specific compliance needs of different businesses. It ensures regulatory alignment and allows for the creation of industry-specific training modules, tailored to each organization’s unique requirements.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>What is scorm compliance in LMS?
                  </Accordion.Header>
                  <Accordion.Body>
                    <b>SCORM Compliance</b> ensures that eLearning content meets the SCORM (Sharable Content Object Reference Model) standards, allowing it to seamlessly integrate with any SCORM-compatible Learning Management System.
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

export default Compliance_traning_section_five
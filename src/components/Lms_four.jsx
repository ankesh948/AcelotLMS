import React from 'react'
import { Button, Col, Container, Row, Image } from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion';

function Lms_four() {
    return (
        <>
            <section className='Lms_four'>
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
                                    <Accordion.Header>What Does an LMS Do?</Accordion.Header>
                                    <Accordion.Body>
                                        AcelotLMS is more than just software—it’s your go-to solution for creating, organizing, and delivering effective training. Whether you're scaling learning across teams or tracking progress in real-time, our LMS makes it simple and impactful.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header> Does your LMS support unlimited users?</Accordion.Header>
                                    <Accordion.Body>
                                        AcelotLMS supports unlimited users, so your organization can scale freely and ensure access for every learner—no matter how big you grow. Want to learn more about our unlimited user plans? Drop us an email at .
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>How does Paradiso LMS ensure the security of our data?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        At AcelotLMS, security is our priority. We use advanced measures like data encryption, secure cloud hosting, regular security audits, and compliance with global standards to keep your data safe. Our robust security framework protects your organization and learners from unauthorized access and digital threats.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>Can AcelotLMS be integrated with existing systems within my organization?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        AcelotLMS easily connects with your existing systems—whether it’s CRMs like Salesforce, ERP platforms, HRIS tools, or apps like Zoom and Google Workspace. These integrations create a unified learning ecosystem that boosts efficiency and delivers a smooth, connected user experience.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4">
                                    <Accordion.Header> Does Acelot Have a Mobile App?</Accordion.Header>
                                    <Accordion.Body>
                                        Yes! AcelotLMS offers a mobile app that lets you deliver training anytime, anywhere—so your learners stay connected and engaged, no matter where they are.
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

export default Lms_four
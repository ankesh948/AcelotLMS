import React from 'react'
import { Button, Col, Container, Row, Image } from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion';


function Onboarding_section_five() {
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
                        <Col lg={12} className="">
                            <Accordion defaultActiveKey="0" flush>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>What can be automated with Acelot?</Accordion.Header>
                                    <Accordion.Body>
                                        Acelot lets you build custom learning paths with a mix of self-paced courses, instructor-led sessions, and task-based learning—delivered automatically at the right time. You can also set up reports to get alerts about new enrollments or overdue learners, so nothing slips through the cracks.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Does AcelotLMS integrate with my tools?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        AcelotLMS easily integrates with your eCommerce platform, HR systems, and content providers. It also supports single sign-on (SSO), secure authentication, and open APIs to keep everything connected and running smoothly.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>Can I Set up automated courses?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        AcelotLMS lets you build custom training paths that include self-paced learning, instructor-led sessions, and practical tasks—all delivered automatically over time. Instead of overwhelming new hires on day one, you can space out training in a way that’s easy to follow and easy to remember.

                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>What aspects of onboarding can I measure?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        AcelotLMS’s powerful analytics make it easy to monitor new hire progress and spot who might need extra support. Customise reports by user group, due date, or course status to stay on top of onboarding at every stage.
                                        AcelotLMS helps you build a smoother, smarter onboarding journey—backed by real data and employee insights.
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

export default Onboarding_section_five
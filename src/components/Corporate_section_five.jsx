import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';


function Corporate_section_five() {
    return (
        <>
            <section className='corporate_section_five'>
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
                                    <Accordion.Header>Do I get complete control over the LMS?</Accordion.Header>
                                    <Accordion.Body>
                                        Yes, the LMS provides full access to the entire platform to the trainer/administrator of the organization.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Can I add my courses?</Accordion.Header>
                                    <Accordion.Body>
                                        Yes, you can add your courses to the platform.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>Can you provide relevant courses if needed</Accordion.Header>
                                    <Accordion.Body>
                                        Yes, Acelot can offer relevant courses as required by the organization/trainer. Our team of experienced trainers and online content creators will work with your organisation to create customised content as per your needs. Alternatively, you have access to the entire suite of courses on our platform acelotacademy.com to choose from. Get in contact at info@acelot.in for your organisational needs.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>Do I pay for all modules individually?</Accordion.Header>
                                    <Accordion.Body>
                                        While most modules are grouped under a single plan, a few other modules, such as Acelot-provided courses, will carry a separate fee. Please visit here acelotacademy.com for more information.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4">
                                    <Accordion.Header>Which ERP platforms are supported?</Accordion.Header>
                                    <Accordion.Body>
                                        We are an API-based platform. Our tech team will integrate your existing ERP systems, ensuring a smooth experience for your users.
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="5">
                                    <Accordion.Header>How secure is the LMS?</Accordion.Header>
                                    <Accordion.Body>
                                        Our application is hosted on AWS/Azure with complete cover through SSL. Our CDN-based data management keeps your data secure along with a robust
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

export default Corporate_section_five
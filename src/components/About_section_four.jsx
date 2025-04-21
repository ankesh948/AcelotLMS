import React from 'react'
import { Col, Container, Row, Image } from 'react-bootstrap'
import img1 from '../assets/images/core-value.gif';
import Accordion from 'react-bootstrap/Accordion';


function About_section_four() {
    return (
        <>
            <section className="About_section_four">
                <Container>
                    <Row className='align-items-center justify-content-center'>
                        <Col lg={5}>
                            <Image src={img1} className='img-fluid rounded-5' />
                        </Col>
                        <Col lg={7}>
                            <div className="Missionvition_content">
                                <h1 className="lead mb-3">
                                    Core Values
                                </h1>
                                <p className='fs-4 fw-600'>Our values are at the core of who we are.</p>
                                <p className="subhead">
                                    They shape the way we work, the people we welcome into our team, and every decision we make as an organization.
                                </p>

                                <p> Our values connect us and inspire the broader Acelot community. At the heart of our organization lies a clear set of guiding principles that define who we are and how we operate.
                                    These values form the foundation of our culture and drive our commitment to excellence across all facets of our business.
                                </p>

                                <Accordion defaultActiveKey="0" flush>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Organization First, Team Second, I Last</Accordion.Header>
                                        <Accordion.Body>
                                            We believe in prioritizing the greater good of the organization above all else. By fostering a team-oriented mindset, we ensure that personal ambitions never come before the success of the company and its goals. Our team thrives because we put collective success ahead of individual recognition.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header> Customer Satisfaction as the Key Attitude</Accordion.Header>
                                        <Accordion.Body>
                                            Our customers are the cornerstone of everything we do. We aim to not only meet but exceed customer expectations by delivering value at every touchpoint. Customer satisfaction is more than a goal — it is the key attitude that shapes our approach and our commitment to long-term relationships.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>Engaged Organization - Customers, Employees, and Partners
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            Engagement is the bridge that connects our customers, employees, and partners. We foster an environment of collaboration, ensuring that every stakeholder is deeply involved and invested in our mutual success. Our engagement goes beyond business transactions, creating meaningful and lasting partnerships.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header>Way of Life: Humility, Integrity, and Honesty
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            We hold humility, integrity, and honesty as our core values. These virtues guide how we interact with others, make decisions, and approach challenges. For us, these principles are not just a way of working, but a way of life — creating a transparent, trustworthy culture that focuses on doing the right thing.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>


                            </div>
                        </Col>

                    </Row>
                </Container>
            </section>
        </>
    )
}

export default About_section_four
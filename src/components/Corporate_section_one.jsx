import React, { useState } from 'react'
import { Button, Col, Container, Row, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import corporate_banner from '../assets/images/bgmap.svg'

function Corporate_section_one() {


    return (
        <>
            <section className="banner_section">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6} className="mb-4 mb-lg-0">
                            <div className="left_banner">
                                <h1 className="slide_head mb-3">
                                    Corporate Training
                                </h1>
                                <p className="slide_description">
                                    AcelotLMS is your all-in-one corporate training platform, built to empower modern businesses.
                                </p>
                                <p>Whether you're launching a structured employee onboarding journey or need a powerful system to manage ongoing skill development, AcelotLMS delivers a seamless, scalable solution that boosts productivity and performance across your organisation.
                                </p>

                                <Button as={Link} to={'/contact-us'} variant="primary" className="btn_two mt-4 mb-5">
                                    Request a Demo
                                </Button>

                                {/* <div className="extra_link mt-5">
                                    <ul className="list-unstyled d-flex flex-wrap gap-3">
                                        <li><Link to="/">LMS Platform</Link></li>
                                        <li><Link to="/">AI Proctoring</Link></li>
                                    </ul>
                                </div> */}
                            </div>
                        </Col>

                        <Col lg={6}>
                            <div className="right_banner text-center">
                                <Image
                                    src={corporate_banner}
                                    alt="Corporate Learning Banner"
                                    fluid
                                    className="rounded"
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Corporate_section_one
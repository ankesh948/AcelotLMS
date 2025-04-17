import React, { useState } from 'react'
import { Button, Col, Container, Row, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import corporate_banner from '../assets/images/corporate-training.png'

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
                                    Build a future-ready workforce with Acelot.
                                </p>
                                <p>Acelot helps you elevate employee development with tailored training programs that drive performance, foster growth, and strengthen skills across your organisation. From onboarding to leadership development, we ensure your team is always learning and evolving.
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
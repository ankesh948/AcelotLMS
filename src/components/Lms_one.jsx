import React from 'react'
import { Button, Col, Container, Row, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import lms_banner from '../assets/images/lms-banner.jpg'


function Lms_one() {
    return (
        <>
            <section className="banner_section">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6} className="mb-4 mb-lg-0">
                            <div className="left_banner">
                                <h1 className="slide_head mb-3">
                                    What is AcelotLMS?
                                </h1>
                                <p className="slide_description">
                                Acelot LMS is a secure, scalable, and flexible platform built to deliver impactful learning experiences across organizations. 
                                </p>
                                <p>Whether you're training your teams, partners, or customers — we’ve got you covered.
                                </p>

                                <Button as={Link} to={'/contact-us'} variant="primary" className="btn_two mt-4 mb-5">
                                    Request a Demo
                                </Button>

                            </div>
                        </Col>

                        <Col lg={6}>
                            <div className="right_banner text-center">
                                <Image
                                    src={lms_banner}
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

export default Lms_one
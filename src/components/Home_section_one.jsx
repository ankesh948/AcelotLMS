import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import banner from '../assets/images/banner.jpg';

function HomeSectionOne() {
    return (
        <section className="home_banner_section">
            <Container>
                <Row className="align-items-center">
                    <Col lg={6} className="mb-4 mb-lg-0">
                        <div className="left_banner">
                            <h1 className="slide_head mb-3">
                                Corporate Learning That Drives Performance.
                            </h1>
                            <p className="slide_description">
                                Empower your workforce with tailored learning solutions for maximum growth and efficiency.
                            </p>

                            <Button variant="primary" className="btn_two mt-4">
                                Request a Demo
                            </Button>

                            <div className="extra_link mt-4">
                                <ul className="list-unstyled d-flex flex-wrap gap-3">
                                    <li><Link to="/">LMS Platform</Link></li>
                                    <li><Link to="/">AI Proctoring</Link></li>
                                    <li><Link to="/">Corporate Training</Link></li>
                                    <li><Link to="/">Resources</Link></li>
                                </ul>
                            </div>
                        </div>
                    </Col>

                    <Col lg={6}>
                        <div className="right_banner text-center">
                            <Image
                                src={banner}
                                alt="Corporate Learning Banner"
                                fluid
                                className="rounded"
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default HomeSectionOne;
import React from 'react'
import { Col, Container, Row, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Banner from '../assets/images/about-us-bg.jpg';


function About_section_one() {
    return (
        <>
            <section className="banner_section">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6} className="mb-4 mb-lg-0">
                            <div className="left_banner">
                                <h1 className="slide_head mb-3">
                                    About Us
                                </h1>
                                <p className="slide_description">
                                    Acelot is an innovative, technology-driven skill building house focused on empowering skill development and workforce readiness across India through dynamic learning solutions.
                                </p>
                                <p className='cont'>Founded in 2019 as a Business Transformation and Corporate Training house, Acelot has grown into a comprehensive provider of learning and training services, operating through two distinct business units: Acelot Business and Acelot LMS. Each unit addresses different aspects of learning, performance, and career advancement.
                                    With technology at its core, Acelot delivers impactful programs across EdTech, HRTech, and SalesTech—offering everything from proctoring and sales enablement to skilling interventions and corporate training solutions.
                                    Our integrated approach combines robust digital platforms with flexible learning models, making Acelot a one-stop destination for building capabilities, driving performance, and transforming careers.
                                </p>

                                <div className="extra_link mt-5">
                                    <ul className="list-unstyled d-flex flex-wrap gap-3">
                                        <li><Link to="/meet-team-acelot">Meet Team Acelot</Link></li>

                                    </ul>
                                </div>

                            </div>
                        </Col>

                        <Col lg={6}>
                            <div className="right_banner text-center">
                                <Image
                                    src={Banner}
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

export default About_section_one
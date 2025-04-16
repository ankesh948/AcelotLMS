import React from 'react'
import { Col, Container, Row, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';


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
                                    Acelot is an innovative EdTech organization committed to transforming India's employability landscape through advanced technology and dynamic learning solutions.  Founded in 2019 as a Business Transformation and Corporate Training house,
                                </p>
                                <p> we have expanded into a comprehensive provider of education and training services with three distinct business units: Acelot Business and Acelot LMS. Each unit addresses different aspects of learning and career advancement, making us a versatile player in the education sector.
                                </p>

                                <div className="extra_link mt-5">
                                    <ul className="list-unstyled d-flex flex-wrap gap-3">
                                        <li><Link to="/">Meet Team Acelot</Link></li>

                                    </ul>
                                </div>

                            </div>
                        </Col>

                        <Col lg={6}>
                            <div className="right_banner text-center">
                                <Image
                                    src='https://ehwmisgwycz.exactdn.com/wp-content/uploads/2023/09/Software-hero-image.png?strip=all&lossy=1&ssl=1'
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

export default About_section_one
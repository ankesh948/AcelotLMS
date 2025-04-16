import React from 'react'
import { Button, Col, Container, Row, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Solutions_section_one() {
    return (
        <>
            <section className="banner_section">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6} className="mb-4 mb-lg-0">
                            <div className="left_banner">
                                <h1 className="slide_head mb-3">
                                    Our Solutions
                                </h1>
                                <p className="slide_description">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates eligendi itaque quia minima iure aut impedit,  illo in nisi quam unde.
                                </p>
                                <Button variant="primary" className="btn_two mt-4 mb-5">
                                    Request a Demo
                                </Button>

                                <div className="extra_link mt-5">
                                    <ul className="list-unstyled d-flex flex-wrap gap-3">
                                        <li><Link to="/">LMS Platform</Link></li>
                                        <li><Link to="/">Corporate Training</Link></li>
                                        <li><Link to="/">Blogs</Link></li>
                                        {/* <li><Link to="/">AI Proctoring</Link></li> */}
                                    </ul>
                                </div>
                            </div>
                        </Col>

                        <Col lg={6}>
                            <div className="right_banner text-center">
                                <Image
                                    src='https://ehwmisgwycz.exactdn.com/wp-content/uploads/2023/09/Software-hero-image.png?strip=all&lossy=1&ssl=1'
                                    alt=""
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

export default Solutions_section_one
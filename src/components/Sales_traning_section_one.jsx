
import React from 'react'
import { Button, Col, Container, Row, Image } from 'react-bootstrap'
import banner from '../assets/images/sales-banner.jpg'
import { Link } from 'react-router-dom'

function Sales_traning_section_one() {
    return (
        <>
            <section className="banner_section">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6} className="mb-4 mb-lg-0">
                            <div className="left_banner">
                                <h1 className="slide_head mb-3">
                                    Sales Enablement
                                </h1>
                                <p className="slide_description">
                                    Build both your salespeople and your profits
                                </p>
                                <p>
                                    Achieve consistent results with flexible, high-impact sales training.
                                </p>
                                <Button as={Link} to={'/contact-us'} variant="primary" className="btn_two mt-4 mb-5">
                                    Get Started
                                </Button>
                            </div>
                        </Col>

                        <Col lg={6}>
                            <div className="right_banner text-center">
                                <Image
                                    src={banner}
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

export default Sales_traning_section_one
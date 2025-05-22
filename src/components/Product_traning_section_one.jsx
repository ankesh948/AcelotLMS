import React from 'react'
import banner from '../assets/images/onboarding-banner.png'
import { Button, Col, Container, Row, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Product_traning_section_one() {
    return (
        <>
            <section className="banner_section">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6} className="mb-4 mb-lg-0">
                            <div className="left_banner">
                                <h1 className="slide_head mb-3">
                                    Product Training
                                </h1>
                                <p className="slide_description">
                                    The smarter way to train on your product
                                </p>
                                <p>From sales teams to end-users, build product champions with one easy-to-use LMS.</p>
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

export default Product_traning_section_one
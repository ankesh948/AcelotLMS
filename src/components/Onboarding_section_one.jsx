import React from 'react'
import { Button, Col, Container, Row, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import banner from '../assets/images/onboarding-banner.png'

function Onboarding_section_one() {
    return (
        <>
            <section className="banner_section">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6} className="mb-4 mb-lg-0">
                            <div className="left_banner">
                                <h1 className="slide_head mb-3">
                                    Onboarding Training
                                </h1>
                                <p className="slide_description">
                                    Seamless employee onboarding that sets the tone
                                </p>
                                <p>With Acelot, you can create a smooth, automated onboarding experience that’s simple to manage and delightful to use. Help new hires feel connected, confident, and productive from day one—all with an intuitive LMS that puts people first.</p>
                                <Button as={Link} to={'/about-us'} variant="primary" className="btn_two mt-4 mb-5">
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

export default Onboarding_section_one
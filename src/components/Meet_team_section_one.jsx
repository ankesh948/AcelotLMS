import React from 'react'
import { Button, Col, Container, Row, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import map from '../assets/images/bgmap.svg'


function Meet_team_section_one() {
    return (
        <>
            <section className="banner_section">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6} className="mb-4 mb-lg-0">
                            <div className="left_banner">
                                <h1 className="slide_head mb-3">
                                    Meet Us
                                </h1>
                                <p className="slide_description">
                                    People Matter Most: we live by our values!
                                </p>
                                <p>At Acelot, our people are at the heart of everything we do—from the way we collaborate and innovate to how we build our products and support our clients. Our values shape our culture, guide our growth, and keep us grounded.</p>
                                <Button as={Link} to={'/about-us'} variant="primary" className="btn_two mt-4 mb-5">
                                    About Us
                                </Button>
                            </div>
                        </Col>

                        <Col lg={6}>
                            <div className="right_banner text-center">
                                <Image
                                    src={map}
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

export default Meet_team_section_one
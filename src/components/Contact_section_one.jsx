import React from 'react'
import { Button, Col, Container, Row, Image } from 'react-bootstrap'
import map from '../assets/images/bgmap.svg'

function Contact_section_one() {
    return (
        <>
            <section className="Contact_banner_section">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6} className="mb-4 mb-lg-0">
                            <div className="left_banner">
                                <p className='fs-3 mb-0 blue'>AcelotLMS</p>
                                <h1 className="lead mb-3">
                                   Contact Us
                                </h1>
                                <p className='slide_description'>Need help choosing a Acelot product or can’t find answers to your question in our FAQ centre? Our team is here to help!</p>
                            </div>
                        </Col>

                        <Col lg={6}>
                            <div className="right_banner contactbg text-center">
                                <Image
                                    src={map}
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

export default Contact_section_one
import React from 'react'
import { Col, Container, Row, Image } from 'react-bootstrap'
import mission from '../assets/images/mission.png'
import vision from '../assets/images/vision.png'

function About_section_two() {
    return (
        <>
            <section className="About_section_two">
                <Container>
                    <Row className="gx-5">
                        <Col lg={5} className="mb-4 mb-lg-0">
                            <div className='Missionvition'>
                                <h1 className="lead mb-3">
                                    Mission & Vision
                                </h1>

                            </div>
                        </Col>
                        <Col lg={7}>
                            <div className="Missionvition_content">
                                <div className='Missionvition_content_inner'>
                                    <div className='d-flex align-items-center gap-2 mb-2'>
                                        <div>
                                            <Image src={mission} alt="" />
                                        </div>
                                        <p className="subhead fw-600 mb-0">Mission</p>
                                    </div>
                                    <p>Accelerating Career and Business Growth through Education, Learning, Occupational training, and Technology.
                                    </p>
                                </div>

                                <div className='Missionvition_content_inner'>
                                    <div className='d-flex align-items-center gap-2 mb-2'>
                                        <div>
                                            <Image src={vision} alt="" />
                                        </div>
                                        <p className="subhead fw-600 mb-0">Vision</p>
                                    </div>

                                    <p>To be a catalyst in our customers' business by enabling them to achieve profitable growth through our Consulting, Coaching, and Contracting services, while driving individual and organizational success through Career Solutions that foster Employability and Entrepreneurship.
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default About_section_two
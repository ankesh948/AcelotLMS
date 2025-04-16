import React from 'react'
import { Col, Container, Row, Image } from 'react-bootstrap'
import img1 from '../assets/images/Onboarding-training.webp';


function About_section_four() {
    return (
        <>
            <section className="About_section_four">
                <Container>
                    <Row className='align-items-center justify-content-center'>
                        <Col lg={6}>
                            <Image src={img1} className='img-fluid' />
                        </Col>
                        <Col lg={6}>
                            <div className="Missionvition_content">
                                <h1 className="lead mb-3">
                                    Core Values
                                </h1>
                                <p className='fs-4 fw-600'>Our values are at the core of who we are.</p>
                                <p className="subhead">
                                    They shape the way we work, the people we welcome into our team, and every decision we make as an organization. Our values connect us and inspire the broader Acelot community.
                                </p>

                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt dolores reprehenderit ex commodi deserunt fugit, hic possimus tempora doloribus blanditiis omnis est, qui voluptatibus a facere voluptatum quibusdam soluta. In aperiam et adipisci voluptas, inventore omnis alias, at placeat tempore cumque vero. Perspiciatis odio rerum a aliquid! Iusto architecto debitis minima. Dolorem labore quisquam vero ipsam? Accusamus alias quos aliquam.</p>

                            </div>
                        </Col>

                    </Row>
                </Container>
            </section>
        </>
    )
}

export default About_section_four
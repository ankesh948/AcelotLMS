import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

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
                                <p className="subhead">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed non porro ducimus iure est. Praesentium, nam tempore iusto quas consectetur quis laudantium error dicta eaque expedita quibusdam ducimus.
                                </p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt dolores reprehenderit ex commodi deserunt fugit, hic possimus tempora doloribus blanditiis omnis est, qui voluptatibus a facere voluptatum quibusdam soluta. In aperiam et adipisci voluptas, inventore omnis alias, at placeat tempore cumque vero. Perspiciatis odio rerum a aliquid! Iusto architecto debitis minima. Dolorem labore quisquam vero ipsam? Accusamus alias quos aliquam.</p>
                                <p>qui voluptatibus a facere voluptatum quibusdam soluta. In aperiam et adipisci voluptas, inventore omnis alias, at placeat tempore cumque vero. Perspiciatis odio rerum a aliquid! Iusto architecto debitis minima. Dolorem labore quisquam vero ipsam? Accusamus alias quos aliquam.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default About_section_two
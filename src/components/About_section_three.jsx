import React from 'react'
import { Col, Container, Row, Image } from 'react-bootstrap'


function About_section_three() {
    return (
        <>
            <section className="About_section_three">
                <Container>
                    <Row className="gx-5">
                        <Col lg={12} className="mb-4 mb-lg-0">
                            <div className='historybx text-center mb-5'>
                                <h1 className="lead mb-3">
                                    History or Journey of the Company
                                </h1>
                                <p className="subhead">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed non porro ducimus iure est. Praesentium, nam tempore iusto quas consectetur quis laudantium error dicta eaque expedita quibusdam ducimus.
                                </p>
                            </div>

                        </Col>
                    </Row>
                    <Row className='gx-5 align-items-center justify-content-center'>
                        <Col lg={5}>
                            <div className="Missionvition_content">
                                <p className='lead3'>Aliquid sit dicta nisi maxime dignissimos quibusdam consectetur.</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt dolores reprehenderit ex commodi deserunt fugit, hic possimus tempora doloribus blanditiis omnis est, qui voluptatibus a facere voluptatum quibusdam soluta. In aperiam et adipisci</p>
                            </div>
                            <div className="Missionvition_content">
                                <p className='lead3'>Aliquid sit dicta nisi maxime.</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt dolores reprehenderit ex commodi deserunt fugit, hic possimus tempora doloribus blanditiis omnis est, qui voluptatibus a facere voluptatum quibusdam soluta. In aperiam et adipisci voluptas, inventore omnis alias, at placeat tempore cumque vero. Perspiciatis odio rerum a aliquid! Iusto architecto debitis minima. Dolorem lm.</p>
                            </div>
                        </Col>
                        <Col lg={7}>
                            <video
                                width="100%"
                                height="auto"
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="custom-video"
                            >
                                <source src="https://videocdn.cdnpk.net/videos/a9a82081-8328-5a3b-a4ec-3eb3952bb284/horizontal/previews/watermarked/large.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </Col>
                    </Row>


                </Container>
            </section>
        </>
    )
}

export default About_section_three
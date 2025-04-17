import React from 'react'
import { Button, Col, Container, Row, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Solutions_section_two() {
    return (
        <>
            <section className="Solutions_section_two">
                <Container>
                    <Row className="gx-5 align-items-center justify-content-center">
                        <Col lg={8} className="mb-4 text-center">
                            <h1 className="lead mb-3">
                                The high stakes of compliance: a single oversight could derail your business
                            </h1>
                            <p className='subhead'>Failing to keep up with policies and regulations puts your entire organization at risk. Here’s what happens when compliance training is ineffective, incomplete, or outdated:</p>
                        </Col>

                    </Row>
                    <Row>
                        <Col lg={4}>
                            <div className="problem-bx">
                                <p className='lead5 fw-600'>High risk of compliance breaches
                                </p>
                                <img src="https://www.easygenerator.com/wp-content/uploads/2025/01/1-4.png" className='img-fluid' alt="" />
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="problem-bx">
                                <p className='lead5 fw-600'>Regulatory penalties and legal action</p>
                                <img src="https://www.easygenerator.com/wp-content/uploads/2025/01/2-4.png" className='img-fluid' alt="" />
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="problem-bx">
                                <p className='lead5 fw-600'>Reputational damage to the business</p>
                                <img src="https://www.easygenerator.com/wp-content/uploads/2025/01/3-7.png" className='img-fluid' alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>




            {/* <section className="Solutions_section_two ">
                <Container className='bg-white'>
                    <Row className="gx-5">
                        <Col lg={5} className="mb-4 mb-lg-0">
                            <div className=''>
                                <h1 className="lead mb-3">
                                    Personalized learning, Gamification, Mobile learning.
                                </h1>
                            </div>
                        </Col>
                        <Col lg={7}>
                            <div className="">
                                <p className='lead3'>Personalized learning</p>
                                <p className="subhead">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed non porro ducimus iure est. Praesentium dicta eaque expedita quibusdam ducimus.
                                </p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt dolores reprehenderit ex commodi deserunt fugit, hic possimus tempora doloribus blanditiis omnis est, qui voluptatibus a facere voluptatum quibusdam soluta. In aperiam et adipisci voluptas, inventore omnis alias, at placeat tempore cumque vero.</p>

                                <p className='lead3'>Gamification</p>
                                <p className="">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed non porro ducimus iure est. Praesentium dicta eaque expedita quibusdam ducimus.
                                </p>

                                <p className='lead3'>Mobile learning</p>
                                <p className="">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed non porro ducimus iure est. Praesentium dicta eaque expedita quibusdam ducimus.
                                </p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt dolores reprehenderit ex commodi deserunt.</p>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </section> */}
        </>
    )
}

export default Solutions_section_two
import React from 'react'
import { Button, Col, Container, Row, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Solutions_section_two() {
    return (
        <>
            <section className="Solutions_section_two">
                <Container>
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
            </section>
        </>
    )
}

export default Solutions_section_two
import React from 'react'
import { Button, Col, Container, Row, Image } from 'react-bootstrap'

import sec_third from '../assets/images/sec-third.png'
import employee from '../assets/images/employee.png'
import success from '../assets/images/success.png'
import generation_z from '../assets/images/generation-z.png'

function Sales_traning_section_three() {
    return (
        <>
            <section className='Onboarding_section_three'>
                <Container>
                    <Row className='gx-lg-5 align-items-center'>
                        <Col lg={7}>
                            <h2 className='lead mb-5' data-aos="fade-right">
                                Sales Training by the Numbers: Why It’s a Game Changer
                            </h2>
                            <div className='d-flex flex-wrap gap-4'>
                                <div className='number_Sec' data-aos="fade-up" data-aos-delay="100">
                                    <img src={success} alt="An employee actively using the AcelotLMS platform on their computer for professional development." />
                                    <h3>29%</h3>
                                    <p className='lead4'>
                                    Of sales professionals who receive weekly one-on-one coaching are top performers.
                                    </p>
                                </div>
                                <div className='number_Sec' data-aos="fade-up" data-aos-delay="200">
                                    <img src={employee} alt="A professional corporate training session being conducted by an expert Acelot trainer." />
                                    <h3>73%</h3>
                                    <p className='lead4'>
                                       Of customers expect better personalization from a brand with the advancement of technology.
                                    </p>
                                </div>
                                <div className='number_Sec' data-aos="fade-up" data-aos-delay="300">
                                    <img src={generation_z} alt="A graphic showing sales professionals being trained to effectively identify and solve customer problems." />
                                    <h3>56%</h3>
                                    <p className='lead4'>
                                        Of customers say that they often have to repeat or re-explain information to different representations.

                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={5} data-aos="zoom-in">
                            <img src={sec_third} className='img-fluid' alt="A collage of pictures featuring the dedicated and passionate team behind Acelot." />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Sales_traning_section_three
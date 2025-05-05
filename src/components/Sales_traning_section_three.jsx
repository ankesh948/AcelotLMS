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
                            <div className='d-flex gap-4'>
                                <div className='number_Sec' data-aos="fade-up" data-aos-delay="100">
                                    <img src={success} alt="icons" />
                                    <h3>76%</h3>
                                    <p className='lead4'>
                                        Of leaders attribute improvements in sales performance to their investments in sales enablement.
                                    </p>
                                </div>
                                <div className='number_Sec' data-aos="fade-up" data-aos-delay="200">
                                    <img src={employee} alt="icons" />
                                    <h3>73%</h3>
                                    <p className='lead4'>
                                       Of customers expect better personalization from a brand with the advancement of technology.
                                    </p>
                                </div>
                                <div className='number_Sec' data-aos="fade-up" data-aos-delay="300">
                                    <img src={generation_z} alt="icons" />
                                    <h3>56%</h3>
                                    <p className='lead4'>
                                        Of customers say that they often have to repeat or re-explain information to different representations.

                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={5} data-aos="zoom-in">
                            <img src={sec_third} className='img-fluid' alt="" />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Sales_traning_section_three
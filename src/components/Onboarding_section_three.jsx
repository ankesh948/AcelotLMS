import React from 'react'
import { Button, Col, Container, Row, Image } from 'react-bootstrap'

import sec_third from '../assets/images/sec-third.png'
import employee from '../assets/images/employee.png'
import success from '../assets/images/success.png'
import generation_z from '../assets/images/generation-z.png'

function Onboarding_section_three() {
    return (
        <>
            <section className='Onboarding_section_three'>
                <Container>
                    <Row className='gx-lg-5 align-items-center'>
                        <Col lg={7}>
                            <h2 className='lead mb-5' data-aos="fade-right">
                                Onboarding by the Numbers: Why It’s a Game Changer
                            </h2>
                            <div className='d-flex gap-4'>
                                <div className='number_Sec' data-aos="fade-up" data-aos-delay="100">
                                    <img src={success} alt="icons" />
                                    <h3>20%</h3>
                                    <p className='lead4'>
                                        Sucessful onboarding increases an employee’s efforts by more than 20% and drive employee performances by 15%.
                                    </p>
                                </div>
                                <div className='number_Sec' data-aos="fade-up" data-aos-delay="200">
                                    <img src={employee} alt="icons" />
                                    <h3>67%</h3>
                                    <p className='lead4'>
                                        67% of Gen Z employees said that onboarding made them feel welcome and valued in their new company.
                                    </p>
                                </div>
                                <div className='number_Sec' data-aos="fade-up" data-aos-delay="300">
                                    <img src={generation_z} alt="icons" />
                                    <h3>69%</h3>
                                    <p className='lead4'>
                                        69% of employees who have an exceptional onboarding experience are likely to stick around for at least 3 years
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

export default Onboarding_section_three
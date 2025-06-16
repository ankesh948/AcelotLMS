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
                            <h2 className='lead mb-5'>
                            Onboarding by the Numbers: Why It’s a Game Changer
                            </h2>
                            <div className='d-flex flex-wrap gap-4'>
                                <div className='number_Sec'>
                                    <img src={success} alt="An icon showing a group of new employees during their onboarding process." />
                                    <h3>15%</h3>
                                    <p className='lead4'>
                                    Sucessful onboarding increases an employee’s efforts by more than 20% and drive employee performances by 15%. 
                                    </p>
                                </div>
                                <div className='number_Sec'>
                                    <img src={employee} alt="An icon representing Gen Z employees engaging with modern onboarding solutions." />
                                    <h3>67%</h3>
                                    <p className='lead4'>
                                        Of Gen Z employees said that onboarding made them feel welcome and valued in their new company.
                                    </p>
                                </div>
                                <div className='number_Sec'>
                                    <img src={generation_z} alt="A dynamic and interactive employee onboarding session in progress." />
                                    <h3>69%</h3>
                                    <p className='lead4'>
                                    Of employees who have an exceptional onboarding experience are likely to stick around for at least 3 years
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={5}>
                            <img src={sec_third} className='img-fluid' alt="New hires participating in a collaborative onboarding training session." />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Onboarding_section_three
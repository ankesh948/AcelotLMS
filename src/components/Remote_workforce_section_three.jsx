import React from 'react'
import {Col, Container, Row } from 'react-bootstrap'

import sec_third from '../assets/images/sec-third.png'
import remote_worker from '../assets/images/remote-worker.png'
import remote_banner from '../assets/images/companies.png'
import remote_employee from '../assets/images/remote-employee.png'


function Remote_workforce_section_three() {
  return (
    <>
            <section className='Onboarding_section_three'>
                <Container>
                    <Row className='gx-lg-5 align-items-center'>
                        <Col lg={7}>
                            <h2 className='lead mb-5' data-aos="fade-right">
                                Remote Workforce Training by the Numbers: Why It’s a Game Changer
                            </h2>
                            <div className='d-flex gap-4'>
                                <div className='number_Sec' data-aos="fade-up" data-aos-delay="100">
                                    <img src={remote_banner} alt="icons" />
                                    <h3>85%</h3>
                                    <p className='lead4'>
                                        Of companies have revised training programs for remote work.
                                    </p>
                                </div>
                                <div className='number_Sec' data-aos="fade-up" data-aos-delay="200">
                                    <img src={remote_worker} alt="icons" />
                                    <h3>67%</h3>
                                    <p className='lead4'>
                                        Of remote workers feel they need more specific training.
                                    </p>
                                </div>
                                <div className='number_Sec' data-aos="fade-up" data-aos-delay="300">
                                    <img src={remote_employee} alt="icons" />
                                    <h3>36%</h3>
                                    <p className='lead4'>
                                        Of remote employees find onboarding confusing. More than one-third of employees starting a new job remotely report feeling under-trained and disoriented during the onboarding process.
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

export default Remote_workforce_section_three
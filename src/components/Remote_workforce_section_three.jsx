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
                            <h2 className='lead mb-5'>
                                Remote Workforce Training by the Numbers: Why It’s a Game Changer
                            </h2>
                            <div className='d-flex flex-wrap gap-4'>
                                <div className='number_Sec'>
                                    <img src={remote_banner} alt="A collage of logos from companies that use AcelotLMS for their remote workforce training." />
                                    <h3>85%</h3>
                                    <p className='lead4'>
                                        Of companies have revised training programs for remote work.
                                    </p>
                                </div>
                                <div className='number_Sec'>
                                    <img src={remote_worker} alt="An image of a professional and productive remote worker engaged in online training." />
                                    <h3>67%</h3>
                                    <p className='lead4'>
                                        Of remote workers feel they need more specific training.
                                    </p>
                                </div>
                                <div className='number_Sec'>
                                    <img src={remote_employee} alt="A remote employee effectively learning and developing new skills using AcelotLMS." />
                                    <h3>36%</h3>
                                    <p className='lead4'>
                                        Of remote employees find onboarding confusing. More than one-third of employees starting a new job remotely report feeling under-trained and disoriented during the onboarding process.
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={5}>
                            <img src={sec_third} className='img-fluid' alt="A graphic illustrating why AcelotLMS is a smart and effective choice for remote workers." />
                        </Col>
                    </Row>
                </Container>
            </section>
    </>
  )
}

export default Remote_workforce_section_three
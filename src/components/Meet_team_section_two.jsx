import React from 'react'
import { Col, Container, Row, Image, Button } from 'react-bootstrap'
import img2 from '../assets/images/img2.png'
import { Link } from 'react-router-dom'


function Meet_team_section_two() {
    return (
        <>
            <section className="Meet_team_section_three">
                <Container>
                    <Row className='justify-content-center'>
                        <Col lg={10} className='text-center mb-4'>
                            <h1 className='lead'>Founders</h1>
                            <p className='subhead'>What some see as a setback, we see as a launchpad for innovation. Our vision fuels our journey, helping us navigate the ever-changing landscape of SaaS with creativity and purpose.</p>
                        </Col>
                    </Row>

                    <Row className='gx-5 align-items-center justify-content-center'>
                        <Col lg={6}>
                            <div className='leaders'>
                                <img src="https://cdn.acelotlms.com/assets/frontend/acelot/about_us_images/Debashish-Sen.jpg" className='rounded-4' alt="" />
                                <h2 className='leader_heading mb-0'>Debashish Sen</h2>
                                <p className='subhead blue mb-0'>Co - Founder and CEO</p>
                                <Button as={Link} to={'https://www.linkedin.com/in/debashish-sen/'} target='_blank' className="btn-sm btn-light mt-2" >
                                    <div className='d-flex align-items-center gap-1'>
                                        <i className='bx bxl-linkedin-square fs-3' ></i>
                                        <span>Linkedin</span>
                                    </div>
                                </Button>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className='leaders'>
                                <img src="https://cdn.acelotlms.com/assets/frontend/acelot/about_us_images/joydeb.png" className='rounded-4' alt="" />
                                <h2 className='leader_heading mb-0'>Joydeb Mukherjee</h2>
                                <p className='subhead blue mb-0'>Founder and Director</p>
                                 <Button as={Link} to={'https://www.linkedin.com/in/joydeb1/'} target='_blank' className="btn-sm btn-light mt-2" >
                                    <div className='d-flex align-items-center gap-1'>
                                        <i className='bx bxl-linkedin-square fs-3' ></i>
                                        <span>Linkedin</span>
                                    </div>
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Meet_team_section_two
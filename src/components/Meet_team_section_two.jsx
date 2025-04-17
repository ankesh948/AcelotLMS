import React from 'react'
import { Col, Container, Row, Image } from 'react-bootstrap'
import img2 from '../assets/images/img2.png'


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
                                <img src="https://cdn.acelotlms.com/assets/frontend/acelot/about_us_images/Debashish-Sen.jpg" alt="" />
                                <h2 className='leader_heading mb-0'>Debashish Sen</h2>
                                <p className='subhead blue mb-0'>Business Director and CEO</p>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className='leaders'>
                                <img src="https://cdn.acelotlms.com/assets/frontend/acelot/about_us_images/joydeb.png" alt="" />
                                <h2 className='leader_heading mb-0'>Joydeb Mukherjee</h2>
                                <p className='subhead blue mb-0'>Business Director and CEO</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Meet_team_section_two
import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import img2 from '../assets/images/img2.png'

import video from '../assets/images/dynamite.mp4'

function Corporate_section_two() {
    return (
        <>
            <section className='corporate_section_one'>
                <Container>
                    <Row className='gx-5 align-items-center'>
                        <Col lg={6}>
                            {/* <img src={img2} className='img-fluid rounded-5' alt="" /> */}
                            <video
                                src={video}
                                autoPlay
                                muted
                                loop
                                controls
                                className='rounded-5'
                                style={{ width: '100%', height: 'auto' }}
                            >
                                Your browser does not support the video tag.
                            </video>
                            
                        </Col>
                        <Col lg={6}>
                            <h1 className='lead'>B2B Sales Specialist</h1>
                            <p className="subhead mb-3">Customised B2B Training Solutions for Transformative Success</p>
                            <p className='cont'>We offer customised training programs and strategic consultancy to help B2B organisations enhance their performance and achieve tangible results.
                            </p>
                            <p className='cont'> Our unique 5D methodology—Discover, Define, Design, Deliver, and Determine Impact—ensures that our solutions are aligned with your business goals, driving meaningful transformation and long-term success.</p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Corporate_section_two
import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function About_section_five() {
    return (
        <>
             <section className="About_section_five">
                <Container>
                    <Row className='align-items-center justify-content-center'>
                        <Col lg={12} className='text-center'>
                            <div className="ctasection">
                                <h1 className="lead2 mb-5 text-white">
                                    Start Your Corporate Training
                                </h1>
                                <Button as={Link} to={'/contact-us'} variant='primary' className='btn_three'>Get Started it's Free</Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default About_section_five
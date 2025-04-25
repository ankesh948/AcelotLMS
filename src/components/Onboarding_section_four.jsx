import React from 'react'
import { Button, Col, Container, Row, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Onboarding_section_four() {
    return (
        <>
            <section className='Onboarding_section_four'>
                <Container>
                    <Row className='align-items-center justify-content-center'>
                        <Col lg={10} className='text-center mb-5'>
                            <h1 className='lead'>Ace Onboarding Training: Speed Up Time-to-Productivity </h1>
                            <p className='subhead'>Deliver consistent, role-based onboarding that helps new hires contribute faster.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}>
                            <div className='ProductivityBx'>
                                <h3>Reduce Time-to-Productivity with Automated Onboarding</h3>
                                <p>Create seamless, zero-touch onboarding experiences using smart automation. Add learning modules as key milestones and track every new hire’s progress—so they ramp up faster, with less manual effort.</p>
                            </div>
                            <div className='ProductivityBx'>
                                <h3>Reduce Employee Turnover with Personalised Onboarding
                                </h3>
                                <p>Cut early attrition and lower hiring costs with tailored onboarding experiences that truly connect. By engaging new hires from day one, you build stronger retention, increase job satisfaction, and boost long-term employee success.
                                </p>
                            </div>
                            <div className='ProductivityBx'>
                                <h3>Optimise Your Onboarding Strategy with Actionable Analytics</h3>
                                <p>Create seamless, zero-touch onboarding experiences using smart automation. Add learning modules as key milestones and track every new hire’s progress—so they ramp up faster, with less manual effort.</p>
                            </div>
                        </Col>
                    </Row>
                
                </Container>
            </section>
        </>
    )
}

export default Onboarding_section_four
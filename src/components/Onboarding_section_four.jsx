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
                            <h1 className='lead'>Ace Onboarding Training: Speed Up Time-to-Productivity
                            </h1>
                            <p className='subhead'>Deliver consistent, role-based onboarding that helps new hires contribute faster.
                            </p>
                        </Col>
                    </Row>
                    <Row className='align-items-center justify-content-center'>
                        <Col lg={10}>
                            <div className='ProductivityBx' data-aos="fade-right" data-aos-delay="100">
                                <h3>Automate the Onboarding Journey</h3>
                                <p>Create seamless, zero-touch onboarding experiences using smart automation. Add learning modules as key milestones and track every new hire’s progress—so they ramp up faster, with less manual effort.</p>
                            </div>
                            <div className='ProductivityBx' data-aos="fade-right" data-aos-delay="150">
                                <h3>Trigger-Based Scheduling & Reminders
                                </h3>
                                <p>Use smart automation to schedule onboarding tasks, send personalized welcome emails, and set reminders to ensure timely completion.
                                </p>
                            </div>
                            <div className='ProductivityBx' data-aos="fade-right" data-aos-delay="200">
                                <h3>Track Progress with Real-Time Analytics</h3>
                                <p>Monitor every new hire’s training journey with visual dashboards. Get instant insights into course completions, engagement levels, and onboarding milestones.
                                </p>
                            </div>

                            <div className='ProductivityBx' data-aos="fade-right" data-aos-delay="250">
                                <h3>Personalize Every Learning Path</h3>
                                <p>Create tailored onboarding experiences based on job role, team, or location. Customise modules and pace to fit individual needs.
                                </p>
                            </div>

                            <div className='ProductivityBx' data-aos="fade-right" data-aos-delay="300">
                                <h3>Centralized Onboarding Library</h3>
                                <p>Store and organize all onboarding materials—videos, handbooks, policies, quizzes—in one secure, searchable place.
                                </p>
                            </div>

                            <div className='ProductivityBx' data-aos="fade-right" data-aos-delay="350">
                                <h3>Seamless HRIS Integration</h3>
                                <p>Sync employee data from your HR systems to auto-enroll new hires and streamline progress tracking across platforms.
                                </p>
                            </div>
                        </Col>
                    </Row>
                
                </Container>
            </section>
        </>
    )
}

export default Onboarding_section_four
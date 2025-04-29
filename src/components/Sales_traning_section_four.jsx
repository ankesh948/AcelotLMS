import React from 'react'
import { Button, Col, Container, Row, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Sales_traning_section_four() {
    return (
        <>
            <section className='Onboarding_section_four'>
                <Container>
                    <Row className='align-items-center justify-content-center'>
                        <Col lg={10} className='text-center mb-5'>
                            <h1 className='lead'>Equip Your Team to Exceed Their Sales Targets
                            </h1>
                            <p className='subhead'>An effective sales enablement strategy gives your reps the tools, training, and confidence to close more deals—boosting performance across your entire organization.</p>
                        </Col>
                    </Row>
                    <Row className='align-items-center justify-content-center'>
                        <Col lg={10}>
                            <div className='ProductivityBx' data-aos="fade-right" data-aos-delay="100">
                                <h3>Boost sales productivity with flexible training</h3>
                                <p>Create seamless, zero-touch onboarding experiences using smart automation. Add learning modules as key milestones and track every new hire’s progress - so they ramp up faster, with less manual effort.</p>
                            </div>
                            <div className='ProductivityBx' data-aos="fade-right" data-aos-delay="200">
                                <h3>Cut training costs with smarter delivery
                                </h3>
                                <p>A centralised LMS ensures your team gets the right training at the right time—without the extra expense. Keep everyone aligned with best practices while saving on time, travel, and resources.
                                </p>
                            </div>
                            <div className='ProductivityBx' data-aos="fade-right" data-aos-delay="300">
                                <h3>Boost retention and keep employees engaged</h3>
                                <p>Engaged employees are more likely to stay—and thrive. By reducing churn among top talent, you save on hiring and training costs while building a stronger, more consistent brand over time.
                                </p>
                            </div>
                        </Col>
                    </Row>
                
                </Container>
            </section>
        </>
    )
}

export default Sales_traning_section_four
import React from 'react'
import { Button, Col, Container, Row, Image } from 'react-bootstrap'


function Lms_three() {
    return (
        <>
            <section className="Lms_three">
                <Container>
                    <Row className="gx-5 align-items-center justify-content-center">
                        <Col lg={8} className="mb-4 text-center">
                            <h1 className="lead mb-3">
                                Why Choose Acelot LMS?
                            </h1>
                            <p className='subhead'>AcelotLMS is designed to support all learners through an inclusive interface, built-in accessibility checkers, text-to-speech features, and more—making learning easy and engaging for everyone.
                            </p>
                        </Col>

                    </Row>
                    <Row>
                        <Col lg={3}>
                            <div className="Acelot-bx">
                                <img src="https://www.easygenerator.com/wp-content/uploads/2025/01/1-4.png" className='img-fluid' alt="" />
                                <p className='lead5 fw-600'>Scalable, sustainable success
                                </p>
                                <p className='cont'>Scaling fast is exciting—but only if your people and systems are ready to rise. Rapid growth demands a learning solution that doesn’t just keep up—it leads the way. With intelligent automation and streamlined workflows, AcelotLMS empowers you to train more, manage less, and scale smarter—securely and sustainably, no matter how fast you grow.
                                </p>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className="Acelot-bx">
                                <img src="https://www.easygenerator.com/wp-content/uploads/2025/01/1-4.png" className='img-fluid' alt="" />
                                <p className='lead5 fw-600'>Content Libraries</p>
                                <p className="cont">Get started with AcelotLMS on day one with 70+ ready-to-deploy courses. Already have your own content from platforms like LinkedIn Learning? Easily integrate it into AcelotLMS with our seamless content integration tools.</p>

                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className="Acelot-bx">
                                <img src="https://www.easygenerator.com/wp-content/uploads/2025/01/1-4.png" className='img-fluid' alt="" />
                                <p className='lead5 fw-600'>Create a Learning Hub</p>
                                <p className="cont">With AcelotLMS, you can easily store videos, PDFs, SCORM files, and more—all in one secure platform. Need to create content? Use our built-in video creation and editing tools to produce professional-quality training material. It’s a smarter, more secure solution than uploading to platforms like YouTube.</p>

                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className="Acelot-bx">
                                <img src="https://www.easygenerator.com/wp-content/uploads/2025/01/1-4.png" className='img-fluid' alt="" />
                                <p className='lead5 fw-600'>Save Time and Cut Costs with AcelotLMS</p>
                                <p className="cont">AcelotLMS is changing the way companies handle training. Our AI-powered platform streamlines the entire learning process—saving time and reducing costs. With intelligent automation and personalised learning paths, we deliver efficient, affordable training solutions that grow with your business.
                                </p>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Lms_three
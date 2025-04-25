import React from 'react'
import { Button, Col, Container, Row, Image, Accordion } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import banner from '../assets/images/Why-acelot-lms.png'
import sec_third from '../assets/images/sec-third.png'
import heart from '../assets/images/heart.png'
import About_section_five from '../components/About_section_five'

function Compliance_training() {
    return (
        <>
            <section className="banner_section">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6} className="mb-4 mb-lg-0">
                            <div className="left_banner">
                                <h1 className="slide_head mb-3">
                                    Compliance Training
                                </h1>
                                <p className="slide_description">
                                    Simplify Compliance Training with Acelot’s Easy-to-Use LMS
                                </p>
                                <p>Every organization needs compliance training to meet regulatory standards. But it’s not just about ticking boxes. With Acelot’s intuitive compliance training, your teams learn to follow industry regulations while reinforcing trust and professionalism in every interaction. When your employees understand the rules, they represent your brand with confidence—building long-term credibility where it counts most.
                                </p>
                                <Button as={Link} to={'/contact-us'} variant="primary" className="btn_two mt-4 mb-5">
                                    Get a Demo
                                </Button>
                            </div>
                        </Col>

                        <Col lg={6}>
                            <div className="right_banner text-center">
                                <Image
                                    src={banner}
                                    alt=""
                                    fluid
                                    className="rounded"
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className='Compliance_training_three'>
                <Container>
                    <Row className='gx-lg-5 align-items-center'>
                        <Col lg={7}>
                            <h2 className='lead mb-5' data-aos="fade-right">
                                Smart Compliance Training Matters: What Numbers Say!
                            </h2>
                            <div className='d-flex gap-4'>
                                <div className='number_Sec' data-aos="fade-up" data-aos-delay="100">
                                    <img src={heart} alt="icons" />
                                    <h3>41%</h3>
                                    <p className='lead4'>
                                        41% of businesses without continuous compliance report slowdowns on the sales cycle as a result.
                                    </p>
                                </div>
                                <div className='number_Sec' data-aos="fade-up" data-aos-delay="200">
                                    <img src={heart} alt="icons" />
                                    <h3>73%</h3>
                                    <p className='lead4'>
                                        73% of leaders state that meeting compliance standards improves the perception of their business.
                                    </p>
                                </div>
                                <div className='number_Sec' data-aos="fade-up" data-aos-delay="300">
                                    <img src={heart} alt="icons" />
                                    <h3>40%</h3>
                                    <p className='lead4'>
                                        40% of teams faced a security breach caused by blind spots resulting from manual compliance practices
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

            <section className='extra_link_solution'>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <h1 className='lead mb-5'>
                                Learning goes beyond onboarding with Acelot.
                            </h1>
                            <div className='extra_link mt-4'>
                                <ul className="list-unstyled d-flex flex-wrap gap-3">
                                    <li>
                                        <a href="/" data-discover="true">Onboarding Training</a>
                                    </li>
                                    <li>
                                        <a href="/" data-discover="true">Product Training</a>
                                    </li>
                                    <li>
                                        <a href="/" data-discover="true">Remote Workforce Training</a>
                                    </li>
                                    <li>
                                        <a href="/" data-discover="true">Sales Training</a>
                                    </li>

                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <About_section_five />


            <section className='Compliance_training_four'>
                <Container>
                    <Row>
                        <Col lg={12} className="mb-4">
                            <h2 className='lead'><span className='blue'>Frequently</span> asked questions</h2>
                            <p className='subhead'>Can’t find any answer for your question? Ask our experts</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12} className="">
                            <Accordion defaultActiveKey="0" flush>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>What is Compliance Training?</Accordion.Header>
                                    <Accordion.Body>
                                        <b>Compliance training</b> helps employees understand the laws, regulations, and ethical standards relevant to their roles. It ensures your team knows how to act responsibly and follow industry-specific legal and moral guidelines.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header> How does an LMS ensure compliance with regulations?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        A Learning Management System (LMS) plays a key role in ensuring regulatory compliance. It tracks employee progress to confirm that all required training is completed on time. As regulations evolve, the LMS allows for quick and easy updates to training content, keeping learning materials current. It also provides a secure, centralized location for storing all compliance-related documents, making audits and reporting more efficient.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>Can an LMS accommodate different industry-specific compliance requirements?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        A flexible LMS can be customised to meet the specific compliance needs of different businesses. It ensures regulatory alignment and allows for the creation of industry-specific training modules, tailored to each organization’s unique requirements.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>What is scorm compliance in LMS?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <b>SCORM Compliance</b> ensures that eLearning content meets the SCORM (Sharable Content Object Reference Model) standards, allowing it to seamlessly integrate with any SCORM-compatible Learning Management System.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Compliance_training
import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import img1 from '../assets/images/Acelot-Mobile-App.png'
import img2 from '../assets/images/Engaging-Gamification.png'
import img4 from '../assets/images/Security-You-Can-Trust.png'
import img5 from '../assets/images/Train-Anytime-Anywhere-on-Any-Device.png'


function Product_traning_section_four() {

    const [activeTab, setActiveTab] = useState('tab1');

    return (
        <div>
            <section className="home_section_four Remote_workforce_section_four">
                <Container>
                    <Row className='justify-content-center'>
                        <Col lg={10} className='text-center'>
                            <h2 className='lead mb-5'>
                                <span className='blue'>Maximise
                                </span>  the Return on Your Product Training Program with AcelotLMS
                            </h2>
                        </Col>
                    </Row>

                    <Row className='gx-lg-5'>
                        <Col md={5}>
                            <div className="nav flex-column nav-pills">
                                <button className={`nav-link ${activeTab === 'tab1' ? 'active' : ''}`} onClick={() => setActiveTab('tab1')}>
                                    Create Engaging Product Training Content That Captures Attention
                                </button>
                                <button className={`nav-link ${activeTab === 'tab2' ? 'active' : ''}`} onClick={() => setActiveTab('tab2')}>
                                    Deliver Personalised Learning Experiences with Custom Learning Paths
                                </button>
                                <button className={`nav-link ${activeTab === 'tab3' ? 'active' : ''}`} onClick={() => setActiveTab('tab3')}>
                                    Automate Training Workflows with AcelotLMS and Focus on What Matters Most
                                </button>
                                <button className={`nav-link ${activeTab === 'tab4' ? 'active' : ''}`} onClick={() => setActiveTab('tab4')}>
                                    Effectively Assess Employee Product Knowledge with Interactive Tools
                                </button>
                            </div>
                        </Col>

                        <Col md={7}>
                            <div className='custom_com_bx'>
                                {activeTab === 'tab1' && (
                                    <div className='custom_com_bx_inner'>
                                        <div className=''>
                                            <img src={img5} className='img-fluid' width={150} alt="" />
                                            <h3>Create Engaging Product Training Content That Captures Attention</h3>
                                            <p>Design interactive eLearning courses that keep learners involved — convert PowerPoint slides into dynamic online modules, record professional video tutorials and screen captures, and develop scenario-based role-plays to deliver impactful, memorable training.
                                            </p>
                                        </div>

                                    </div>
                                )}

                                {activeTab === 'tab2' && (
                                    <div className='custom_com_bx_inner'>
                                        <div className=''>
                                            <img src={img1} className='img-fluid' width={150} alt="" />
                                            <h3>Deliver Personalised Learning Experiences with Custom Learning Paths</h3>
                                            <p>Upload product training courses, organize them into targeted learning tracks for different roles or departments, and offer flexible self-enrollment options to create personalized learning experiences for every employee.</p>
                                        </div>
                                    </div>
                                )}

                                {activeTab === 'tab3' && (
                                    <div className='custom_com_bx_inner'>
                                        <div className=''>
                                            <img src={img4} className='img-fluid' width={150} alt="" />
                                            <h3>Automate Training Workflows with AcelotLMS and Focus on What Matters Most</h3>
                                            <p>Set product training enrollment rules once, and let AcelotLMS automatically handle course assignments, re-enrollments, deadline reminders, and product update notifications, ensuring efficient and seamless product knowledge management.</p>
                                        </div>
                                    </div>
                                )}

                                {activeTab === 'tab4' && (
                                    <div className='custom_com_bx_inner'>
                                        <div className=''>
                                            <img src={img2} className='img-fluid' width={150} alt="" />
                                            <h3>Effectively Assess Employee Product Knowledge with Interactive Tools</h3>
                                            <p>Measure how well your team understands your products using engaging quizzes, real-life branching scenarios, and secure testing settings that ensure accurate, cheat-proof results.
                                            </p>
                                        </div>
                                    </div>
                                )}

                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
}

export default Product_traning_section_four
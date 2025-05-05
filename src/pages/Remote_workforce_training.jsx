import React, { useState } from 'react'
import { Button, Col, Container, Row, Image } from 'react-bootstrap'
import banner from '../assets/images/sales-banner.jpg'
import { Link } from 'react-router-dom'
import { Accordion } from 'react-bootstrap'

import img_one from '../assets/images/sales1.png'
import img_two from '../assets/images/sales2.png'
import img_three from '../assets/images/sales3.png'
import img_four from '../assets/images/sales4.png'


import sec_third from '../assets/images/sec-third.png'
import employee from '../assets/images/employee.png'
import success from '../assets/images/success.png'
import generation_z from '../assets/images/generation-z.png'


import img1 from '../assets/images/Stay-Audit-Ready-with-Clear-Compliance-Records.png'
import img2 from '../assets/images/Save-Time-Skip-the-Stress.png'
import img3 from '../assets/images/Stay-Ahead-with-Always-Up-to-Date-Training.png'
import img4 from '../assets/images/Make-Safety-Stick-with-Effective-Training.png'
import img5 from '../assets/images/Make-Compliance-Training-Fun-and-Engaging.png'




function Remote_workforce_training() {

     const [activeTab, setActiveTab] = useState('tab1');

    return (
        <>
            <section className="banner_section">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6} className="mb-4 mb-lg-0">
                            <div className="left_banner">
                                <h1 className="slide_head mb-3">
                                    Remote Workforce Training
                                </h1>
                                <p className="slide_description">
                                    Close the distance between teams and training.
                                </p>
                                <p>
                                    Learning without boundaries—designed for today’s remote teams.
                                </p>
                                <Button as={Link} to={'/contact-us'} variant="primary" className="btn_two mt-4 mb-5">
                                    Get Started
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

            <section className="Onboarding_section_two">
                <Container>
                    <Row className="gx-5 align-items-center justify-content-center">
                        <Col lg={10} className="mb-4 text-center" data-aos="fade-down">
                            <h1 className="lead mb-3">
                                Why is Traditional Remote Workforce Training Broken?
                            </h1>
                            <p className='subhead'>This should be reworked to - why remote training has become a must for organisations in the new age of working.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={3} data-aos="fade-up" data-aos-delay="100">
                            <div className="problem-bx">
                                <p className="phead fw-600">
                                    Instead of pushing customers to buy
                                </p>
                                <p>
                                    High-performing reps align their sales process with the way customers prefer to purchase. This approach is developed and perfected through targeted sales training.
                                </p>
                                <img
                                    src={img_one}
                                    className="img-fluid"
                                    alt=""
                                />
                            </div>
                        </Col>

                        <Col lg={3} data-aos="fade-up" data-aos-delay="300">
                            <div className="problem-bx">
                                <p className="phead fw-600">
                                    Instead of selling products
                                </p>
                                <p>
                                    Top sellers promote solutions to customer problems, a skill honed through comprehensive sales training that emphasises understanding customer needs and tailoring solutions.

                                </p>
                                <img
                                    src={img_three}
                                    className="img-fluid"
                                    alt=""
                                />
                            </div>
                        </Col>
                        <Col lg={3} data-aos="fade-up" data-aos-delay="500">
                            <div className="problem-bx">
                                <p className="phead fw-600">
                                    Instead of waiting on inbound orders,
                                </p>
                                <p>
                                    Successful salespeople proactively create opportunities with new and existing clients.
                                </p>
                                <img
                                    src={img_two}
                                    className="img-fluid"
                                    alt=""
                                />
                            </div>
                        </Col>
                        <Col lg={3} data-aos="fade-up" data-aos-delay="800">
                            <div className="problem-bx">
                                <p className="phead fw-600">
                                    Instead of letting opportunities go stale,
                                </p>
                                <p>
                                    High-performing reps use their training to help clients make better, more informed decisions, ensuring no opportunity is left untapped.
                                </p>
                                <img
                                    src={img_four}
                                    className="img-fluid"
                                    alt=""
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className='Onboarding_section_three'>
                <Container>
                    <Row className='gx-lg-5 align-items-center'>
                        <Col lg={7}>
                            <h2 className='lead mb-5' data-aos="fade-right">
                                Remote Workforce Training by the Numbers: Why It’s a Game Changer
                            </h2>
                            <div className='d-flex gap-4'>
                                <div className='number_Sec' data-aos="fade-up" data-aos-delay="100">
                                    <img src={success} alt="icons" />
                                    <h3>85%</h3>
                                    <p className='lead4'>
                                        85% of companies have revised training programs for remote work.
                                    </p>
                                </div>
                                <div className='number_Sec' data-aos="fade-up" data-aos-delay="200">
                                    <img src={employee} alt="icons" />
                                    <h3>67%</h3>
                                    <p className='lead4'>
                                        67% of remote workers feel they need more specific training.
                                    </p>
                                </div>
                                <div className='number_Sec' data-aos="fade-up" data-aos-delay="300">
                                    <img src={generation_z} alt="icons" />
                                    <h3>36%</h3>
                                    <p className='lead4'>
                                        36% of remote employees find onboarding confusing. More than one-third of employees starting a new job remotely report feeling under-trained and disoriented during the onboarding process.
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




            

                  <section className="home_section_four Compliance_traning_section_two">
                    <Container>
                      <Row>
                        <Col lg={12} className='text-center'>
                          <h2 className='lead mb-5'>
                            <span className='blue'>How
                            </span> Acelot Empowers Remote Workforce Training
                          </h2>
                        </Col>
                      </Row>
            
                      <Row className='gx-5'>
                        <Col md={4}>
                          <div className="nav flex-column nav-pills">
                            <button className={`nav-link ${activeTab === 'tab1' ? 'active' : ''}`} onClick={() => setActiveTab('tab1')}>Train Anytime, Anywhere, on Any Device</button>
                            <button className={`nav-link ${activeTab === 'tab2' ? 'active' : ''}`} onClick={() => setActiveTab('tab2')}>Acelot Mobile App</button>
                            <button className={`nav-link ${activeTab === 'tab3' ? 'active' : ''}`} onClick={() => setActiveTab('tab3')}>Security You Can Trust</button>
                            <button className={`nav-link ${activeTab === 'tab4' ? 'active' : ''}`} onClick={() => setActiveTab('tab4')}>Engaging Gamification</button>
                            <button className={`nav-link ${activeTab === 'tab5' ? 'active' : ''}`} onClick={() => setActiveTab('tab5')}>Seamless Integrations </button>
                          </div>
                        </Col>
            
                        <Col md={8}>
                          <div className='custom_com_bx'>
                            {activeTab === 'tab1' && (
                              <div className='custom_com_bx_inner'>
                                <div>
                                  <h3>Train Anytime, Anywhere, on Any Device</h3>
                                  <p>With Acelot’s intuitive learning platform, remote teams can access training anytime, from anywhere, and on any device. Whether they're at home or on the move, your workforce can stay on track without disrupting their daily workflow.
                                  </p>
                                </div>
                                <img src={img1} className='img-fluid' alt="" />
                              </div>
                            )}
            
                            {activeTab === 'tab2' && (
                              <div className='custom_com_bx_inner'>
                                <div>
                                  <h3>Acelot Mobile App</h3>
                                  <p>Learning on the go is easy with the Acelot mobile app. Employees can download, pause, and resume courses offline. The platform also integrates seamlessly with HRMS, CRM, ERP, and other systems—ensuring smooth operations. Plus, Salesforce-ready integration offers SSO and real-time data sync.</p>
                                </div>
                                <img src={img2} className='img-fluid' alt="" />
                              </div>
                            )}
            
                            {activeTab === 'tab3' && (
                              <div className='custom_com_bx_inner'>
                                <div>
                                  <h3>Security You Can Trust</h3>
                                  <p>Acelot protects your team’s data with robust security standards. Using protocols like OAuth 2.0 and SAML, we provide a secure, reliable environment for remote learning. Data privacy and cybersecurity are always a top priority for us.</p>
                                </div>
                                <img src={img3} className='img-fluid' alt="" />
                              </div>
                            )}
            
                            {activeTab === 'tab4' && (
                              <div className='custom_com_bx_inner'>
                                <div>
                                  <h3>Engaging Gamification</h3>
                                  <p>Motivate your remote teams with gamified learning! Acelot’s built-in features like badges, leaderboards, and completion certificates keep employees engaged and inspired to achieve their learning goals.
                                  </p>
                                </div>
                                <img src={img4} className='img-fluid' alt="" />
                              </div>
                            )}
            
                            {activeTab === 'tab5' && (
                              <div className='custom_com_bx_inner'>
                                <div>
                                  <h3>Seamless Integrations </h3>
                                  <p>Connect Acelot to the tools you already use. From CRMs like Salesforce and Zoho to HR platforms, AMS, EMS, and more—Acelot ensures a frictionless learning experience across all your systems.
                                  </p>
                                </div>
                                <img src={img5} className='img-fluid' alt="" />
                              </div>
                            )}
            
                          </div>
                        </Col>
                      </Row>
                    </Container>
                  </section>


                  

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

            <section className='extra_link_solution'>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <h1 className='lead mb-5'>The Best Remote Training Software Does More Than Just Train
                            </h1>
                            <div className='extra_link mt-4'>
                                <ul className="list-unstyled d-flex flex-wrap gap-3">
                                    <li>
                                        <Link to="/onboarding-training" data-discover="true">Onboarding Training</Link>
                                    </li>
                                    <li>
                                        <Link to="/product-training" data-discover="true">Product Training</Link>
                                    </li>
                                    <li>
                                        <Link to="/sales-training" data-discover="true">Sales Training</Link>
                                    </li>
                                    <li>
                                        <Link to="/compliance-training" data-discover="true">Compliance Training</Link>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className='Onboarding_section_five'>
                <Container>
                    <Row>
                        <Col lg={12} className="mb-4">
                            <h2 className='lead'><span className='blue'>Frequently</span> asked questions</h2>
                            <p className='subhead'>Can’t find any answer for your question? Ask our experts</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}>
                            <Accordion defaultActiveKey="0" flush>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>How do remote workers get trained?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        Remote workers get trained through Acelot’s remote workforce training software, which offers virtual classrooms, self-paced modules, and real-time collaboration tools for flexible, effective learning.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Which software is best for remote workforce training?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        The best remote workforce training software supports instructor-led training, eLearning, and progress tracking—ideal for teams working across different locations.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>How can I train remotely?</Accordion.Header>
                                    <Accordion.Body>
                                        You can train remotely through digital platforms that offer online courses, live virtual classrooms, and interactive learning paths tailored to your role.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>What is remote training software?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        Remote training software is a digital solution that helps organizations deliver, manage, and measure employee training, regardless of location or time zone.
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

export default Remote_workforce_training
import React, { useState } from 'react'
import { Button, Col, Container, Row, Image } from 'react-bootstrap';
import img1 from '../assets/images/Stay-Audit-Ready-with-Clear-Compliance-Records.png'
import img2 from '../assets/images/Save-Time-Skip-the-Stress.png'
import img3 from '../assets/images/Stay-Ahead-with-Always-Up-to-Date-Training.png'
import img4 from '../assets/images/Make-Safety-Stick-with-Effective-Training.png'
import img5 from '../assets/images/Make-Compliance-Training-Fun-and-Engaging.png'
import img6 from '../assets/images/White-Label-Your-Compliance-Training.png'
import img7 from '../assets/images/Boost-Sales-and-Build-Brand-Trust.png'

function Compliance_traning_section_two() {
  const [activeTab, setActiveTab] = useState('tab1');


  return (
    <>
      <section className="home_section_four Compliance_traning_section_two">
        <Container>
          <Row>
            <Col lg={12} className='text-center'>
              <h2 className='lead mb-5'>
                <span className='blue'>Smart
                </span> Compliance Solutions That Work
              </h2>
            </Col>
          </Row>

          <Row className='gx-5'>
            <Col md={5}>
              <div className="nav flex-column nav-pills">
                <button className={`nav-link ${activeTab === 'tab1' ? 'active' : ''}`} onClick={() => setActiveTab('tab1')}>Stay Audit-Ready with Clear Compliance Records</button>
                <button className={`nav-link ${activeTab === 'tab2' ? 'active' : ''}`} onClick={() => setActiveTab('tab2')}>Save Time, Skip the Stress</button>
                <button className={`nav-link ${activeTab === 'tab3' ? 'active' : ''}`} onClick={() => setActiveTab('tab3')}>Stay Ahead with Always-Up-to-Date Training</button>
                <button className={`nav-link ${activeTab === 'tab4' ? 'active' : ''}`} onClick={() => setActiveTab('tab4')}>Make Safety Stick with Effective Training</button>
                <button className={`nav-link ${activeTab === 'tab5' ? 'active' : ''}`} onClick={() => setActiveTab('tab5')}>Make Compliance Training Fun and Engaging</button>
                <button className={`nav-link ${activeTab === 'tab6' ? 'active' : ''}`} onClick={() => setActiveTab('tab6')}>White-Label Your Compliance Training</button>
                <button className={`nav-link ${activeTab === 'tab7' ? 'active' : ''}`} onClick={() => setActiveTab('tab7')}>Boost Sales and Build Brand Trust
                </button>
              </div>
            </Col>

            <Col md={7}>
              <div className='custom_com_bx mt-lg-0 mt-4'>
                {activeTab === 'tab1' && (
                  <div className='custom_com_bx_inner'>
                    <div>
                          <img src={img1} width={'150px'} className='img-fluid' alt="Be audit-ready with AcelotLMS's clear and trackable compliance records for easy auditing." />
                      <h3>Stay Audit-Ready with Clear Compliance Records</h3>
                      <p>Easily prove compliance with detailed training reports that show exactly who’s completed what. Keep track of every employee’s understanding of key policies to protect your organization—and your team—from costly legal or financial risks.</p>
                    </div>
                
                  </div>
                )}

                {activeTab === 'tab2' && (
                  <div className='custom_com_bx_inner'>
                    <div>
                      <img src={img2} width={'150px'} className='img-fluid' alt="Illustration of how AcelotLMS simplifies employee training, reduces administrative stress, and saves valuable time." />
                      <h3>Save Time, Skip the Stress</h3>
                      <p>Automate recertifications and send timely reminders—no more manual tracking or deadline anxiety. Let the system handle the busywork so you can focus on what matters most.</p>
                    </div>
                  </div>
                )}

                {activeTab === 'tab3' && (
                  <div className='custom_com_bx_inner'>
                    <div>
                      <img src={img3} width={'150px'} className='img-fluid' alt="A professional engaging with AcelotLMS's up-to-date training content to stay ahead in their field." />
                      <h3>Stay Ahead with Always-Up-to-Date Training</h3>
                      <p>Laws change, audits happen—but your training stays ready. Easily update courses with our intuitive editor, so your team is always aligned without wasting hours on rewrites or outdated manuals.</p>
                    </div>
                    
                  </div>
                )}

                {activeTab === 'tab4' && (
                  <div className='custom_com_bx_inner'>
                    <div>
                       <img src={img4} width={'150px'} className='img-fluid' alt="An instructor demonstrating effective safety training techniques on the AcelotLMS platform for improved knowledge retention." />
                      <h3>Make Safety Stick with Effective Training</h3>
                      <p>Avoid accidents and keep operations smooth by ensuring every learner understands safety protocols. Use quizzes, tests, and feedback surveys to reinforce learning and continuously improve your training experience.</p>
                    </div>
                   
                  </div>
                )}

                {activeTab === 'tab5' && (
                  <div className='custom_com_bx_inner'>
                    <div>
                      <img src={img5} width={'150px'} className='img-fluid' alt="A corporate trainer using the AcelotLMS platform to deliver fun and engaging compliance training to employees." />
                      <h3>Make Compliance Training Fun and Engaging</h3>
                      <p>Turn mandatory training into a motivator with built-in gamification. Award badges, points, and leaderboard shoutouts to keep learners motivated and coming back for more.</p>
                    </div>
                  </div>
                )}

                {activeTab === 'tab6' && (
                  <div className='custom_com_bx_inner'>
                    <div>
                       <img src={img6} width={'150px'} className='img-fluid' alt="An example of a white-label compliance training program on AcelotLMS, customized with a company's branding." />
                      <h3>White-Label Your Compliance Training</h3>
                      <p>Customise your compliance training LMS with your own branding. Add your colors, logo, and theme to create a cohesive learning experience that aligns with your brand identity.
                      </p>
                    </div>
                   
                  </div>
                )}

                {activeTab === 'tab7' && (
                  <div className='custom_com_bx_inner'>
                    <div>
                      <img src={img7} width={'150px'} className='img-fluid' alt="Marketing expert explaining sales growth strategies on a whiteboard during a corporate training session." />
                      <h3>Boost Sales and Build Brand Trust</h3>
                      <p>Compliance training isn’t just about ticking boxes—it’s a powerful tool to boost your sales and brand reputation. When your sales team is well-versed in regulations, they can engage customers with confidence, building trust and closing more deals. Plus, a company that prioritises compliance shows its commitment to doing things the right way, setting you apart as a credible and reliable brand. Strong compliance equals stronger sales, a better image, and a long-lasting impact!
                      </p>
                    </div>
                  </div>
                )}


              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Compliance_traning_section_two
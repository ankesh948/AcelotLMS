import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import img1 from '../assets/images/Acelot-Mobile-App.png'
import img2 from '../assets/images/Engaging-Gamification.png'
import img3 from '../assets/images/Seamless-Integrations.png'
import img4 from '../assets/images/Security-You-Can-Trust.png'
import img5 from '../assets/images/Train-Anytime-Anywhere-on-Any-Device.png'


function Remote_workforce_section_four() {
  const [activeTab, setActiveTab] = useState('tab1');

  return (
    <>
      <section className="home_section_four Remote_workforce_section_four">
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
                    <img src={img5} className='img-fluid' alt="" />
                    <div>
                      <h3>Train Anytime, Anywhere, on Any Device</h3>
                      <p>With Acelot’s intuitive learning platform, remote teams can access training anytime, from anywhere, and on any device. Whether they're at home or on the move, your workforce can stay on track without disrupting their daily workflow.
                      </p>
                    </div>
                  </div>
                )}

                {activeTab === 'tab2' && (
                  <div className='custom_com_bx_inner'>
                    <img src={img1} className='img-fluid' alt="" />
                    <div>
                      <h3>Acelot Mobile App</h3>
                      <p>Learning on the go is easy with the Acelot mobile app. Employees can download, pause, and resume courses offline. The platform also integrates seamlessly with HRMS, CRM, ERP, and other systems—ensuring smooth operations. Plus, Salesforce-ready integration offers SSO and real-time data sync.</p>
                    </div>
                  </div>
                )}

                {activeTab === 'tab3' && (
                  <div className='custom_com_bx_inner'>
                    <img src={img4} className='img-fluid' alt="" />
                    <div>
                      <h3>Security You Can Trust</h3>
                      <p>Acelot protects your team’s data with robust security standards. Using protocols like OAuth 2.0 and SAML, we provide a secure, reliable environment for remote learning. Data privacy and cybersecurity are always a top priority for us.</p>
                    </div>
                  </div>
                )}

                {activeTab === 'tab4' && (
                  <div className='custom_com_bx_inner'>
                    <img src={img2} className='img-fluid' alt="" />
                    <div>
                      <h3>Engaging Gamification</h3>
                      <p>Motivate your remote teams with gamified learning! Acelot’s built-in features like badges, leaderboards, and completion certificates keep employees engaged and inspired to achieve their learning goals.
                      </p>
                    </div>
                  </div>
                )}

                {activeTab === 'tab5' && (
                  <div className='custom_com_bx_inner'>
                    <img src={img3} className='img-fluid' alt="" />
                    <div>
                      <h3>Seamless Integrations </h3>
                      <p>Connect Acelot to the tools you already use. From CRMs like Salesforce and Zoho to HR platforms, AMS, EMS, and more—Acelot ensures a frictionless learning experience across all your systems.
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

export default Remote_workforce_section_four
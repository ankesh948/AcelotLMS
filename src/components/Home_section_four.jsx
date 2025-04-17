import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Compliance from '../assets/images/Compliance.png';
import Customer_Product from '../assets/images/Customer-Product.png';
import Localization from '../assets/images/Localization.png';
import Remote_Worforce from '../assets/images/Remote-Worforce.png';
import Sales from '../assets/images/Sales.png';
import Onboarding from '../assets/images/Onboarding.png';

const tabData = [
  {
    id: 'tab1',
    title: 'Onboarding Training',
    description: 'Help new employees hit the ground running with clarity and confidence.',
    image: Onboarding,
  },
  {
    id: 'tab2',
    title: 'Product Training',
    description: 'Train your team to know your product inside out and speak about it with confidence.',
    image: Customer_Product,
  },
  {
    id: 'tab3',
    title: 'Remote Workforce Training',
    description: 'Close the distance between your people and their potential — train anytime, anywhere, even without internet.',
    image: Remote_Worforce,
  },
  {
    id: 'tab4',
    title: 'Sales Training',
    description: 'Equip your sales team with the right tools and training, all in one place. See how AcelotLMS drives real revenue results.',
    image: Sales,
  },
  {
    id: 'tab5',
    title: 'Compliance Training',
    description: 'Ensure your team understands the “why” behind every policy and procedure.',
    image: Compliance,
  },
  // {
  //   id: 'tab6',
  //   title: 'Localization',
  //   description: 'Break language barriers with personalized learning experiences in multiple regional languages.',
  //   image: Localization,
  // }
];

function Home_section_four() {
  const [activeTab, setActiveTab] = useState(tabData[0]);

  return (
    <section id='solutions' className='home_section_four'>
      <Container>
        <Row>
          <Col lg={12} className='text-center'>
            <h2 className='lead'><span className='blue'>Our</span> Solutions</h2>
            <p className='lead5 mb-0 fw-600'>One Platform. Limitless Learning.</p>
            <p className='subhead mb-5'>Create training experiences that leads to growth, enhances performance, and build stronger connections across your teams.
            </p>
          </Col>
        </Row>
        
        <Row className='gx-5'>
          <Col md={3}>
            <div className="nav flex-column nav-pills">
              {tabData.map((tab) => (
                <button
                  key={tab.id}
                  className={`nav-link ${activeTab.id === tab.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.title}
                </button>
              ))}
            </div>
          </Col>

          {/* Right side - content */}
          <Col md={9}>
            <div className='solution-bx'>
              <h3>{activeTab.title}</h3>
              <p>{activeTab.description}</p>
              <img src={activeTab.image} alt={activeTab.title} className="img-fluid rounded" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home_section_four;

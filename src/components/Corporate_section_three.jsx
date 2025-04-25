import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import program1 from '../assets/images/L&M.jpg'
import program2 from '../assets/images/OD.jpg'
import program3 from '../assets/images/S&B.jpg'
import program4 from '../assets/images/SD&PE.jpg'

const tabData = [
    {
        id: 'tab1',
        title: 'Leadership & Management',
        description: 'Empowering professionals to lead with vision, make strategic decisions, and manage teams effectively.',
        list: `<div className='d-flex gap-2'>
                 <ul>
                    <li>Leadership and Talent Management</li>
                    <li>Crucial Conversations</li>
                    <li>Executive Leadership Development</li>
                    <li>Change Management</li>
                    <li>Emotional Intelligence for Leadership</li>
                    
                </ul>
                <ul>
                    <li>Building High-Performance Teams</li>
                    <li>Leaders as Coaches</li>
                    <li>Situational Leadership</li>
                    <li>Strategic Thinking</li>
                    <li>Inclusive Leadership</li>
                </ul>
                </div>`,
        image: program1,
    },
    {
        id: 'tab2',
        title: 'Sales and Business Development',
        description: 'Unlock new growth opportunities and drive revenue through strategic sales approaches',
        list: `<div className='d-flex gap-2'>
                <ul>
                <li>Consultative and Complex Solution Sales</li>
                <li>Advanced Selling Skills - B2B, B2C, Channel, Distribution</li>
                <li>Strategic Selling - Building Blocks of Execution</li>
                <li>Customer Value Management</li>
            </ul>
            <ul>
               
                <li>Influencing Skills</li>
                <li>Customer Service Excellence</li>
                <li>Sales Growth - Product & Processes</li>
            </ul></div>`,
        image: program3,
    },
    {
        id: 'tab4',
        title: 'Organizational Development',
        description: `Enhance your organization's agility, culture, and performance for sustainable growth`,
        list: `<div className='d-flex gap-2'><ul>
                    <li>Managing Talent and Succession Planning</li>
                    <li>Process Consulting & Group Process Facilitation</li>
                    <li>HR & OD Consulting</li>
                    <li>Competency-Based HRM Interventions</li>
                </ul>
                <ul>
                    <li>Designing Business & HR Strategies</li>
                    <li>Organizational & Cultural Transformation</li>
                    <li>Creating & Running Assessment Centres</li>
                </ul>
                </div>`,
        image: program2,
    },
    {
        id: 'tab5',
        title: 'Skill Development and Personal Effectiveness',
        description: 'Enhance your core skills and maximize personal productivity for professional success.',
        list: `<div className='d-flex gap-2'>
                    <ul>
                    <li>Campus to Corporate: Winning Interviews</li>
                    <li>Communication and Soft Skills</li>
                    <li>Transactional Analysis (Behavioural Change)</li>
                    <li>Cross-Functional Collaboration</li>
                    <li>Advanced Presentation Skills</li>
                </ul>
                <ul>
                    <li>Team Building and Team Bonding Exercises</li>
                    <li>Supervisory Skills for Emerging Leaders</li>
                    <li>Train-The-Trainer</li>
                    <li>Personal Grooming & Business Etiquette</li>
                </ul></div>`,
        image: program4,
    }
];


function Corporate_section_three() {
    const [activeTab, setActiveTab] = useState(tabData[0]);


    return (
        <>
            <section className='home_section_four Corporate_section_two'>
                <Container>
                    <Row className='align-items-center justify-content-start'>
                        <Col lg={10} className='text-left'>
                            <h2 className='lead'><span className='blue'>Our</span> Program</h2>
                            <p className='subhead mb-5'>Comprehensive Trainings Tailored for Your Success.
                                Empowering professionals with industry-leading skills.</p>
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

                        <Col md={6}>
                            <div className='solution-bx'>
                                <h3>{activeTab.title}</h3>
                                <p className='mb-1 subhead'>{activeTab.description}</p>
                                <div dangerouslySetInnerHTML={{ __html: activeTab.list }} />
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className='solution-bx'>
                                <img src={activeTab.image} alt={activeTab.title} className="img-fluid rounded" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Corporate_section_three
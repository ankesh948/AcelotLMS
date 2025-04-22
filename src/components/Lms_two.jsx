import React, { useState } from 'react'
import { Button, Col, Container, Row, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const tabData = [
    {
        id: 'tab1',
        title: 'Engage Your Learners Like Never Before',
        description: `
            <b>Gamification That Drives Motivation</b>
            <p>Keep learners hooked with points, badges, levels, and real-time leaderboards — available for both individuals and teams.</p>
            
            <b>Digital Certificates</b>
            <p>Award learners with e-verifiable certificates they can proudly showcase on LinkedIn and other platforms.</p>
            
            <b>Mobile App (Android & iOS)</b>
            <p>Learning doesn’t stop — even on the move. Access your courses, assessments, and progress from our fully featured mobile app.</p>
            
            <b>Chat & Collaboration</b>
            <p>Enable real-time interaction with trainers, supervisors, admins, or fellow learners right inside the LMS.</p>
        `
    },
    {
        id: 'tab2',
        title: 'Smarter Course & Content Management',
        description: `
            <b>Flexible Upload Options</b>
            <p>Upload content in multiple formats — PDF, MP4, YouTube, Vimeo, HTML5, SCORM 1.2 & 2004.</p>

            <b>Secure Video Streaming</b>
            <p>Protect your content with DRM, download control, and secure video management on private channels.</p>

            <b>Live Class Recording</b>
            <p>Automatically save and organize your Zoom or Google Meet session recordings within each course.</p>

            <b>Learning Paths</b>
            <p>Build structured journeys with pre-defined course sequences, tailored by skill level or role.</p>

            <b>Lesson Access Control</b>
            <p>Control whether lessons unlock sequentially or can be accessed freely.</p>

            <b>Acelot Library</b>
            <p>Access premium content from Acelot and subject experts at special rates for your employees.</p>
        `
    },
    {
        id: 'tab3',
        title: 'Assessment & Evaluation Tools',
        description: `
            <b>Dynamic Quizzes & Assessments</b>
            <p>Attach quizzes to lessons or run standalone assessments to evaluate learner understanding.</p>

            <b>Proctored Exams (on Request)</b>
            <p>For high-stakes testing, enable AI-powered or manual proctoring for secure exam environments.</p>

            <b>Assignments</b>
            <p>Allow learners to submit written, project-based, or video assignments for trainer review.</p>

            <b>Question Bank with Bulk Upload</b>
            <p>Save time with a centralized question bank and the ability to upload questions in bulk.</p>
        `
    },
    {
        id: 'tab4',
        title: 'Intuitive User Management',
        description: `
            <b>Bulk User Upload</b>
            <p>Easily onboard learners, trainers, or admins with CSV-based bulk uploads.</p>

            <b>Create Trainers & Custom Roles</b>
            <p>Assign instructor or supervisory roles with customizable access permissions.</p>

            <b>Organization Mapping</b>
            <p>Map learners by department, region, or hierarchy to get at-a-glance progress reports.</p>

            <b>OAuth 2.0 + SAML 2.0 Login</b>
            <p>Offer secure and seamless access via industry-standard login protocols.</p>

            <b>IP Whitelisting</b>
            <p>Restrict LMS access to approved office locations or specific hardware.</p>
        `
    },
    {
        id: 'tab5',
        title: 'Admin-Friendly Tools',
        description: `
            <b>Calendar & Notifications</b>
            <p>Plan and manage live classes, assignment deadlines, and important announcements with integrated reminders.</p>

            <b>Bulk Assign Courses & Tests</b>
            <p>Assign learning content to individuals, groups, or entire departments in just a few clicks.</p>

            <b>Custom Course Completion Rules</b>
            <p>Define how each course is marked as “complete” — based on quiz scores, lesson views, or manual check-offs.</p>

            <b>White Label Branding</b>
            <p>Make the LMS truly yours with your domain name, logo, color palette, menu structure, and custom pages.</p>

            <b>Multi-Language Support</b>
            <p>Localize the LMS interface and content to suit diverse language preferences.</p>
        `
    },
    {
        id: 'tab6',
        title: 'Analytics & Reporting',
        description: `
            <b>Enrolment Tracking</b>
            <p>View enrolments by course, team, or date range to monitor interest and uptake.</p>

            <b>User Activity Reports</b>
            <p>Track logins, time spent learning, and engagement trends over time.</p>

            <b>Course & Class Reports</b>
            <p>Understand how your content is performing — with completion rates, quiz scores, and attendance metrics.</p>

            <b>Team Performance Dashboards</b>
            <p>Quickly compare learner performance across departments, locations, or managers.</p>

            <b>Executive Summary Dashboard</b>
            <p>All your platform stats in one view — tailored for decision-makers.</p>
        `
    },
    {
        id: 'tab7',
        title: 'Enterprise-Grade Security & Infrastructure',
        description: `
            <b>CERT-IN Certified</b>
            <p>Compliant with India's highest cybersecurity standards.</p>

            <b>Cloud Hosting on AWS</b>
            <p>Reliable, scalable, and secure hosting on Amazon Web Services.</p>

            <b>SSO + SMTP Control</b>
            <p>Offer one-click sign-in and manage your own email infrastructure.</p>

            <b>Video DRM + Custom Hosting</b>
            <p>Your videos, your control — full protection and flexible hosting options.</p>

            <b>SCORM Compliant</b>
            <p>Support for SCORM 1.2 and 2004 ensures compatibility with industry-standard content.</p>
        `
    }
];


function Lms_two() {
    const [activeTab, setActiveTab] = useState(tabData[0]);


    return (
        <>




            <section className="home_section_four Lms_two">
                <Container>
                    <Row>
                        <Col lg={12} className='text-center'>
                            <h2 className='lead mb-5'><span className='blue'>Features</span>  that Power Smarter Learning</h2>
                        </Col>
                    </Row>

                    <Row className='gx-5'>
                        <Col md={4}>
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
                        <Col md={8}>
                            <div className='solution-bx'>
                                <h3 className='mb-4'>{activeTab.title}</h3>
                                <div className='htmldata' dangerouslySetInnerHTML={{ __html: activeTab.description }} />
                                {/* <img src={activeTab.image} alt={activeTab.title} className="img-fluid rounded" /> */}
                            </div>
                        </Col>

                        <Col lg={12} className='text-center mt-4'>
                            <Button variant='primary' className='btn_four'>Request a Demo</Button>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Lms_two
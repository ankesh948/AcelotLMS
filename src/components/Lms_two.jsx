import React, { useState } from 'react';
import { Button, Col, Container, Row, Image } from 'react-bootstrap';
import bubble from '../assets/images/lms-icons/1/bubble-chat.png';
import digital_certificate from '../assets/images/lms-icons/1/digital-certificate.png';
import gamification from '../assets/images/lms-icons/1/gamification.png';
import mobile_app from '../assets/images/lms-icons/1/mobile-app.png';

import acelot_library from '../assets/images/lms-icons/2/acelot library.png';
import flexibility from '../assets/images/lms-icons/2/flexibility.png';
import learningpath from '../assets/images/lms-icons/2/learningpath.png';
import LESSON_access_control from '../assets/images/lms-icons/2/LESSON-access-control.png';
import live_class_rec from '../assets/images/lms-icons/2/live-class-rec.png';
import secure_video from '../assets/images/lms-icons/2/secure-video.png';

import assesment from '../assets/images/lms-icons/3/assesment.png';
import assignment from '../assets/images/lms-icons/3/assignment.png';
import proctored from '../assets/images/lms-icons/3/proctored.png';
import quest_bank from '../assets/images/lms-icons/3/quest-bank.png';

import create_trainer from '../assets/images/lms-icons/4/create-trainer.png';
import ip from '../assets/images/lms-icons/4/ip.png';
import oauth from '../assets/images/lms-icons/4/oauth.png';
import organization_mapping from '../assets/images/lms-icons/4/organization-mapping.png';
import upload from '../assets/images/lms-icons/4/upload.png';

import bulk_course from '../assets/images/lms-icons/5/bulk-course.png';
import calendar from '../assets/images/lms-icons/5/calendar.png';
import customize from '../assets/images/lms-icons/5/customize.png';
import mulit_lang from '../assets/images/lms-icons/5/mulit-lang.png';
import white_label from '../assets/images/lms-icons/5/white-label.png';

import dashboard from '../assets/images/lms-icons/6/dashboard.png';
import dashboard1 from '../assets/images/lms-icons/6/dashboard1.png';
import report from '../assets/images/lms-icons/6/report.png';
import tracking from '../assets/images/lms-icons/6/tracking.png';
import user_report from '../assets/images/lms-icons/6/user-report.png';

import awscloud from '../assets/images/lms-icons/7/awscloud.png';
import certificate from '../assets/images/lms-icons/7/certificate.png';
import scorm_compatibility from '../assets/images/lms-icons/7/scorm-compatibility.png';
import sso from '../assets/images/lms-icons/7/sso.png';
import video_drm from '../assets/images/lms-icons/7/video-drm.png';

function Lms_two() {
    const [activeTab, setActiveTab] = useState('tab1');

    return (
        <section className="home_section_four Lms_two">
            <Container>
                <Row>
                    <Col lg={12} className='text-center'>
                        <h2 className='lead mb-5'>
                            <span className='blue'>Features</span> that Power Smarter Learning
                        </h2>
                    </Col>
                </Row>

                <Row className='gx-5'>
                    <Col md={3}>
                        <div className="nav flex-column nav-pills">
                            <button className={`nav-link ${activeTab === 'tab1' ? 'active' : ''}`} onClick={() => setActiveTab('tab1')}>Engage Your Learners Like Never Before</button>
                            <button className={`nav-link ${activeTab === 'tab2' ? 'active' : ''}`} onClick={() => setActiveTab('tab2')}>Smarter Course & Content Management</button>
                            <button className={`nav-link ${activeTab === 'tab3' ? 'active' : ''}`} onClick={() => setActiveTab('tab3')}>Assessment & Evaluation Tools</button>
                            <button className={`nav-link ${activeTab === 'tab4' ? 'active' : ''}`} onClick={() => setActiveTab('tab4')}>Intuitive User Management</button>
                            <button className={`nav-link ${activeTab === 'tab5' ? 'active' : ''}`} onClick={() => setActiveTab('tab5')}>Admin-Friendly Tools</button>
                            <button className={`nav-link ${activeTab === 'tab6' ? 'active' : ''}`} onClick={() => setActiveTab('tab6')}>Analytics & Reporting</button>
                            <button className={`nav-link ${activeTab === 'tab7' ? 'active' : ''}`} onClick={() => setActiveTab('tab7')}>Enterprise-Grade Security & Infrastructure</button>
                        </div>
                    </Col>

                    <Col md={9}>
                        <div className='solution-bx'>
                            {activeTab === 'tab1' && (
                                <div className='htmldata'>
                                    <div className='htmldata_inner'>
                                        <Image src={gamification} />
                                        <b>Gamification That Drives Motivation</b>
                                        <p>Keep learners hooked with points, badges, levels, and real-time leaderboards — available for both individuals and teams.</p>
                                    </div>
                                    <div className='htmldata_inner'>
                                        <Image src={digital_certificate} />
                                        <b>Digital Certificates</b>
                                        <p>Award learners with e-verifiable certificates they can proudly showcase on LinkedIn and other platforms.</p>
                                    </div>
                                    <div className='htmldata_inner'>
                                        <Image src={mobile_app} />
                                        <b>Mobile App (Android & iOS)</b>
                                        <p>Learning doesn’t stop — even on the move. Access your courses, assessments, and progress from our fully featured mobile app.</p>
                                    </div>
                                    <div className='htmldata_inner'>
                                        <Image src={bubble} />
                                        <b>Chat & Collaboration</b>
                                        <p>Enable real-time interaction with trainers, supervisors, admins, or fellow learners right inside the LMS.</p>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'tab2' && (
                                <div className='htmldata'>
                                    <div className='htmldata_inner'>
                                        <Image src={flexibility} />
                                        <b>Flexible Upload Options</b>
                                        <p>Upload content in multiple formats — PDF, MP4, YouTube, Vimeo, HTML5, SCORM 1.2 & 2004.</p>
                                    </div>
                                    <div className='htmldata_inner'>
                                        <Image src={secure_video} />
                                        <b>Secure Video Streaming</b>
                                        <p>Protect your content with DRM, download control, and secure video management on private channels.</p>
                                    </div>
                                    <div className='htmldata_inner'>
                                        <Image src={live_class_rec} />
                                        <b>Live Class Recording</b>
                                        <p>Automatically save and organize your Zoom or Google Meet session recordings within each course.</p>
                                    </div>
                                    <div className='htmldata_inner'>
                                        <Image src={learningpath} />
                                        <b>Learning Paths</b>
                                        <p>Build structured journeys with pre-defined course sequences, tailored by skill level or role.</p>
                                    </div>
                                    <div className='htmldata_inner'>
                                        <Image src={LESSON_access_control} />
                                        <b>Lesson Access Control</b>
                                        <p>Control whether lessons unlock sequentially or can be accessed freely.</p>
                                    </div>
                                    <div className='htmldata_inner'>
                                        <Image src={acelot_library} />
                                        <b>Acelot Library</b>
                                        <p>Access premium content from Acelot and subject experts at special rates for your employees.</p>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'tab3' && (
                                <div className='htmldata'>
                                    <div className='htmldata_inner'>
                                        <Image src={assesment} />
                                        <b>Dynamic Quizzes & Assessments</b>
                                        <p>Attach quizzes to lessons or run standalone assessments to evaluate learner understanding.</p>
                                    </div>
                                    <div className='htmldata_inner'>
                                        <Image src={proctored} />
                                        <b>Proctored Exams (on Request)</b>
                                        <p>For high-stakes testing, enable AI-powered or manual proctoring for secure exam environments.</p>
                                    </div>
                                    <div className='htmldata_inner'>
                                        <Image src={assignment} />
                                        <b>Assignments</b>
                                        <p>Allow learners to submit written, project-based, or video assignments for trainer review.</p>
                                    </div>
                                    <div className='htmldata_inner'>
                                        <Image src={quest_bank} />
                                        <b>Question Bank with Bulk Upload</b>
                                        <p>Save time with a centralized question bank and the ability to upload questions in bulk.</p>
                                    </div>
                                </div>

                            )}

                            {activeTab === 'tab4' && (
                                <div className='htmldata'>
                                    <div className='htmldata_inner'>
                                        <Image src={upload} />
                                        <b>Bulk User Upload</b>
                                        <p>Easily onboard learners, trainers, or admins with CSV-based bulk uploads.</p>
                                    </div>
                                    <div className='htmldata_inner'>
                                        <Image src={create_trainer} />
                                        <b>Create Trainers & Custom Roles</b>
                                        <p>Assign instructor or supervisory roles with customizable access permissions.</p>
                                    </div>
                                    <div className='htmldata_inner'>
                                        <Image src={organization_mapping} />
                                        <b>Organization Mapping</b>
                                        <p>Map learners by department, region, or hierarchy to get at-a-glance progress reports.</p>
                                    </div>
                                    <div className='htmldata_inner'>
                                        <Image src={oauth} />
                                        <b>OAuth 2.0 + SAML 2.0 Login</b>
                                        <p>Offer secure and seamless access via industry-standard login protocols.</p>
                                    </div>
                                    <div className='htmldata_inner'>
                                        <Image src={ip} />
                                        <b>IP Whitelisting</b>
                                        <p>Restrict LMS access to approved office locations or specific hardware.</p>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'tab5' && (
                                <div className='htmldata'>
                                    <div className='htmldata_inner'>
                                        <Image src={calendar} />
                                        <b>Calendar & Notifications</b>
                                        <p>Plan and manage live classes, assignment deadlines, and important announcements with integrated reminders.</p>
                                    </div>
                                    <div className='htmldata_inner'>
                                        <Image src={bulk_course} />
                                        <b>Bulk Assign Courses & Tests</b>
                                        <p>Assign learning content to individuals, groups, or entire departments in just a few clicks.</p>
                                    </div>
                                    <div className='htmldata_inner'>
                                        <Image src={customize} />
                                        <b>Custom Course Completion Rules</b>
                                        <p>Define how each course is marked as “complete” — based on quiz scores, lesson views, or manual check-offs.</p>
                                    </div>
                                    <div className='htmldata_inner'>
                                        <Image src={white_label} />
                                        <b>White Label Branding</b>
                                        <p>Make the LMS truly yours with your domain name, logo, color palette, menu structure, and custom pages.</p>
                                    </div>
                                    <div className='htmldata_inner'>
                                        <Image src={mulit_lang} />
                                        <b>Multi-Language Support</b>
                                        <p>Localize the LMS interface and content to suit diverse language preferences.</p>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'tab6' && (
                                <div className='htmldata'>
                                    <div className='htmldata_inner'>
                                        <Image src={tracking} />
                                        <b>Enrolment Tracking</b>
                                        <p>View enrolments by course, team, or date range to monitor interest and uptake.</p>
                                    </div>
                                    <div className='htmldata_inner'>
                                        <Image src={user_report} />
                                        <b>User Activity Reports</b>
                                        <p>Track logins, time spent learning, and engagement trends over time.</p>
                                    </div>
                                    <div className='htmldata_inner'>
                                        <Image src={report} />
                                        <b>Course & Class Reports</b>
                                        <p>Understand how your content is performing — with completion rates, quiz scores, and attendance metrics.</p>
                                    </div>
                                    <div className='htmldata_inner'>
                                        <Image src={dashboard} />
                                        <b>Team Performance Dashboards</b>
                                        <p>Quickly compare learner performance across departments, locations, or managers.</p>
                                    </div>
                                    <div className='htmldata_inner'>
                                        <Image src={dashboard1} />
                                        <b>Executive Summary Dashboard</b>
                                        <p>All your platform stats in one view — tailored for decision-makers.</p>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'tab7' && (
                                <div className='htmldata'>
                                    <div className='htmldata_inner'>
                                        <Image src={certificate} />
                                        <b>CERT-IN Certified</b>
                                        <p>Compliant with India's highest cybersecurity standards.</p>
                                    </div>
                                    <div className='htmldata_inner'>
                                        <Image src={awscloud} />
                                        <b>Cloud Hosting on AWS</b>
                                        <p>Reliable, scalable, and secure hosting on Amazon Web Services.</p>
                                    </div>
                                    <div className='htmldata_inner'>
                                        <Image src={sso} />
                                        <b>SSO + SMTP Control</b>
                                        <p>Offer one-click sign-in and manage your own email infrastructure.</p>
                                    </div>
                                    <div className='htmldata_inner'>
                                        <Image src={video_drm} />
                                        <b>Video DRM + Custom Hosting</b>
                                        <p>Your videos, your control — full protection and flexible hosting options.</p>
                                    </div>
                                    <div className='htmldata_inner'>
                                        <Image src={scorm_compatibility} />
                                        <b>SCORM Compliant</b>
                                        <p>Support for SCORM 1.2 and 2004 ensures compatibility with industry-standard content.</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </Col>

                    <Col lg={12} className='text-center mt-4'>
                        <Button variant='primary' className='btn_four'>Request a Demo</Button>
                    </Col>
                </Row>
            </Container>
        </section >
    );
}

export default Lms_two;

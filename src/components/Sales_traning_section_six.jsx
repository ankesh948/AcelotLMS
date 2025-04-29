import React from 'react'
import { Button, Col, Container, Row, Image } from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion';


function Sales_traning_section_six() {
    return (
        <>
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
                                    <Accordion.Header>What is sales training?</Accordion.Header>
                                    <Accordion.Body>
                                        Sales training is a structured program designed to help sales professionals improve their skills, product knowledge, and sales techniques. It covers everything from understanding customer needs and building relationships to closing deals and using sales tools effectively. The goal of sales training is to boost performance, increase conversions, and equip teams with the confidence and strategies needed to meet and exceed targets.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>What is an LMS in sales?</Accordion.Header>
                                    <Accordion.Body>
                                        An LMS (Learning Management System) in sales is a digital platform that helps companies train, upskill, and support their sales teams. It provides structured, on-demand access to sales training materials, product knowledge, soft skills development, and performance tracking. By using a sales LMS, organizations can boost sales productivity, reduce onboarding time, and ensure consistent training across teams—whether they’re in the office or on the field.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>Does Acelot offer in-person corporate sales training sessions?</Accordion.Header>
                                    <Accordion.Body>
                                        Yes, Acelot provides customizable in-person corporate sales training sessions designed to align with your business goals. Our expert-led workshops focus on real-world selling techniques, team collaboration, and performance improvement—delivered right at your workplace or preferred location.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>Can AcelotLMS be customised for different sales roles or industries?</Accordion.Header>
                                    <Accordion.Body>
                                        Yes! AcelotLMS allows you to create tailored sales training modules based on roles, products, or industries.
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

export default Sales_traning_section_six
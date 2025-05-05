import React from 'react';
import { Col, Container, Row, Form } from 'react-bootstrap';

function Contact_section_two() {
    return (
        <>
            <section className="Contact_section_two">
                <Container>
                    <Row>
                        <Col lg={4}>
                            <div className='contact-bx'>
                                <i className='bx bx-envelope-open'></i>
                                <h3>Email</h3>
                                <p className='mb-1'>info@acelot.in</p>
                            </div>
                        </Col>

                        <Col lg={4}>
                            <div className='contact-bx'>
                                <i className='bx bx-location-plus'></i>
                                <h3>Address</h3>
                                <p className='mb-0'>90 B Delhi - Jaipur Expressway, Udyog Vihar, Sector 18, Gurugram - 122018, Haryana, India</p>
                            </div>
                        </Col>

                        <Col lg={4}>
                            <div className='contact-bx'>
                                <i className='bx bx-phone-call'></i>
                                <h3>Phone</h3>
                                <p className=''>+91 9205309509</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default Contact_section_two;

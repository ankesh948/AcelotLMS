import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Contact_section_three() {
    return (
        <div>
            <section className="Contact_section_three">
                <Container>
                    <Row className='g-5'>
                        <Col lg={4}>
                            <h2 className='mb-4'>Support</h2>
                            <div className='contact3'>
                                <div className='d-flex align-items-center gap-2 mb-2'>
                                    <i class='bx bxl-whatsapp fs-1 text-success'></i>
                                    <h4 className='lead4'>24/7 WhatsApp Chat Support.</h4>
                                </div>
                                <Button variant='success' className='mb-2' as={Link} to={'https://wa.me/+919999211110'} target='_blank'>
                                    Chat With Us
                                </Button>
                                <p className=''>Our Support team is always there.</p>

                                <hr className='my-4' />

                                <div className='d-flex align-items-center gap-2 mb-2'>
                                    <i class='bx bx-phone fs-2 text-primary'></i>
                                    <h4 className='lead4'>Available on Call.</h4>
                                </div>
                                <Button variant='primary' className='mb-2' as={Link} to={'tel:+919205309509'} target='_blank'>
                                    +91 9205309509
                                </Button>
                                <p className=''>From 10:00 AM to 7:00 PM.</p>


                            </div>
                        </Col>
                        <Col lg={8}>
                            <h2 className='mb-4'>Business Inquiry </h2>
                            <div className='contact-bx3'>
                                <h4 className='blue mb-4'>Fill out the form below and we’ll be in touch right away!</h4>
                                <Form>
                                    <Form.Group className="mb-2" controlId="formFullName">
                                        <Form.Label>Full Name</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>

                                    <Form.Group className="mb-2" controlId="formEmail">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" />
                                    </Form.Group>

                                    <Form.Group className="mb-2" controlId="formPhone">
                                        <Form.Label>Phone</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>

                                    <Form.Group className="mb-2" controlId="formFullName">
                                        <Form.Label>Company</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>

                                    <Form.Group className="mb-2" controlId="formFullName">
                                        <Form.Label>Designation</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>

                                    <Form.Group className="mb-2" controlId="formMessage">
                                        <Form.Label>Message</Form.Label>
                                        <Form.Control as="textarea" rows={3} />
                                    </Form.Group>

                                    <Button variant="primary" className="btn_four mt-4" type="submit">
                                        Submit
                                    </Button>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
}

export default Contact_section_three
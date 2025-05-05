import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Contact_section_four() {
    return (
        <>
            <section className='map_section'>
                <Container >
                    <Row>
                        <Col lg={12} className=''>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.809096456273!2d77.0746994!3d28.485295299999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d190b899cfae3%3A0xe298eaa323b9ba3e!2sAcelot%20Innovation%20Private%20Limited!5e0!3m2!1sen!2sin!4v1746432626765!5m2!1sen!2sin"
                                width="100%"
                                height="450"
                                style={{ border: 0 }} // ✅ style must be an object
                                allowFullScreen // ✅ camelCase for boolean attributes
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade" // ✅ camelCase for this attribute
                            ></iframe>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Contact_section_four
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
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.8103322291886!2d77.07208427601256!3d28.48525809075234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1948b200ff31%3A0x8ef1fb94c54d54c2!2sAcelotLMS!5e0!3m2!1sen!2sin!4v1744657358900!5m2!1sen!2sin"
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
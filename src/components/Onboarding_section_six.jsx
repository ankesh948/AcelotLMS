import React from 'react'
import { Button, Col, Container, Row, Image } from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion';


function Onboarding_section_six() {
    return (
        <>
            <section className='extra_link_solution'>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <h1 className='lead mb-5'>Learning goes beyond onboarding with Acelot.
                            </h1>
                            <div className='extra_link mt-4'>
                                <ul className="list-unstyled d-flex flex-wrap gap-3">
                                    <li>
                                        <a href="/" data-discover="true">Product Training</a>
                                    </li>
                                    <li>
                                        <a href="/" data-discover="true">Remote Workforce Training</a>
                                    </li>
                                    <li>
                                        <a href="/" data-discover="true">Sales Training</a>
                                    </li>
                                    <li>
                                        <a href="/" data-discover="true">Compliance Training</a>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Onboarding_section_six
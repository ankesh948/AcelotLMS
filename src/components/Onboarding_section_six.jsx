import React from 'react'
import { Button, Col, Container, Row, Image } from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';


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
                                        <Link to="/product-training" data-discover="true">Product Training</Link>
                                    </li>
                                    <li>
                                        <Link to="/remote-workforce-training" data-discover="true">Remote Workforce Training</Link>
                                    </li>
                                    <li>
                                        <Link to="/sales-training" data-discover="true">Sales Training</Link>
                                    </li>
                                    <li>
                                        <Link to="/compliance-training" data-discover="true">Compliance Training</Link>
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
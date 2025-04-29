
import React from 'react'
import { Button, Col, Container, Row, Image } from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';


function Sales_traning_section_five() {
    return (
        <>
            <section className='extra_link_solution'>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <h1 className='lead mb-5'>Because winning one deal isn’t the end—it’s just the start
                            </h1>
                            <div className='extra_link mt-4'>
                                <ul className="list-unstyled d-flex flex-wrap gap-3">
                                    <li>
                                        <Link to="/onboarding-training" data-discover="true">Onboarding Training</Link>
                                    </li>
                                    <li>
                                        <Link to="/product-training" data-discover="true">Product Training</Link>
                                    </li>
                                    <li>
                                        <Link to="/remote-workforce-training" data-discover="true">Remote Workforce Training</Link>
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

export default Sales_traning_section_five
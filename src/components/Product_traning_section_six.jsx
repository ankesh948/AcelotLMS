import React from 'react'
import { Col, Container, Row, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom';


function Product_traning_section_six() {
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
                                        <Link to="/onboarding-training" data-discover="true">Onboarding Training</Link>
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

export default Product_traning_section_six
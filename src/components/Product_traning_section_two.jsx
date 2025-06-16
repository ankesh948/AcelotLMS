import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import img_one from '../assets/images/sales1.png'
import img_two from '../assets/images/sales2.png'
import img_three from '../assets/images/sales3.png'
import img_four from '../assets/images/sales4.png'

function Product_traning_section_two() {
    return (
        <>
            <section className="Product_traning_section_two Onboarding_section_two">
                <Container>
                    <Row className="gx-5 align-items-center justify-content-center">
                        <Col lg={10} className="mb-4 text-center">
                            <h1 className="lead mb-3">
                                Why remote training has become a must for organisations in the new age of working?
                            </h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={4} >
                            <div className="problem-bx">
                                <img
                                    src={img_one}
                                    className="img-fluid w-50"
                                    alt=""
                                />
                                <p className="phead fw-600">
                                    Frequent feature releases or changes in product specs make it hard to keep everyone aligned and updated.
                                </p>
                            </div>
                        </Col>

                        <Col lg={4}>
                            <div className="problem-bx">
                                <img
                                    src={img_three}
                                    className="img-fluid w-50"
                                    alt=""
                                />
                                <p className="phead fw-600">
                                    As companies expand or open new territories, delivering standardized training to a growing base of employees, partners, or customers becomes unmanageable without automation.
                                </p>
                            </div>
                        </Col>

                        <Col lg={4} >
                            <div className="problem-bx">
                                <img
                                    src={img_four}
                                    className="img-fluid w-50"
                                    alt=""
                                />
                                <p className="phead fw-600">
                                    Without structured training, it takes too long for new hires to become confident in understanding and explaining the product.
                                    Without structured training, it takes too long for new hires to become confident in understanding and explaining the product.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Product_traning_section_two
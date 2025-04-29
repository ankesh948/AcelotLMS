import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import img_one from '../assets/images/Why-Traditional-Onboarding-one.png'
import img_two from '../assets/images/Why-Traditional-Onboarding-two.png'
import img_three from '../assets/images/Why-Traditional-Onboarding-three.png'
import img_four from '../assets/images/Why-Traditional-Onboarding-four.png'


const Onboarding_section_two = () => {

    return (
        <section className="Onboarding_section_two">
            <Container>
                <Row className="gx-5 align-items-center justify-content-center">
                    <Col lg={10} className="mb-4 text-center" data-aos="fade-down">
                        <h1 className="lead mb-3">
                            So, what’s the difference between sellers who struggle and those who succeed?
                        </h1>
                    </Col>
                </Row>
                <Row>
                    <Col lg={3} data-aos="fade-up" data-aos-delay="100">
                        <div className="problem-bx">
                            <p className="phead fw-600">
                                Instead of pushing customers to buy
                            </p>
                            <p>
                                High-performing reps align their sales process with the way customers prefer to purchase. This approach is developed and perfected through targeted sales training.
                            </p>
                            <img
                                src={img_one}
                                className="img-fluid"
                                alt=""
                            />
                        </div>
                    </Col>

                    <Col lg={3} data-aos="fade-up" data-aos-delay="300">
                        <div className="problem-bx">
                            <p className="phead fw-600">
                                Instead of selling products
                            </p>
                            <p>
                                Top sellers promote solutions to customer problems, a skill honed through comprehensive sales training that emphasises understanding customer needs and tailoring solutions.

                            </p>
                            <img
                                src={img_three}
                                className="img-fluid"
                                alt=""
                            />
                        </div>
                    </Col>
                    <Col lg={3} data-aos="fade-up" data-aos-delay="500">
                        <div className="problem-bx">
                            <p className="phead fw-600">
                                Instead of waiting on inbound orders,
                            </p>
                            <p>
                                Successful salespeople proactively create opportunities with new and existing clients.
                            </p>
                            <img
                                src={img_two}
                                className="img-fluid"
                                alt=""
                            />
                        </div>
                    </Col>
                    <Col lg={3} data-aos="fade-up" data-aos-delay="800">
                        <div className="problem-bx">
                            <p className="phead fw-600">
                                Instead of letting opportunities go stale,
                            </p>
                            <p>
                                High-performing reps use their training to help clients make better, more informed decisions, ensuring no opportunity is left untapped.
                            </p>
                            <img
                                src={img_four}
                                className="img-fluid"
                                alt=""
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Onboarding_section_two;

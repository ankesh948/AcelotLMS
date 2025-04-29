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
          <Col lg={8} className="mb-4 text-center" data-aos="fade-down">
            <h1 className="lead mb-3">
              Why Traditional Onboarding Just Don’t Cut It
            </h1>
          </Col>
        </Row>
        <Row>
          <Col lg={3} data-aos="fade-up" data-aos-delay="100">
            <div className="problem-bx">
              <p className="phead fw-600">
                Companies struggle to bring new hires up to speed quickly
              </p>
              <p>
                Acelot’s onboarding training is designed to fast-track employee
                readiness with clear, goal-driven programs that make learning
                efficient, not exhausting.
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
                New hires don’t retain what they learn during onboarding
              </p>
              <p>
                We break onboarding into bite-sized, spaced-out learning
                sessions that combine interactive training, real-time feedback,
                and guided practice.
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
                New employees often feel disconnected
              </p>
              <p>
                Acelot’s training focuses on building engagement from day
                one—making employees feel included, valued, and aligned with
                organizational values.
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
                Companies often face high early turnover and rehiring costs
              </p>
              <p>
                Acelot’s personalised onboarding journeys reduce early churn by
                building connection, confidence, and clarity—turning fresh hires
                into long-term assets.
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

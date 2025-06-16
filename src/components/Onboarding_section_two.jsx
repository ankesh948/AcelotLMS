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
          <Col lg={8} className="mb-4 text-center"  >
            <h1 className="lead mb-3">
              Why Traditional Onboarding Just Don’t Cut It?
            </h1>
          </Col>
        </Row>
        <Row>
          <Col lg={3} xs={6}>
            <div className="problem-bx">
              <p className="phead fw-600">
                Companies struggle to bring new hires up to speed quickly
              </p>
             
              <img
                src={img_one}
                className="img-fluid"
                alt="An image showing new hires struggling to retain information from conventional onboarding methods."
              />
            </div>
          </Col>

          <Col lg={3} xs={6}>
            <div className="problem-bx">
              <p className="phead fw-600">
                New employees often feel disconnected
              </p>
              <img
                src={img_three}
                className="img-fluid"
                alt="An illustration of new joiners feeling disconnected and unengaged during traditional onboarding."
              />
            </div>
          </Col>
          <Col lg={3} xs={6}>
            <div className="problem-bx">
              <p className="phead fw-600">
                New hires don’t retain what they learn during onboarding
              </p>
              
              <img
                src={img_two}
                className="img-fluid"
                alt="A visual representing companies struggling to quickly bring new hires up to speed."
              />
            </div>
          </Col>
          <Col lg={3} xs={6}>
            <div className="problem-bx">
              <p className="phead fw-600">
              Companies often face high early turnover and rehiring costs
              </p>
             
              <img
                src={img_four}
                className="img-fluid"
                alt="An image depicting high employee turnover costs faced by companies with ineffective onboarding."
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Onboarding_section_two;

import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import heart from '../assets/images/heart.png'
import sec_third from '../assets/images/sec-third.png'


function Compliance_traning_section_three() {
  return (
    <>
      <section className='Compliance_training_three'>
        <Container>
          <Row className='gx-lg-5 align-items-center'>
            <Col lg={7}>
              <h2 className='lead mb-5' data-aos="fade-right">
                Smart Compliance Training Matters: What Numbers Say!
              </h2>
              <div className='d-flex gap-4'>
                <div className='number_Sec' data-aos="fade-up" data-aos-delay="100">
                  <img src={heart} alt="icons" />
                  <h3>41%</h3>
                  <p className='lead4'>
                    41% of businesses without continuous compliance report slowdowns on the sales cycle as a result.
                  </p>
                </div>
                <div className='number_Sec' data-aos="fade-up" data-aos-delay="200">
                  <img src={heart} alt="icons" />
                  <h3>73%</h3>
                  <p className='lead4'>
                    73% of leaders state that meeting compliance standards improves the perception of their business.
                  </p>
                </div>
                <div className='number_Sec' data-aos="fade-up" data-aos-delay="300">
                  <img src={heart} alt="icons" />
                  <h3>40%</h3>
                  <p className='lead4'>
                    40% of teams faced a security breach caused by blind spots resulting from manual compliance practices
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={5} data-aos="zoom-in">
              <img src={sec_third} className='img-fluid' alt="" />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Compliance_traning_section_three
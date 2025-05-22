import React from 'react'
import {Col, Container, Row } from 'react-bootstrap'
import sec_third from '../assets/images/sec-third.png'
import remote_worker from '../assets/images/remote-worker.png'
import remote_banner from '../assets/images/companies.png'
import remote_employee from '../assets/images/remote-employee.png'


function Product_traning_section_three() {
    return (
        <>
            <section className='Product_traning_section_three'>
                <Container>
                    <Row className='gx-lg-5 align-items-center'>
                        <Col lg={7}>
                            <h2 className='lead mb-5' data-aos="fade-right">
                                Product Training By Numbers: What Does Stats Say?
                            </h2>
                            <div className='d-flex gap-4'>
                                <div className='number_Sec' data-aos="fade-up" data-aos-delay="100">
                                    <img src={remote_banner} alt="icons" />
                                    <h3>10–15%</h3>
                                    <p className='lead4'>
                                        When sales teams receive strong product training, they can confidently tailor pitches to match customer needs and expectations. In fact, McKinsey reports that personalization can boost revenue by 10–15% — and that starts with reps who know the product inside out.
                                    </p>
                                </div>
                                <div className='number_Sec' data-aos="fade-up" data-aos-delay="200">
                                    <img src={remote_worker} alt="icons" />
                                    <h3>90%</h3>
                                    <p className='lead4'>
                                       Of customers base their buying decisions on customer service quality — and great service starts with product knowledge. When support teams are well-trained on your product and its latest updates, they resolve issues faster, build trust, and create better customer experiences — all of which drive repeat purchases and long-term sales growth.
                                    </p>
                                </div>
                                <div className='number_Sec' data-aos="fade-up" data-aos-delay="300">
                                    <img src={remote_employee} alt="icons" />
                                    <h3>Effective</h3>
                                    <p className='lead4'>
                                        product knowledge training accelerates employee onboarding, allowing new hires to become productive more quickly.
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

export default Product_traning_section_three
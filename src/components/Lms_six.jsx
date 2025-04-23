import React from 'react'
import { Button, Col, Container, Row, Image } from 'react-bootstrap'
import logo1 from '../assets/images/industry-icon/automotive.png'
import logo2 from '../assets/images/industry-icon/bank.png'
import logo3 from '../assets/images/industry-icon/education.png'
import logo4 from '../assets/images/industry-icon/financial.png'
import logo5 from '../assets/images/industry-icon/food-and-beverage.png'
import logo6 from '../assets/images/industry-icon/health-care.png'
import logo7 from '../assets/images/industry-icon/hospitality.png'
import logo8 from '../assets/images/industry-icon/manufacturing.png'
import logo9 from '../assets/images/industry-icon/retail.png'
import logo10 from '../assets/images/industry-icon/software-it.png'

function Lms_six() {
    return (
        <>
            <section className='Lms_six'>
                <Container>
                    <Row>
                        <Col lg={12} className='text-center'>
                            <h1 className='lead mb-5'>Industries We Serve</h1>
                        </Col>
                    </Row>

                    <Row className='mb-5'>
                        <Col>
                            <div className='Industries_bx'>
                                <img src={logo3} />
                                <h4>Eduction</h4>
                            </div>
                        </Col>
                        <Col>
                            <div className='Industries_bx'>
                                <img src={logo10} />
                                <h4>Software and IT</h4>
                            </div>
                        </Col>
                        <Col>
                            <div className='Industries_bx'>
                                <img src={logo4} />
                                <h4>Financial Services</h4>
                            </div>
                        </Col>
                        <Col>
                            <div className='Industries_bx'>
                                <img src={logo8} />
                                <h4>Manufacturing</h4>
                            </div>
                        </Col>
                        <Col>
                            <div className='Industries_bx'>
                                <img src={logo6} />
                                <h4>Healthcare</h4>
                            </div>
                        </Col>
                    </Row>

                    <Row className='mb-5'>
                        <Col>
                            <div className='Industries_bx'>
                                <img src={logo9} />
                                <h4>Retail</h4>
                            </div>
                        </Col>
                        <Col>
                            <div className='Industries_bx'>
                                <img src={logo5} />
                                <h4>Food and Beverage </h4>
                            </div>
                        </Col>
                        <Col>
                            <div className='Industries_bx'>
                                <img src={logo2} />
                                <h4>Banking</h4>
                            </div>
                        </Col>
                        <Col>
                            <div className='Industries_bx'>
                                <img src={logo1} />
                                <h4>Automotive</h4>
                            </div>
                        </Col>
                        <Col>
                            <div className='Industries_bx'>
                                <img src={logo7} />
                                <h4>Hospitality</h4>
                            </div>
                        </Col>
                    </Row>

                </Container>
            </section>
        </>
    )
}

export default Lms_six
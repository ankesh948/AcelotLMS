import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Home_section_two from '../components/Home_section_two'
import Home_section_six from '../components/Home_section_six'

function Request_demo() {
    return (
        <>
            <section className='requestdemosection'>
                <Container>
                    <Row className='g-lg-5'>
                        <Col lg={6}>
                            <h1 className='slide_head'>Ready to take a closer look at Acelot?</h1>
                        </Col>
                        <Col lg={6}>
                            <form action="" className='formforDemo'>
                                <div className="row">
                                    <div className='col-6'>
                                        <input type='text' className='form-control' placeholder='First name*' />
                                    </div>
                                    <div className='col-6'>
                                        <input type='text' className='form-control' placeholder='Last name*' />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className='col-6'>
                                        <input type='text' className='form-control' placeholder='Work Email*' />
                                    </div>
                                    <div className='col-6'>
                                        <input type='text' className='form-control' placeholder='Phone*' />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className='col-12'>
                                        <input type='text' className='form-control' placeholder='Company Name*' />
                                    </div>
                                    <div className='col-12'>
                                        <input type='text' className='form-control' placeholder='Location*' />
                                    </div>

                                    <div className="col-lg-12">
                                       <Link type='submit' to={''}  class="btn_four mt-4 btn btn-primary">
                                       Book a Demo
                                       </Link>
                                    </div>
                                </div>
                            </form>
                        </Col>
                    </Row>
                </Container>
            </section>

            <Home_section_two />
            <Home_section_six />
            
        </>
    )
}

export default Request_demo
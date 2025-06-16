import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import fourthsection from '../assets/images/Why_section.png'


function Sales_traning_section_seven() {
    return (
        <>
            <section className='Sales_traning_section_seven'>
                <Container>
                    <Row className='align-items-center justify-content-center'>
                        <Col lg={5}>
                            <img src={fourthsection} className='img-fluid' alt="Two employees exploring the various features and functionalities of the AcelotLMS platform." />
                        </Col>
                        <Col lg={7}>
                            <div>
                                <h1 className='lead mb-4'>Why? Because effective sales training is a continuous process, not just a one-off event.
                                </h1>
                                <p className='subhead'>To truly make a difference, sales teams need more than just information—they need a system that fosters lasting change, transforming new skills into daily habits that drive real results.</p>
                                <p>
                                    That’s where Acelot comes in. With 50 years of expertise in B2B sales training, we specialise in in-person, instructor-led sessions that create lasting impact. Our tailored programs focus on developing the right skills, and ensuring your team not only learns but consistently applies them to boost your sales performance. </p>
                            </div>
                        </Col>
                    </Row>

                </Container>
            </section>
        </>
    )
}

export default Sales_traning_section_seven
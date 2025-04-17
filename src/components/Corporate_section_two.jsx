import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import img2 from '../assets/images/img2.png'

function Corporate_section_two() {
    return (
        <>
            <section className='corporate_section_one'>
                <Container>
                    <Row className='gx-5 align-items-center'>
                        <Col lg={5}>
                            <img src={img2} className='img-fluid rounded-5' alt="" />
                        </Col>
                        <Col lg={7}>
                            <h1 className='lead'>B2B Sales Specialities</h1>
                            <p className="subhead mb-3">Customised B2B Training Solutions for Transformative Success</p>
                            <p className='cont'>We offer customised training programs and strategic consultancy to help B2B organisations enhance their performance and achieve tangible results.
                            </p>
                            <p className='cont'> Our unique 5D methodology—Discover, Define, Design, Deliver, and Determine Impact—ensures that our solutions are aligned with your business goals, driving meaningful transformation and long-term success.</p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Corporate_section_two
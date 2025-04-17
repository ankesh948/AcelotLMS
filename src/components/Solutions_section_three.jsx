import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

function Solutions_section_three() {
   return (
      <>
         <section className="Solutions_section_three">
            <Container>
               <Row className="justify-content-center">
                  <Col lg="8" className='text-center mb-5'>
                     <h1 className='lead'>Create foolproof compliance training that leaves nothing to chance</h1>
                     <p className='subhead'>Compliance and security rely on your employees understanding the rules. Easygenerator helps you deliver, update, and track training to ensure they do.</p>
                  </Col>
               </Row>
               <Row className="gx-5  mb-5 align-items-center">
                  <Col lg={4} className='offset-1'>
                     <img className="img-fluid rounded-5"
                        src="/src/assets/images/img2.png" />
                  </Col>
                  <Col lg={6}>
                     <h2 className="lead5 fw-bold">B2B Sales Specialities</h2>
                     <p className="subhead mb-3">Customised B2B Training Solutions for Transformative Success</p>
                     <p className="cont">We offer customised training programs and strategic consultancy to help B2B organisations enhance their performance and achieve tangible results.</p>
                     <p className="cont"> Our unique 5D methodology—Discover, Define, Design, Deliver, and Determine Impact—ensures that our solutions are aligned with your business goals, driving meaningful transformation and long-term success.</p>
                  </Col>
               </Row>

               <Row className="gx-5  align-items-center">
                  <Col lg={6} className='offset-1'>
                     <h2 className="lead5 fw-bold">B2B Sales Specialities</h2>
                     <p className="subhead mb-3">Customised B2B Training Solutions for Transformative Success</p>
                     <p className="cont">We offer customised training programs and strategic consultancy to help B2B organisations enhance their performance and achieve tangible results.</p>
                     <p className="cont"> Our unique 5D methodology—Discover, Define, Design, Deliver, and Determine Impact—ensures that our solutions are aligned with your business goals, driving meaningful transformation and long-term success.</p>
                  </Col>

                  <Col lg={4} className=''>
                     <img className="img-fluid rounded-5"
                        src="/src/assets/images/img2.png" />
                  </Col>
               </Row>

               <Row className='justify-content-center mt-5'>
                  <Col className='text-center'>
                  <Button variant='primary' className='btn_four'>Request a Demo</Button>
                  </Col>
               </Row>
            </Container>
         </section>
      </>
   )
}

export default Solutions_section_three
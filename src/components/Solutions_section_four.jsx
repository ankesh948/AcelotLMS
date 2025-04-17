import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Solutions_section_four() {
   return (
      <>
         <section className="Solutions_section_four">
            <Container>
               <Row className="gx-5 align-items-center justify-content-center">
                  <Col lg={8} className="mb-4 text-center">
                     <h1 className="lead mb-3">
                     Train your team today, avoid compliance risks tomorrow
                     </h1>
                     <p className='subhead'>Equip your teams with self-paced training, like:</p>
                  </Col>

               </Row>
               <Row>
                  <Col lg={4}>
                     <div className="Regulatory-bx">
                        <p className='lead5 fw-600'>Regulatory compliance
                        </p>
                        <img src="https://www.easygenerator.com/wp-content/uploads/2025/01/1-5.png" className='img-fluid' alt="" />
                     </div>
                  </Col>
                  <Col lg={4}>
                     <div className="Regulatory-bx">
                        <p className='lead5 fw-600'>Cybersecurity awareness                        </p>
                        <img src="https://www.easygenerator.com/wp-content/uploads/2025/01/2-5.png" className='img-fluid' alt="" />
                     </div>
                  </Col>
                  <Col lg={4}>
                     <div className="Regulatory-bx">
                        <p className='lead5 fw-600'>Ethics and conduct</p>
                        <img src="https://www.easygenerator.com/wp-content/uploads/2025/01/3-8.png" className='img-fluid' alt="" />
                     </div>
                  </Col>
               </Row>
            </Container>
         </section>
      </>
   )
}

export default Solutions_section_four
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Corporate_section_four() {
    return (
        <>
            <section className='corporate_section_four'>
                <Container>
                    <Row>
                        <Col lg={12} className='text-left mb-4'>
                            <h1 className='lead'><span className='blue'>Acelot</span> Methodology - 5D</h1>
                            <p className='subhead'>Our Integrated Growth Approach is designed to foster the simultaneous development of both organizations and individuals, recognizing that sustainable success is built on the synergy between personal growth and organizational advancement. This approach highlights a shared journey where employees and the organization grow together, achieving mutual benefits through strategic alignment.</p>
                        </Col>
                    </Row>
                    <Row className='gx-5 gy-3'>
                        <Col lg={4}>
                            <div className='fiveDsection'>
                                <img src="" alt="" />
                                <h3 className='hed'>
                                    Discover Gap
                                </h3>
                                <p className='subhead'>We identify the gaps that are holding back the organisation or the individuals from achieving their goals and aspirations.</p>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className='fiveDsection'>
                                <img src="" alt="" />
                                <h3 className='hed'>
                                    Define path
                                </h3>
                                <p className='subhead'>We help to decide on the way forward. </p>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className='fiveDsection'>
                                <img src="" alt="" />
                                <h3 className='hed'>
                                    Design strategy
                                </h3>
                                <p className='subhead'>We set down the time-spaced bridge maps with the required interventions needed to achieve the goals.
                                </p>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className='fiveDsection'>
                                <img src="" alt="" />
                                <h3 className='hed'>
                                    Deliver the plan
                                </h3>
                                <p className='subhead'>We work closely in the implementation and execution of the plan throughout its timelines</p>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className='fiveDsection'>
                                <img src="" alt="" />
                                <h3 className='hed'>
                                    Determine impact
                                </h3>
                                <p className='subhead'>We track progress and monitor the results. We design the approach with the required changes, factoring in the observation as we progress in the implementation.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Corporate_section_four
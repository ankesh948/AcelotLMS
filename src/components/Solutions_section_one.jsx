import React from 'react'
import { Button, Col, Container, Row, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import bg from '../assets/images/corporate-training.png';

function Solutions_section_one() {
    return (
        <>
            <section className="banner_section">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6} className="mb-4 mb-lg-0">
                            <div className="left_banner">
                                <h1 className="slide_head mb-3">
                                    Our Solutions
                                </h1>
                                <p className="slide_description">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates eligendi itaque quia minima iure aut impedit,  illo in nisi quam unde.
                                </p>
                                <p className="">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur ullam totam assumenda delectus aut repudiandae eum, perspiciatis fugit voluptas et. Suscipit tempore voluptatem magnam debitis a nemo possimus, eveniet aperiam?
                                </p>
                                <Button variant="primary" className="btn_two mt-4 mb-5">
                                    Request a Demo
                                </Button>
                            </div>
                        </Col>

                        <Col lg={6}>
                            <div className="right_banner text-center">
                                <Image
                                    src={bg}
                                    alt=""
                                    fluid
                                    className="rounded"
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Solutions_section_one
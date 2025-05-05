import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import banner1 from '../assets/images/1.jpeg';
import banner2 from '../assets/images/2.jpeg';
import banner3 from '../assets/images/3.jpeg';
import banner4 from '../assets/images/4.jpeg';
import banner5 from '../assets/images/banner.jpg';

function HomeSectionOne() {
    return (
        <section className="home_banner_section">
            <Container>
                <Row className="align-items-center">
                    <Col lg={6} className="mb-4 mb-lg-0">
                        <div className="left_banner">
                            <h1 className="slide_head mb-3">
                                Learn more.<br/> Do more.<br/>  All in one place
                            </h1>
                            <p className="slide_description">
                                The Only Learning Platform You’ll Ever Need.
                            </p>

                            <Button as={Link} to={'/contact-us'} variant="primary" className="btn_two mt-4">
                                Request a Demo
                            </Button>

                            <div className="extra_link mt-4">
                                <ul className="list-unstyled d-flex flex-wrap gap-3">
                                    <li><Link to="/" onClick={() => {
                                        setTimeout(() => {
                                            const el = document.getElementById('products');
                                            if (el) el.scrollIntoView({ behavior: 'smooth' });
                                        }, 100);
                                    }}>LMS Platform</Link></li>
                                
                                    <li><Link to="/" onClick={() => {
                                        setTimeout(() => {
                                            const el = document.getElementById('products');
                                            if (el) el.scrollIntoView({ behavior: 'smooth' });
                                        }, 100);
                                    }}>Corporate Training</Link></li>
                                    <li><Link to="/">Resources</Link></li>
                                </ul>
                            </div>
                        </div>
                    </Col>

                    <Col lg={6}>
                        <div className="right_banner text-center">
                            <div className="fadeeffect-custom">
                                <Image src={banner5} className="img-fluid fade-image" />
                                <Image src={banner2} className="img-fluid fade-image" />
                                <Image src={banner3} className="img-fluid fade-image" />
                                <Image src={banner4} className="img-fluid fade-image" />
                                <Image src={banner1} className="img-fluid fade-image" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default HomeSectionOne;
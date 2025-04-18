import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Marquee from "react-fast-marquee";

import logo1 from '../assets/images/logo/logo-1.png';
import logo2 from '../assets/images/logo/logo-2.png';
import logo3 from '../assets/images/logo/logo-3.png';
import logo4 from '../assets/images/logo/logo-4.png';
import logo5 from '../assets/images/logo/logo-5.png';
import logo6 from '../assets/images/logo/logo-6.png';
import logo7 from '../assets/images/logo/logo-7.png';
import logo8 from '../assets/images/logo/logo-8.png';
import logo9 from '../assets/images/logo/logo-9.png';
import logo10 from '../assets/images/logo/logo-10.png';
import logo11 from '../assets/images/logo/logo-11.png';
import logo12 from '../assets/images/logo/logo-12.png';
import logo13 from '../assets/images/logo/logo-13.png';
import logo14 from '../assets/images/logo/logo-14.png';
import logo15 from '../assets/images/logo/logo-15.png';
import logo16 from '../assets/images/logo/logo-16.png';
import logo17 from '../assets/images/logo/logo-17.png';
import logo18 from '../assets/images/logo/logo-18.png';
import logo19 from '../assets/images/logo/logo-19.png';
import logo20 from '../assets/images/logo/logo-20.png';
import logo21 from '../assets/images/logo/logo-21.png';

function Home_section_one() {
    const logos = [
        logo1, logo2, logo3, logo21, logo4, logo13, logo5, logo6, logo7, logo8, logo9, logo10, logo11, logo12, logo14, logo15, logo16, logo17, logo18, logo19, logo20,
    ];

    return (
        <>
            <section className="home_section_two">
                <Container>
                    <Row className="mb-4">
                        <Col lg={12} className='text-center'>
                            <h2 className='lead'>
                                Join the <span>200+</span> companies growing with us
                            </h2>
                        </Col>
                    </Row>
                    <Row className='align-items-center justify-content-center'>
                        <Col lg={12}>
                            <div className='companies_logo'>
                            <Marquee pauseOnHover={true} gradient={false} speed={50}>
                                {logos.map((logo, index) => (
                                    <div key={index} className="mx-4">
                                        <img src={logo} alt={`Logo ${index}`} className="logo-company" />
                                    </div>
                                ))}
                            </Marquee>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Home_section_one;

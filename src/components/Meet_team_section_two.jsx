import React, { useState } from 'react'
import { Col, Container, Row, Image } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import T1 from '../assets/images/team/anjali.jpeg';
import T2 from '../assets/images/team/anju-sabarwal.jpg';
import T3 from '../assets/images/team/arjit-ray.jpeg';
import T4 from '../assets/images/team/arvind-khinvesra.jpg';
import T5 from '../assets/images/team/bharat-joshi.jpg';
import T6 from '../assets/images/team/bhaskar-bhattacharya.jpeg';
import T7 from '../assets/images/team/chandrasekaran-viswanathan.jpeg';
import T8 from '../assets/images/team/danyal-ozair.jpeg';
import T9 from '../assets/images/team/dennis-heckman.jpg';
import T10 from '../assets/images/team/DR.s.-saraswathi.jpg';
import T11 from '../assets/images/team/fathima.jpg';
import T12 from '../assets/images/team/freepik__enhance__38311.jpeg';
import T13 from '../assets/images/team/freepik__enhance__38313.jpeg';
import T14 from '../assets/images/team/grace-arun.jpeg';
import T15 from '../assets/images/team/hasal-faizal.jpg';
import T16 from '../assets/images/team/jagat-rathod.jpg';
import T17 from '../assets/images/team/kala-diwanji.jpeg';
import T18 from '../assets/images/team/manisha-chaudhary.png';
import T19 from '../assets/images/team/partheban.jpg';
import T20 from '../assets/images/team/pooja-patil.jpg';
import T21 from '../assets/images/team/probal-ghosh.jpg';
import T22 from '../assets/images/team/sachin-verma.jpg';
import T23 from '../assets/images/team/sanjeev-singh.jpg';
import T24 from '../assets/images/team/sanyam-sharma.jpeg';
import T25 from '../assets/images/team/seema-dey.jpg';
import T26 from '../assets/images/team/shubam-jayant.jpeg';
import T27 from '../assets/images/team/team-mem-22.jpg';
import T28 from '../assets/images/team/team-mem-25.jpg';
import T29 from '../assets/images/team/team-mem-27.jpg';
import T30 from '../assets/images/team/team-mem-30.jpg';
import T31 from '../assets/images/team/v-natarajan.jpg';
import T32 from '../assets/images/team/rishi-nanda.jpg';
import T33 from '../assets/images/team/rithik-bajoai.jpg';

const teamImages = [
    T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17,
    T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33
];


function Meet_team_section_two() {
    const [swiperRef, setSwiperRef] = useState(null);


    return (
        <>
            <section className="Meet_team_section_two">
                <Container>
                    <Row className='justify-content-center'>
                        <Col lg={10} className='text-center mb-5'>
                            <h1 className='lead'>Our Team Leaders</h1>
                        </Col>
                    </Row>

                    <Row className="align-items-center">
                        <Col lg={12} className="">
                            <Swiper
                                onSwiper={setSwiperRef}
                                slidesPerView={4}
                                // centeredSlides={true}
                                spaceBetween={30}
                                pagination={{ type: 'fraction' }}
                                navigation={true}
                                modules={[Pagination, Navigation]}
                                className="mySwiper"
                            >
                                {teamImages.map((img, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="team_Card">
                                            <div className="flip-card">
                                                <div className="flip-card-inner">
                                                    <div className="flip-card-front">
                                                        <Image src={img} alt={`Team Member ${index + 1}`} />
                                                    </div>
                                                    <div className="flip-card-back">
                                                        <h1>John Doe</h1>
                                                        <p>Architect & Engineer</p>
                                                        <p>We love that guy</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Meet_team_section_two
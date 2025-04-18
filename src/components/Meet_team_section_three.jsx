import React, { useState } from 'react'
import { Col, Container, Row, Image } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import T5 from '../assets/images/team/bharat-joshi.jpg';
import T20 from '../assets/images/team/pooja-patil.jpg';
import T22 from '../assets/images/team/sachin-verma.jpg';
import T24 from '../assets/images/team/sanyam-sharma.jpeg';
import T25 from '../assets/images/team/seema-dey.jpg';
import T26 from '../assets/images/team/shubam-jayant.jpeg';
import T23 from '../assets/images/team/sanjeev-singh.jpg';
import T1 from '../assets/images/team/anjali.jpeg';
import T33 from '../assets/images/team/rithik-bajoai.jpg';
import T34 from '../assets/images/team/ankesh.jpg';
import T19 from '../assets/images/team/partheban.jpg';
import T27 from '../assets/images/team/team-mem-22.jpg';
import T28 from '../assets/images/team/team-mem-25.jpg';
import T30 from '../assets/images/team/team-mem-30.jpg';


import T16 from '../assets/images/team/jagat-rathod.jpg';
import T7 from '../assets/images/team/chandrasekaran-viswanathan.jpeg';
import T8 from '../assets/images/team/danyal-ozair.jpeg';


const teamImages = [
    T22, T5, T20, T25, T26, T24, T1, T23, T33, T34, T19, T27, T28, T16, T30, T7, T8,
];



function Meet_team_section_three() {
    const [swiperRef, setSwiperRef] = useState(null);


    return (
        <>
            <section className="Meet_team_section_two">
                <Container>
                    <Row className='justify-content-center'>
                        <Col lg={10} className='text-center mb-5'>
                            <h1 className='lead'>Our Expert Team</h1>
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
                                                        <Image src={img} alt={`Acelot Team Member ${index + 1}`} />
                                                    </div>
                                                    <div className="flip-card-back">
                                                        <h1>John Doe1</h1>
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

export default Meet_team_section_three
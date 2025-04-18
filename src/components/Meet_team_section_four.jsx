import React, { useState } from 'react'
import { Col, Container, Row, Image } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import T32 from '../assets/images/team/rishi-nanda.jpg';
import T2 from '../assets/images/team/anju-sabarwal.jpg';
import T3 from '../assets/images/team/arjit-ray.jpeg';
import T14 from '../assets/images/team/grace-arun.jpeg';
import T9 from '../assets/images/team/dennis-heckman.jpg';
import T31 from '../assets/images/team/v-natarajan.jpg';
import T10 from '../assets/images/team/DR.s.-saraswathi.jpg';
import T15 from '../assets/images/team/hasal-faizal.jpg';
import T18 from '../assets/images/team/manisha-chaudhary.png';
import T6 from '../assets/images/team/bhaskar-bhattacharya.jpeg';
import T4 from '../assets/images/team/arvind-khinvesra.jpg';
import T17 from '../assets/images/team/kala-diwanji.jpeg';
import T21 from '../assets/images/team/probal-ghosh.jpg';




const teamImages = [
    T2, T3, T4, T6, T9, T10, T14, T15, T17, T18, T21, T31, T32];


function Meet_team_section_four() {
    const [swiperRef, setSwiperRef] = useState(null);


    return (
        <>
            <section className="Meet_team_section_four">
                <Container>
                    <Row className='justify-content-center'>
                        <Col lg={10} className='text-center mb-5'>
                            <h1 className='lead'>Our Trainers</h1>
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

export default Meet_team_section_four
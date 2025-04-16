import React, { useState } from 'react'
import { Col, Container, Row, Image } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';


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
                                slidesPerView={3}
                                centeredSlides={true}
                                spaceBetween={30}
                                pagination={{
                                    type: 'fraction',
                                }}
                                navigation={true}
                                modules={[Pagination, Navigation]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <div className='team_Card'>
                                        <div class="flip-card">
                                            <div class="flip-card-inner">
                                                <div class="flip-card-front">
                                                    <Image src="https://rvs-team-page.onrender.com/photo1.png" />
                                                </div>
                                                <div class="flip-card-back">
                                                    <h1>John Doe</h1>
                                                    <p>Architect & Engineer</p>
                                                    <p>We love that guy</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='team_Card'>
                                        <div class="flip-card">
                                            <div class="flip-card-inner">
                                                <div class="flip-card-front">
                                                    <Image src="https://rvs-team-page.onrender.com/photo1.png" />
                                                </div>
                                                <div class="flip-card-back">
                                                    <h1>John Doe</h1>
                                                    <p>Architect & Engineer</p>
                                                    <p>We love that guy</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='team_Card'>
                                        <div class="flip-card">
                                            <div class="flip-card-inner">
                                                <div class="flip-card-front">
                                                    <Image src="https://rvs-team-page.onrender.com/photo1.png" />
                                                </div>
                                                <div class="flip-card-back">
                                                    <h1>John Doe</h1>
                                                    <p>Architect & Engineer</p>
                                                    <p>We love that guy</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='team_Card'>
                                        <div class="flip-card">
                                            <div class="flip-card-inner">
                                                <div class="flip-card-front">
                                                    <Image src="https://rvs-team-page.onrender.com/photo1.png" />
                                                </div>
                                                <div class="flip-card-back">
                                                    <h1>John Doe</h1>
                                                    <p>Architect & Engineer</p>
                                                    <p>We love that guy</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='team_Card'>
                                        <div class="flip-card">
                                            <div class="flip-card-inner">
                                                <div class="flip-card-front">
                                                    <Image src="https://rvs-team-page.onrender.com/photo1.png" />
                                                </div>
                                                <div class="flip-card-back">
                                                    <h1>John Doe</h1>
                                                    <p>Architect & Engineer</p>
                                                    <p>We love that guy</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </Col>
                    </Row>
                </Container>
            </section>


            <section className="Meet_team_section_two">
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
                                slidesPerView={3}
                                centeredSlides={true}
                                spaceBetween={30}
                                pagination={{
                                    type: 'fraction',
                                }}
                                navigation={true}
                                modules={[Pagination, Navigation]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <div className='team_Card'>
                                        <div class="flip-card">
                                            <div class="flip-card-inner">
                                                <div class="flip-card-front">
                                                    <Image src="https://rvs-team-page.onrender.com/photo1.png" />
                                                </div>
                                                <div class="flip-card-back">
                                                    <h1>John Doe</h1>
                                                    <p>Architect & Engineer</p>
                                                    <p>We love that guy</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='team_Card'>
                                        <div class="flip-card">
                                            <div class="flip-card-inner">
                                                <div class="flip-card-front">
                                                    <Image src="https://rvs-team-page.onrender.com/photo1.png" />
                                                </div>
                                                <div class="flip-card-back">
                                                    <h1>John Doe</h1>
                                                    <p>Architect & Engineer</p>
                                                    <p>We love that guy</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='team_Card'>
                                        <div class="flip-card">
                                            <div class="flip-card-inner">
                                                <div class="flip-card-front">
                                                    <Image src="https://rvs-team-page.onrender.com/photo1.png" />
                                                </div>
                                                <div class="flip-card-back">
                                                    <h1>John Doe</h1>
                                                    <p>Architect & Engineer</p>
                                                    <p>We love that guy</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='team_Card'>
                                        <div class="flip-card">
                                            <div class="flip-card-inner">
                                                <div class="flip-card-front">
                                                    <Image src="https://rvs-team-page.onrender.com/photo1.png" />
                                                </div>
                                                <div class="flip-card-back">
                                                    <h1>John Doe</h1>
                                                    <p>Architect & Engineer</p>
                                                    <p>We love that guy</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='team_Card'>
                                        <div class="flip-card">
                                            <div class="flip-card-inner">
                                                <div class="flip-card-front">
                                                    <Image src="https://rvs-team-page.onrender.com/photo1.png" />
                                                </div>
                                                <div class="flip-card-back">
                                                    <h1>John Doe</h1>
                                                    <p>Architect & Engineer</p>
                                                    <p>We love that guy</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </Col>
                    </Row>
                </Container>
            </section>


        </>
    )
}

export default Meet_team_section_two
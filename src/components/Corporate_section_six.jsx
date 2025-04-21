import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Keyboard, Mousewheel, Navigation } from 'swiper/modules';
import { Col, Container, Row } from 'react-bootstrap';
import 'swiper/css';
import 'swiper/css/effect-coverflow';

import g1 from '../assets/images/gallery/1.jpg'
import g2 from '../assets/images/gallery/2.jpg'
import g3 from '../assets/images/gallery/3.jpg'
import g4 from '../assets/images/gallery/4.jpg'
import g5 from '../assets/images/gallery/5.jpg'
import g6 from '../assets/images/gallery/6.jpg'
import g7 from '../assets/images/gallery/7.jpg'
import g8 from '../assets/images/gallery/8.mp4'
import g9 from '../assets/images/gallery/9.jpg'
import g10 from '../assets/images/gallery/10.jpg'
import g11 from '../assets/images/gallery/11.jpg'
import g12 from '../assets/images/gallery/12.jpg'
import g13 from '../assets/images/gallery/13.jpg'
import g14 from '../assets/images/gallery/14.jpg'
import g15 from '../assets/images/gallery/15.jpg'
import g16 from '../assets/images/gallery/16.jpg'
import g17 from '../assets/images/gallery/17.jpg'
import g18 from '../assets/images/gallery/18.mp4'
import g19 from '../assets/images/gallery/19.jpg'
import g20 from '../assets/images/gallery/DCGPAC.jpg'



function Corporate_section_six() {
    return (
        <>
            <section className='Corporate_section_six'>
                <Container>
                    <Row>
                        <Col lg={12} className='text-center'>
                            <h2 className='lead mb-5'>Our Success Stories
                            </h2>
                        </Col>
                    </Row>
                </Container>

                <div className='swiper_main_bx'>
                    <Swiper
                        modules={[EffectCoverflow, Keyboard, Mousewheel, Navigation]}
                        effect="coverflow"
                        grabCursor={true}
                        centeredSlides={true}
                        loop={true}
                        spaceBetween={0}
                        allowTouchMove={false} // 👈 This disables swipe/drag gesture
                        keyboard={{ enabled: true }}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        // mousewheel={{ thresholdDelta: 70 }}
                        coverflowEffect={{
                            rotate: 15,
                            stretch: 0,
                            depth: 200,
                            modifier: 2.5,
                        }}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 2 },
                        }}
                        initialSlide={1}
                        className="swiper"
                    >
                        <SwiperSlide>
                            <video src={g8} controls loop muted className='w-100' />
                        </SwiperSlide>
                        <SwiperSlide className='bg-white'>
                            <video src={g18} controls loop muted className='w-100 ' />
                            <h4 className='mb-0 p-3 m-auto blue'>Chairman and MD of DCGPAC</h4>
                        </SwiperSlide>
                        
                        <SwiperSlide>
                            <div className="swiper-slide-img">
                                <img src={g1} className='img-fluid' />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="swiper-slide-img">
                                <img src={g2} className='img-fluid' />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="swiper-slide-img">
                                <img src={g3} className='img-fluid' />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="swiper-slide-img">
                                <img src={g4} className='img-fluid' />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="swiper-slide-img">
                                <img src={g5} className='img-fluid' />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="swiper-slide-img">
                                <img src={g6} className='img-fluid' />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="swiper-slide-img">
                                <img src={g7} className='img-fluid' />
                            </div>
                        </SwiperSlide>
                        
                        <SwiperSlide>
                            <img src={g9} className='img-fluid' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={g10} className='img-fluid' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={g11} className='img-fluid' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={g12} className='img-fluid' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={g13} className='img-fluid' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={g14} className='img-fluid' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={g15} className='img-fluid' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={g16} className='img-fluid' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={g17} className='img-fluid' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={g19} className='img-fluid' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={g20} className='img-fluid' />
                        </SwiperSlide>


                        <div className="swiper-navigation">
                            <button className="swiper-button-prev"></button>
                            <button className="swiper-button-next"></button>
                        </div>
                    </Swiper>
                </div>

            </section>
        </>
    )
}

export default Corporate_section_six
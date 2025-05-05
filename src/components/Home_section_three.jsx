import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Keyboard, Mousewheel, Navigation } from 'swiper/modules';
import { Col, Container, Row } from 'react-bootstrap';
import 'swiper/css';
import 'swiper/css/effect-coverflow';

import LMS from '../assets/images/LMS.jpg';
import COPORATE_TRAINING from '../assets/images/COPORATE-TRAINING.jpg';
import AI_PROCT from '../assets/images/AI-PROCT.jpg';




function Home_section_three() {
    return (
        <>
            <section id='products' className='home_section_three'>
                <Container>
                    <Row>
                        <Col lg={12} className='text-center'>
                            <p className='lead5 mb-0'>One Learning Platform</p>
                            <h2 className='lead'>For All Your Learning Needs</h2>
                            <p className='subhead'>Your all-in-one learning solution to engage, train, and elevate every learner at every stage.</p>
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
                        {slides.map((slide, index) => (
                            <SwiperSlide key={index}>
                                <div className="swiper-slide-img">
                                    <img src={slide.image} alt={slide.title} />
                                    {/* svg waves can go here */}
                                </div>
                                <div className="swiper-slide-content">
                                    <h2 className='p-title'>{slide.title}</h2>
                                    <p className='p-description'>{slide.description}</p>
                                    {/* <a className="show-more" href={slide.link} target="_blank" rel="noreferrer">
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                            aria-hidden="true"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12l-3.75 3.75M21 12H3" />
                                        </svg>
                                    </a> */}
                                </div>
                            </SwiperSlide>
                        ))}

                        <div className="swiper-navigation">
                            <button className="swiper-button-prev"></button>
                            <button className="swiper-button-next"></button>
                        </div>
                    </Swiper>
                </div>
            </section>
        </>
    );
}

const slides = [
    {
        title: 'AI Proctoring',
        image: AI_PROCT,
        description: 'Automated proctoring that works silently in the background, so your team spends less time reviewing and more time teaching.',
        link: '/',
    },
    {
        title: 'LMS Platform',
        image: LMS,
        description: 'The Smartest online training software for your modern workforce.',
        link: '/',
    },
    {
        title: 'Corporate Training',
        image: COPORATE_TRAINING,
        description: 'Corporate training that’s as dynamic as your team, offering real-time learning tailored to their roles.',
        link: '/',
    },
    {
        title: 'AI Proctoring',
        image: AI_PROCT,
        description: 'Automated proctoring that works silently in the background, so your team spends less time reviewing and more time teaching.',
        link: '/',
    },
    {
        title: 'LMS Platform',
        image: LMS,
        description: 'The Smartest online training software for your modern workforce.',
        link: '/',
    },
    {
        title: 'Corporate Training',
        image: COPORATE_TRAINING,
        description: 'Corporate training that’s as dynamic as your team, offering real-time learning tailored to their roles.',
        link: '/',
    }

    // add more slides as needed...
];

export default Home_section_three;

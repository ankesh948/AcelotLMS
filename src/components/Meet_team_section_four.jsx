import React, { useState } from 'react'
import { Col, Container, Row, Image, Button } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


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
import T32 from '../assets/images/team/rishi-nanda.jpg';
import { Link } from 'react-router-dom';




const teamImages = [
    {
        name: 'Anju Sabarwal',
        image: T2,
        link: '/'
    },
    {
        name: 'Arjit Ray',
        image: T3,
        link: '/'
    },
    {
        name: 'Arvind Khinvesra',
        image: T4,
        link: 'https://www.linkedin.com/in/arvindkhinvesra/'
    },
    {
        name: 'Bhaskar Bhattacharya',
        image: T6,
        link: 'https://www.linkedin.com/in/aspiroglobal/'
    },
    {
        name: 'Dennis Heckman',
        image: T9,
        link: ''
    },
    {
        name: 'Dr. S. Saraswathi',
        image: T10,
        link: '/'
    },
    {
        name: 'Grace Arun',
        image: T14,
        link: 'https://www.linkedin.com/in/grace-arun-64720a25/'
    },
    {
        name: 'Hasal Faizal',
        image: T15,
        link: '/'
    },
    {
        name: 'Kala Diwanji',
        image: T17,
        link: 'https://www.linkedin.com/in/kala-diwanji-60bitsconsulting/'
    },
    {
        name: 'Manisha Chaudhary',
        image: T18,
        link: 'https://www.linkedin.com/in/manisha-choudharychalktalkslife/'
    },
    {
        name: 'Probal Ghosh',
        image: T21,
        link: 'https://www.linkedin.com/in/probalghosh/'
    },
    {
        name: 'V Natarajan',
        image: T31,
        link: '/'
    },
    {
        name: 'Rishi Nanda',
        image: T32,
        link: 'https://www.linkedin.com/in/rishinandathespiritualist/'
    }
];


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
                                {teamImages.map((item, index) => (
                                    <SwiperSlide key={index}>
                                    <div className="team_Card">
                                        <div className="flip-card">
                                            <div className="flip-card-inner">
                                                <div className="flip-card-front">
                                                    <Image src={item.image} alt={`Acelot Team Member ${index + 1}`} />
                                                </div>
                                                <div className="flip-card-back">
                                                    <h1>{item.name}</h1>
                                                    <Button as={Link} to={item.link} target='_blank' variant="primary" className="btn_three btn-sm" >
                                                        <div className='d-flex gap-1'>
                                                            <i className='bx bxl-linkedin-square fs-3' ></i>
                                                            <span>Linkedin</span>
                                                        </div>
                                                    </Button>
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
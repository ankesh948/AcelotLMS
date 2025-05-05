import React, { useState } from 'react'
import { Col, Container, Row, Image, Button } from 'react-bootstrap'
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
import T1 from '../assets/images/team/anjali.jpeg';
import T33 from '../assets/images/team/rithik-bajoai.jpg';
import T34 from '../assets/images/team/ankesh.jpg';
import T19 from '../assets/images/team/partheban.jpg';
import T27 from '../assets/images/team/team-mem-22.jpg';
import T28 from '../assets/images/team/team-mem-25.jpg';
import T30 from '../assets/images/team/team-mem-30.jpg';
import T31 from '../assets/images/team/syed-AZAR.jpg';


import T16 from '../assets/images/team/jagat-rathod.jpg';
import T7 from '../assets/images/team/chandrasekaran-viswanathan.jpeg';
import T8 from '../assets/images/team/danyal-ozair.jpeg';
import { Link } from 'react-router-dom';


const teamImages = [
    {
        name: 'Sachin Verma',
        image: T22,
        link: 'https://www.linkedin.com/in/sachin-verma-37753a1a7/'
    },
    {
        name: 'Bharat Joshi',
        image: T5,
        link: 'https://www.linkedin.com/in/bharat-joshi-07116395/'
    },
    {
        name: 'Pooja Patil',
        image: T20,
        link: 'https://www.linkedin.com/in/pooja-patil-798098258/'
    },
    {
        name: 'Seema Dey',
        image: T25,
        link: 'https://www.linkedin.com/in/seema-dey-29b96b155/'
    },
    {
        name: 'Shubham Jayant',
        image: T26,
        link: 'https://www.linkedin.com/in/shubhamjayant/'
    },
    {
        name: 'Sanyam Sharma',
        image: T24,
        link: 'https://www.linkedin.com/in/sanyam-sharma-ba2110198/'
    },
    {
        name: 'Anjali Parihar',
        image: T1,
        link: 'https://www.linkedin.com/in/anjali-parihar-b7246a167?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'
    },
    {
        name: 'Muskan Garg',
        image: T30,
        link: 'https://www.linkedin.com/in/muskan-garg9503/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'
    },
    {
        name: 'Ritik Bajpai',
        image: T33,
        link: 'https://www.linkedin.com/in/ritik-bajpai/'
    },
    {
        name: 'Syed Azhar Siddique',
        image: T31,
        link: 'https://www.linkedin.com/in/syed-azhar-siddique-a987091a2/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'
    },
    {
        name: 'Ankesh Kumar',
        image: T34,
        link: 'https://www.linkedin.com/in/ankeshthakur948'
    },
    {
        name: 'Partheban Venkatachalam',
        image: T19,
        link: 'https://www.linkedin.com/in/partheban-venkatachalam-622372250/'
    },
    // {
    //     name: 'Simranjot Kaur',
    //     image: T27,
    //     link: 'https://www.linkedin.com/in/simranjot-kaur-0b69a5313/'
    // },
    // {
    //     name: 'Kaniz Fatima',
    //     image: T28,
    //     link: 'https://www.linkedin.com/in/kanizfatima0318/'
    // },
    {
        name: 'Danyal Ozair',
        image: T8,
        link: 'https://www.linkedin.com/in/danyal-ozair/'
    },
    {
        name: 'Chandrasekaran Viswanathan',
        image: T7,
        link: 'https://www.linkedin.com/in/chandrasekaran-viswanathan-a6440a6/'
    },
    {
        name: 'Probal Ghosh',
        image: T16,
        link: 'https://www.linkedin.com/in/probalghosh/'
    }
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

export default Meet_team_section_three
import React from 'react'
import { Col, Container, Image, Row, Button } from 'react-bootstrap'
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import bgImage from '../assets/images/testimonial_bg.png';
import bgImage1 from '../assets/images/TESTI-01.jpg';
import bgImage2 from '../assets/images/TESTI-02.jpg';
import bgImage3 from '../assets/images/TESTI-03.jpg';

import 'swiper/css';
import 'swiper/css/pagination';


const testimonials = [
  {
    name: 'Mr. Sandeep Banerjee',
    description: 'Acelot has really helped us transform the team to be more proactive, customer centric and flawlessly handle complex customer situation through effective skill building and communication interventions.',
    image: bgImage2,
  },
  {
    name: 'Ms. Shivi Singh',
    description: 'Indeed the program was very well received by the teams. The newly created trackers are implemented by the managers and progress being measured. I am sure the team will incorporate session learning on field.lt was great learning experience.',
    image: bgImage1,
  },
  {
    name: 'Misha Joshi',
    description: 'Team Acelot worked with our Enablement and Leadership team to craft out a very unique program that helps our team anticipate business needs and become a trusted advisor to customers ',
    image: bgImage3,
  }
];



function Home_section_six() {
  return (
    <>
      <section className='home_section_six'
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
      >
        <Container fluid>
          <Row className='align-items-center justify-content-center gx-5'>
            <Col lg={7} xs={12} className='text-center'>
              <h3 className='lead5 blue'>Testimonials</h3>
              <h3 className='lead mb-5'>Get the customer education
                platform that gets results</h3>
            </Col>

            <Col lg={12}>
              <Swiper
                pagination={{
                  dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                {testimonials.map((testimonial, index) => (
                  <SwiperSlide key={index}>
                    <div className='testimonial-bx'>
                      <div className="testimonial_left">
                        <img src={testimonial.image} alt={testimonial.name} className='img-fluid rounded-pill' />
                        <p className='subhead pt-3 mb-1'>{testimonial.name}</p>
                        {/* <p className='testimonial_degi'>{testimonial.designation}</p> */}
                      </div>
                      <div className="testimonial_right">
                        <p className='testimonial_description'>
                          <i className='bx bxs-quote-alt-left pe-3'></i> 
                            {testimonial.description} 
                          <i className='bx bxs-quote-alt-right ps-3' ></i>
                        </p>
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

export default Home_section_six
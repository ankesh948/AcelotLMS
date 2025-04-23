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
    name: 'Sudarshan Bhattacharya',
    description: 'What I love about AcelotLMS is how simple everything is. You can publish your PowerPoint-based courses directly to the LMS in just a few clicks—it’s super quick. Organizing content into folders, creating learning paths, and assigning courses to employees is effortless. Everything just works smoothly!',
    image: bgImage2,
  },
  {
    name: 'Monika Thakur',
    description: 'What I love about AcelotLMS is how simple everything is. We particularly like the reporting feature – reports from AcelotLMS suit our needs and clearly show individual progress in specific areas of literacy. Turnaround time on reports is also very short.',
    // image: bgImage1,
  },
  {
    name: 'Tarun Kureel',
    description: 'We started using AcelotLMS as our learning platform two months ago, and the experience has been seamless. The platform makes it easy to integrate with various content providers, giving our learners smooth access to quality courses and upskilling opportunities. Big kudos to the AcelotLMS team for their proactive support and quick response to every query!',
    // image: bgImage3,
  },
  {
    name: 'Seema Anand',
    description: 'We enrolled our sales team in Acelot’s B2B Sales Training, and within weeks, we saw a noticeable improvement in confidence, communication, and deal closures. The training wasn’t just theory—it was packed with real-world strategies, objection-handling techniques, and practical roleplays. Our reps especially appreciated the personalized feedback and live sessions. Highly recommend it to any company serious about boosting their sales performance!',
    // image: bgImage3,
  }
];


function Lms_five() {
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
              <h3 className='subhead blue'>AcelotLMS</h3>
              <h3 className='lead mb-5'>Testimonials</h3>
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

export default Lms_five
import React from 'react'
import { Col, Container, Image, Row, Button } from 'react-bootstrap'
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';


const testimonials = [
  {
    name: 'Cheryl Quang',
    designation: 'CEO and Founder, Online Courses Australia, Wandr, Learning Lounge',
    image: 'https://ehwmisgwycz.exactdn.com/wp-content/uploads/2023/08/Patty-Costley.png?strip=all&lossy=1&w=1140&ssl=1',
    description: 'Without Docebo, I couldn’t do it. Our customer success managers would go back to having the same conversations five times a day. Our churn would be higher. It’s not a life I want to go back to. Without Docebo, I couldn’t do it. Our customer success managers would go back to having the same conversations five times a day. Our churn would be higher. It’s not a life I want to go back to',
  },
  {
    name: 'Patty Costley',
    designation: 'CEO and Founder, Online Courses Australia, Wandr, Learning Lounge',
    image: 'https://ehwmisgwycz.exactdn.com/wp-content/uploads/2023/08/Patty-Costley.png?strip=all&lossy=1&w=1140&ssl=1',
    description: 'Without Docebo, I couldn’t do it. Our customer success managers would go back to having the same conversations five times a day. Our churn would be higher. It’s not a life I want to go back to. Without Docebo, I couldn’t do it. Our customer success managers would go back to having',
  },
  {
    name: 'Chris Van Reusen',
    designation: 'CEO and Founder, Online Courses Australia, Wandr, Learning Lounge',
    image: 'https://ehwmisgwycz.exactdn.com/wp-content/uploads/2023/08/Patty-Costley.png?strip=all&lossy=1&w=1140&ssl=1',
    description:
      'National art museum in Paris, France. Home to works like the Mona Lisa and Venus de Milo.',
  }
];



function Home_section_six() {
  return (
    <>
      <section className='home_section_six'>
        <Container fluid>
          <Row className='align-items-center justify-content-center gx-5'>
            <Col lg={7} className='text-center'>
              <h3 className='subhead blue'>Tesimonials</h3>
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
                        <img src={testimonial.image} alt={testimonial.name} />
                        <p className='subhead pt-3 mb-1'>{testimonial.name}</p>
                        <p className='testimonial_degi'>{testimonial.designation}</p>
                      </div>
                      <div className="testimonial_right">
                        <p className='testimonial_description'>
                          <i class='bx bxs-quote-alt-left pe-3'></i> 
                            {testimonial.description} 
                          <i class='bx bxs-quote-alt-right ps-3' ></i>
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
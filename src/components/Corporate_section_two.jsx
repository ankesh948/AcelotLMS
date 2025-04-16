import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import img2 from '../assets/images/img2.png'

function Corporate_section_two() {
    return (
        <>
            <section className='corporate_section_one'>
                <Container>
                    <Row className='gx-5 align-items-center'>
                        <Col lg={5}>
                            <img src={img2} className='img-fluid rounded-5' alt="" />
                        </Col>
                        <Col lg={7}>
                            <h1 className='lead'>B2B Sales Specilalities</h1>
                            <p className="subhead mb-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae ex, sit, quo ullam dolorum nostrum numquam aperiam   laboriosam, nisi placeat? Repellendus .</p>
                            <p className='cont'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde harum aspernatur, quos pariatur non neque, in dolores laborum, veritatis praesentium adipisci quo quae placeat. Reprehenderit, deserunt? Incidunt culpa autem veniam aliquam? Ullam distinctio est consequuntur commodi cumque repudiandae eligendi quidem eius sequi! Illum nesciunt amet earum labore possimus tempore ex quam odio, laborum maxime fugiat a obcaecati quisquam! Laboriosam eaque aliquam voluptate facere est officia qui, quos consectetur, dolor voluptatum, ipsa animi corrupti inventore in?</p>
                            <p className='cont'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde harum aspernatur, quos pariatur non neque, in dolores laborum, veritatis praesentium adipisci quo quae placeat. Reprehenderit, deserunt? Incidunt culpa autem veniam aliquam? Ullam distinctio est consequuntur commodi cumque repudiandae eligendi quidem eius sequi!</p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Corporate_section_two
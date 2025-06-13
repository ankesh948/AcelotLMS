import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Home_section_two from '../components/Home_section_two'
import Home_section_six from '../components/Home_section_six'
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";



function Request_demo() {


    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ "namespace": "lets-connect" });
            cal("ui", { "theme": "light", "cssVarsPerTheme": { "light": { "cal-brand": "#326fe8" }, "dark": { "cal-brand": "#1e2b71" } }, "hideEventTypeDetails": false, "layout": "month_view" });
        })();
    }, [])


    return (
        <>
            <section className='banner_section_demo'>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className='demo_section_banner'>
                                <h1 className=''>Book FREE Live Demo</h1>
                                <p className='slide_description'>Meet our Academic Expert to see how online schooling is right fit for your child.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='requestdemosection'>
                <Container>
                    <Row className='g-lg-5'>
                        <Col lg={6}>
                            <h1 className='lead5'>In this Zoom Meeting you will know about :</h1>
                            <ul class="Meeting_bbx">
                                <li class="">
                                   School Recognition and Approvals
                                </li>
                                <li class="">
                                    Benefits of American Curriculum
                                </li>
                                <li class="">
                                   List of Courses Available
                                </li>
                                <li class="">
                                    Best Learning Method for Your Child
                                </li>
                                <li class="">
                                   Examination, Transcript and US High School Diploma
                                </li>
                                <li class="">
                                   College &amp; University Support
                                </li>
                                <li class="">
                                    Easy School Fee Options
                                </li>
                            </ul>
                        </Col>
                        <Col lg={6}>
                            <Cal namespace="lets-connect"
                                calLink="sanyam-sharma/lets-connect"
                                style={{ width: "100%", height: "100%", overflow: "scroll" }}
                                config={{ "layout": "month_view", "theme": "light" }}
                            />
                        </Col>
                    </Row>
                </Container>
            </section>

            <Home_section_two />

        </>
    )
}

export default Request_demo
import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Image } from 'react-bootstrap';

import icon1 from '../assets/images/define.png';
import icon2 from '../assets/images/deliver.png';
import icon3 from '../assets/images/design.png';
import icon4 from '../assets/images/determine.png';
import icon5 from '../assets/images/discover.png';

function Corporate_section_four() {
    const content = [
        {
            icon: icon5,
            title: 'Discover Gap',
            desc: 'We identify the gaps that are holding back the organisation or the individuals from achieving their goals and aspirations.',
        },
        {
            icon: icon1,
            title: 'Define path',
            desc: 'We help to decide on the way forward.',
        },
        {
            icon: icon3,
            title: 'Design strategy',
            desc: 'We set down the time-spaced bridge maps with the required interventions needed to achieve the goals.',
        },
        {
            icon: icon2,
            title: 'Deliver the plan',
            desc: 'We work closely in the implementation and execution of the plan throughout its timelines',
        },
        {
            icon: icon4,
            title: 'Determine impact',
            desc: 'We track progress and monitor the results. We design the approach with the required changes, factoring in the observation as we progress in the implementation.',
        },
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(prevIndex => (prevIndex + 1) % content.length);
        }, 2000); // change every 2 seconds

        return () => clearInterval(interval);
    }, [content.length]);

    return (
        <section className='corporate_section_four'>
            <Container>
                <Row>
                    <Col lg={12} className='text-left mb-4'>
                        <h1 className='lead'><span className='blue'>Acelot</span> Methodology - 5D</h1>
                        <p className='subhead'>
                            Our Integrated Growth Approach is designed to foster the simultaneous development of both organizations and individuals...
                        </p>
                    </Col>
                </Row>
                <Row className='gx-5 gy-5'>
                    {content.map((item, idx) => (
                        <Col lg={4} key={idx}>
                            <div className={`fiveDsection ${activeIndex === idx ? 'active' : ''}`}>
                                <Image src={item.icon} fluid />
                                <h3 className='hed'>{item.title}</h3>
                                <p className='subhead'>{item.desc}</p>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}

export default Corporate_section_four;

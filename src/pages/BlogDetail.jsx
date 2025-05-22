import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import BlogSidebar from '../components/BlogSidebar';

// Dummy data (same as Blog.js)
const allPosts = Array.from({ length: 50 }, (_, i) => ({
    title: `Blog Post ${i + 1}`,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: `https://picsum.photos/800/400?random=${i + 1}`,
    content: `This is the detailed content of Blog Post ${i + 1}. Lorem ipsum dolor sit amet, consectetur adipiscing elit...`
}));

function BlogDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const post = allPosts[parseInt(id)];

    if (!post) return <h2>Blog post not found</h2>;

    return (
        <>
            <section className='banner_cusom'>
                <Container>
                    <Row className='align-items-center justify-content-center'>
                        <Col lg={10}>
                            <div className='blog_banner text-center'>
                                <h1 className='slide_head mb-4 text-white'>{post.title}</h1>
                                <h2 className="subhead text-white">
                                    The skills that made your team successful yesterday might not be enough for tomorrow's challenges. By 2030, 39% of today’s core job skills will no longer exist, partly due to...
                                </h2>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="py-5">
                <Container>
                    <Row>
                        <Col ls={3}>
                            <div className='articlebx'>
                                <h5>In this article:</h5>
                                <hr />
                                <ol type='number' className='px-3'>
                                    <li>
                                        <Link to={'/'}>Why do employees need artificial intelligence (AI) skills?</Link>
                                    </li>
                                    <li>
                                        <Link to={'/'}>AI: Essential skills employees should master in 2025</Link>
                                    </li>
                                    <li>
                                        <Link to={'/'}>How to identify AI skills gaps</Link>
                                    </li>
                                    <li>
                                        <Link to={'/'}>How to start developing AI skills in your organization</Link>
                                    </li>
                                    <li>
                                        <Link to={'/'}>Recommended tools for AI skills development</Link>
                                    </li>
                                </ol>
                            </div>
                        </Col>
                        <Col md={9}>
                            <img src={post.image} alt={post.title} className="img-fluid rounded mb-4" />
                            <h1>{post.title}</h1>
                            <p className="text-muted">Posted on May 19, 2025</p>
                            <p>{post.content}</p>
                        </Col>

                    </Row>
                </Container>
            </section>
        </>
    );
}

export default BlogDetail;

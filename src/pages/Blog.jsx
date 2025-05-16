import React, { useEffect, useState, useCallback } from 'react';
import { Button, Col, Container, Row, Spinner } from 'react-bootstrap';

// Dummy blog posts (simulate 50)
const allPosts = Array.from({ length: 50 }, (_, i) => ({
  title: `Blog Post ${i + 1}`,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  image: `https://picsum.photos/400/200?random=${i + 1}`
}));

function Blog() {
  const [visiblePosts, setVisiblePosts] = useState([]);
  const [postCount, setPostCount] = useState(6);
  const [loading, setLoading] = useState(false);

  const loadPosts = useCallback(() => {
    const newPosts = allPosts.slice(0, postCount);
    setVisiblePosts(newPosts);
    setLoading(false); // Hide loading after posts are added
  }, [postCount]);

  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const fullHeight = document.documentElement.scrollHeight;

    if (scrollTop + windowHeight >= fullHeight - 100 && !loading && postCount < allPosts.length) {
      setLoading(true);
      setTimeout(() => {
        setPostCount((prev) => prev + 6);
      }, 1000); // simulate 1s delay
    }
  }, [loading, postCount]);

  useEffect(() => {
    loadPosts();
  }, [postCount, loadPosts]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <>
      <section className='banner_cusom'>
        <Container>
          <Row className='align-items-center justify-content-center'>
            <Col lg={8}>
              <div className='blog_banner text-center'>
                <h1 className='slide_head mb-4'>Blog</h1>
                <h2 className="slide_description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h2>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='banner_list py-5'>
        <Container>
          <Row className='mb-4'>
            <Col className='d-flex justify-content-center flex-wrap gap-2'>
              {["All", "Online School", "Homeschool", "Case Study", "Parenting Tips", "Life at IS"].map((filter, idx) => (
                <Button key={idx} variant="outline-primary" className="rounded-pill px-3 py-1">
                  {filter}
                </Button>
              ))}
            </Col>
          </Row>

          <Row>
            {visiblePosts.map((post, index) => (
              <Col lg={4} md={6} className='mb-4' key={index}>
                <div className='card h-100 shadow-sm rounded-4'>
                  <img src={post.image} alt={post.title} className='card-img-top rounded-top-4' />
                  <div className='card-body'>
                    <h5 className='card-title'>{post.title}</h5>
                    <p className='card-text'>{post.description}</p>
                    <Button variant="outline-dark" className='rounded-pill'>Read More</Button>
                  </div>
                </div>
              </Col>
            ))}
          </Row>

          {/* 🔄 Loading Spinner */}
          {loading && (
            <div className="text-center py-4">
              <Spinner animation="border" variant="primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </div>
          )}

          {/* ✅ No more posts message */}
          {!loading && postCount >= allPosts.length && (
            <div className="text-center text-muted py-3">No more posts to load</div>
          )}
        </Container>
      </section>
    </>
  );
}

export default Blog;

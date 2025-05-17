import { Card, Form, InputGroup, ListGroup } from 'react-bootstrap';
// import { FaSearch, FaCalendarAlt } from 'react-icons/fa';

const BlogSidebar = () => {
  return (
    <div className='blog-sidebar'>
     

      <Card className='mb-4 shadow-sm rounded-4'>
        <Card.Header className='fw-bold bg-white'>Categories</Card.Header>
        <ListGroup variant='flush'>
          <ListGroup.Item>Learning Management System (3)</ListGroup.Item>
          <ListGroup.Item>AcelotLMS (1)</ListGroup.Item>
        </ListGroup>
      </Card>

      <Card className='mb-4 shadow-sm rounded-4'>
        <Card.Header className='fw-bold bg-white'>Similar Posts</Card.Header>
        <ListGroup variant='flush'>
          <ListGroup.Item className='d-flex gap-3 align-items-start'>
            <div>
              <div className='fw-semibold'>Advantages of AcelotLMS</div>
              <small className='text-muted d-flex align-items-center gap-1'>
                 01-Feb-2024
              </small>
            </div>
          </ListGroup.Item>

          <ListGroup.Item className='d-flex gap-3 align-items-start'>
            <div>
              <div className='fw-semibold'>10 Ways an LMS Can Transform</div>
              <small className='text-muted d-flex align-items-center gap-1'>
                 27-Nov-2024
              </small>
            </div>
          </ListGroup.Item>

          <ListGroup.Item className='d-flex gap-3 align-items-start'>
            <div>
              <div className='fw-semibold'>Top 6 Benefits of LMS</div>
              <small className='text-muted d-flex align-items-center gap-1'>
                 05-Apr-2025
              </small>
            </div>
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
};

export default BlogSidebar;

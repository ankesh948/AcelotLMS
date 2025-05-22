import { Card, Form, InputGroup, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BlogSidebar = () => {
  return (
    <div className='blog-sidebar'>
      <Card className='mb-4 shadow-sm rounded-4'>
        <Card.Header className='fw-bold bg-white blue'>Similar Posts</Card.Header>
        <ListGroup variant='flush'>
          <ListGroup.Item className='d-flex gap-3 align-items-start'>
            <Link to={'/'}>
              <div className='blogSidebar'>
                <div className='fw-semibold tiltle'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, alias, quis ducimus sequi doloribus aut amet, hic laudantium ex et enim? Aliquam doloremque recusandae molestiae, unde sunt saepe impedit porro?</div>
                <small className='text-muted d-flex align-items-center gap-1'>
                  01-Feb-2024
                </small>
              </div>
            </Link>
          </ListGroup.Item>

          <ListGroup.Item className='d-flex gap-3 align-items-start'>
            <Link to={'/'}>
              <div className='blogSidebar'>
                <div className='fw-semibold tiltle'>10 Ways an LMS Can Transform</div>
                <small className='text-muted d-flex align-items-center gap-1'>
                  27-Nov-2024
                </small>
              </div>
            </Link>
          </ListGroup.Item>

          <ListGroup.Item className='d-flex gap-3 align-items-start'>
            <Link to={'/'}>
              <div className='blogSidebar'>
                <div className='fw-semibold tiltle'>Top 6 Benefits of LMS</div>
                <small className='text-muted d-flex align-items-center gap-1'>
                  05-Apr-2025
                </small>
              </div>
            </Link>
          </ListGroup.Item>

          <ListGroup.Item className='d-flex gap-3 align-items-start'>
            <Link to={'/'}>
              <div className='blogSidebar'>
                <div className='fw-semibold tiltle'>Top 6 Benefits of LMS</div>
                <small className='text-muted d-flex align-items-center gap-1'>
                  05-Apr-2025
                </small>
              </div>
            </Link>
          </ListGroup.Item>

          <ListGroup.Item className='d-flex gap-3 align-items-start'>
            <Link to={'/'}>
              <div className='blogSidebar'>
                <div className='fw-semibold tiltle'>Top 6 Benefits of LMS</div>
                <small className='text-muted d-flex align-items-center gap-1'>
                  05-Apr-2025
                </small>
              </div>
            </Link>
          </ListGroup.Item>

          <ListGroup.Item className='d-flex gap-3 align-items-start'>
            <Link to={'/'}>
              <div className='blogSidebar'>
                <div className='fw-semibold tiltle'>Top 6 Benefits of LMS</div>
                <small className='text-muted d-flex align-items-center gap-1'>
                  05-Apr-2025
                </small>
              </div>
            </Link>
          </ListGroup.Item>


        </ListGroup>
      </Card>
    </div>
  );
};

export default BlogSidebar;

// BackToTop.js
import React, { useState, useEffect } from 'react';

import { Image } from 'react-bootstrap';
import acelotaicon from '../assets/images/favicon.svg';

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <button
      type="button"
      className={`btn btn-sm btn-light border position-fixed bottom-0 end-0 m-4 ${visible ? '' : 'd-none'}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
      data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Tooltip on top"
    >
      <Image src={acelotaicon} />
      <p className='mb-0 mt-1 fw-600 '>Top</p>
    </button>
  );
};

export default BackToTop;

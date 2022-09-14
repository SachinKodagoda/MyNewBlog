import React from 'react';

const ArrowUp = props => {
  return (
    <svg
      height='24'
      width='24'
      fill='none'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <line x1='12' x2='12' y1='19' y2='5' />
      <polyline points='5 12 12 5 19 12' />
    </svg>
  );
};

export default ArrowUp;

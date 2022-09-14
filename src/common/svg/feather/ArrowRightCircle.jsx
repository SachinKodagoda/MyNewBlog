import React from 'react';

const ArrowRightCircle = props => {
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
      <circle cx='12' cy='12' r='10' />
      <polyline points='12 16 16 12 12 8' />
      <line x1='8' x2='16' y1='12' y2='12' />
    </svg>
  );
};

export default ArrowRightCircle;

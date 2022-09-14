import React from 'react';

const ArrowUpCircle = props => {
  return (
    <svg
      className='feather feather-arrow-up-circle'
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
      <polyline points='16 12 12 8 8 12' />
      <line x1='12' x2='12' y1='16' y2='8' />
    </svg>
  );
};

export default ArrowUpCircle;

import React from 'react';

const ArrowUpLeft = props => {
  return (
    <svg
      className='feather feather-arrow-up-left'
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
      <line x1='17' x2='7' y1='17' y2='7' />
      <polyline points='7 17 7 7 17 7' />
    </svg>
  );
};

export default ArrowUpLeft;
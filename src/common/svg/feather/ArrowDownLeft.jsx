import React from 'react';

const ArrowDownLeft = props => {
  return (
    <svg
      className='feather feather-arrow-down-left'
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
      <line x1='17' x2='7' y1='7' y2='17' />
      <polyline points='17 17 7 17 7 7' />
    </svg>
  );
};

export default ArrowDownLeft;

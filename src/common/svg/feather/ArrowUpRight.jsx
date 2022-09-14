import React from 'react';

function ArrowUpRight(props) {
  return (
    <svg
      className='feather feather-arrow-up-right'
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
      <line x1='7' x2='17' y1='17' y2='7' />
      <polyline points='7 7 17 7 17 17' />
    </svg>
  );
}

export default ArrowUpRight;

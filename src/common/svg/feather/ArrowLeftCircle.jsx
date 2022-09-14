import React from 'react';

function ArrowLeftCircle() {
  return (
    <svg
      className='feather feather-arrow-left-circle'
      height='24'
      width='24'
      fill='none'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle cx='12' cy='12' r='10' />
      <polyline points='12 8 8 12 12 16' />
      <line x1='16' x2='8' y1='12' y2='12' />
    </svg>
  );
}

export default ArrowLeftCircle;

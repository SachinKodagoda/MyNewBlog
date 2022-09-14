import React from 'react';

function XSquare() {
  return (
    <svg
      className='feather feather-x-square'
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
      <rect height='18' width='18' rx='2' ry='2' x='3' y='3' />
      <line x1='9' x2='15' y1='9' y2='15' />
      <line x1='15' x2='9' y1='9' y2='15' />
    </svg>
  );
}

export default XSquare;

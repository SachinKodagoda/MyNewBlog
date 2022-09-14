import React from 'react';

function Smile() {
  return (
    <svg
      className='feather feather-smile'
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
      <path d='M8 14s1.5 2 4 2 4-2 4-2' />
      <line x1='9' x2='9.01' y1='9' y2='9' />
      <line x1='15' x2='15.01' y1='9' y2='9' />
    </svg>
  );
}

export default Smile;

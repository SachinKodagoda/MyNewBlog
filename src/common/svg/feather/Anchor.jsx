import React from 'react';

const Anchor = props => {
  return (
    <svg
      className='feather feather-anchor'
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
      <circle cx='12' cy='5' r='3' />
      <line x1='12' x2='12' y1='22' y2='8' />
      <path d='M5 12H2a10 10 0 0 0 20 0h-3' />
    </svg>
  );
};

export default Anchor;

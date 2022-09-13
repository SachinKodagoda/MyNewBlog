import React from 'react';

const Speaker = props => {
  return (
    <svg
      className='feather feather-speaker'
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
      <rect height='20' width='16' rx='2' ry='2' x='4' y='2' />
      <circle cx='12' cy='14' r='4' />
      <line x1='12' x2='12.01' y1='6' y2='6' />
    </svg>
  );
};

export default Speaker;

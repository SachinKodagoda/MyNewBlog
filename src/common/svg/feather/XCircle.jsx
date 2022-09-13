import React from 'react';

const XCircle = props => {
  return (
    <svg
      className='feather feather-x-circle'
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
      <line x1='15' x2='9' y1='9' y2='15' />
      <line x1='9' x2='15' y1='9' y2='15' />
    </svg>
  );
};

export default XCircle;

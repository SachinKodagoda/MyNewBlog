import React from 'react';

function Underline() {
  return (
    <svg
      className='feather feather-underline'
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
      <path d='M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3' />
      <line x1='4' x2='20' y1='21' y2='21' />
    </svg>
  );
}

export default Underline;

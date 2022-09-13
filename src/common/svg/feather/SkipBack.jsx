import React from 'react';

const SkipBack = props => {
  return (
    <svg
      className='feather feather-skip-back'
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
      <polygon points='19 20 9 12 19 4 19 20' />
      <line x1='5' x2='5' y1='19' y2='5' />
    </svg>
  );
};

export default SkipBack;

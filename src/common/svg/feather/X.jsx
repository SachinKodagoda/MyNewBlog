import React from 'react';

const X = props => {
  return (
    <svg
      className='feather feather-x'
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
      <line x1='18' x2='6' y1='6' y2='18' />
      <line x1='6' x2='18' y1='6' y2='18' />
    </svg>
  );
};

export default X;
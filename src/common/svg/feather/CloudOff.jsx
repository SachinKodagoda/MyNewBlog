import React from 'react';

const CloudOff = props => {
  return (
    <svg
      className='feather feather-cloud-off'
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
      <path d='M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3' />
      <line x1='1' x2='23' y1='1' y2='23' />
    </svg>
  );
};

export default CloudOff;

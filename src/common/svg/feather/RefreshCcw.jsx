import React from 'react';

function RefreshCcw(props) {
  return (
    <svg
      className='feather feather-refresh-ccw'
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
      <polyline points='1 4 1 10 7 10' />
      <polyline points='23 20 23 14 17 14' />
      <path d='M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15' />
    </svg>
  );
}

export default RefreshCcw;

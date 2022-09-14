import React from 'react';

function Tablet(props) {
  return (
    <svg
      className='feather feather-tablet'
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
      <rect height='20' width='16' rx='2' ry='2' x='4' y='2' />
      <line x1='12' x2='12.01' y1='18' y2='18' />
    </svg>
  );
}

export default Tablet;

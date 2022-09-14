import React from 'react';

const DivideSquare = props => {
  return (
    <svg
      className='feather feather-divide-square'
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
      <rect height='18' width='18' rx='2' ry='2' x='3' y='3' />
      <line x1='8' x2='16' y1='12' y2='12' />
      <line x1='12' x2='12' y1='16' y2='16' />
      <line x1='12' x2='12' y1='8' y2='8' />
    </svg>
  );
};

export default DivideSquare;

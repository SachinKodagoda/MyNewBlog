import React from 'react';

const PlusCircle = props => {
  return (
    <svg
      className='feather feather-plus-circle'
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
      <circle cx='12' cy='12' r='10' />
      <line x1='12' x2='12' y1='8' y2='16' />
      <line x1='8' x2='16' y1='12' y2='12' />
    </svg>
  );
};

export default PlusCircle;

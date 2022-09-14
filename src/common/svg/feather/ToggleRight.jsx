import React from 'react';

const ToggleRight = props => {
  return (
    <svg
      className='feather feather-toggle-right'
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
      <rect height='14' width='22' rx='7' ry='7' x='1' y='5' />
      <circle cx='16' cy='12' r='3' />
    </svg>
  );
};

export default ToggleRight;
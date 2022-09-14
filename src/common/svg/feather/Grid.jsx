import React from 'react';

function Grid() {
  return (
    <svg
      className='feather feather-grid'
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
      <rect height='7' width='7' x='3' y='3' />
      <rect height='7' width='7' x='14' y='3' />
      <rect height='7' width='7' x='14' y='14' />
      <rect height='7' width='7' x='3' y='14' />
    </svg>
  );
}

export default Grid;

import React from 'react';

const Bold = props => {
  return (
    <svg
      className='feather feather-bold'
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
      <path d='M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z' />
      <path d='M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z' />
    </svg>
  );
};

export default Bold;

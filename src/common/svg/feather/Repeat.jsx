import React from 'react';

const Repeat = props => {
  return (
    <svg
      className='feather feather-repeat'
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
      <polyline points='17 1 21 5 17 9' />
      <polyline points='7 23 3 19 7 15' />
      <path d='M3 11V9a4 4 0 0 1 4-4h14' />
      <path d='M21 13v2a4 4 0 0 1-4 4H3' />
    </svg>
  );
};

export default Repeat;

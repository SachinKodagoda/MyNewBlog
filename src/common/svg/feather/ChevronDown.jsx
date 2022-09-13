import React from 'react';

const ChevronDown = props => {
  return (
    <svg
      className='feather feather-chevron-down'
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
      <polyline points='6 9 12 15 18 9' />
    </svg>
  );
};

export default ChevronDown;

import React from 'react';

const ChevronsLeft = props => {
  return (
    <svg
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
      <polyline points='11 17 6 12 11 7' />
      <polyline points='18 17 13 12 18 7' />
    </svg>
  );
};

export default ChevronsLeft;

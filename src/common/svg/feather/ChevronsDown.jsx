import React from 'react';

function ChevronsDown(props) {
  return (
    <svg
      className='feather feather-chevrons-down'
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
      <polyline points='7 13 12 18 17 13' />
      <polyline points='7 6 12 11 17 6' />
    </svg>
  );
}

export default ChevronsDown;

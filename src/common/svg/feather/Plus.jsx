import React from 'react';

const Plus = props => {
  return (
    <svg
      className='feather feather-plus'
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
      <line x1='12' x2='12' y1='5' y2='19' />
      <line x1='5' x2='19' y1='12' y2='12' />
    </svg>
  );
};

export default Plus;

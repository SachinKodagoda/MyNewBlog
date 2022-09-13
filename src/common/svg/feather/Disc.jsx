import React from 'react';

const Disc = props => {
  return (
    <svg
      className='feather feather-disc'
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
      <circle cx='12' cy='12' r='3' />
    </svg>
  );
};

export default Disc;

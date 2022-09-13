import React from 'react';

const Play = props => {
  return (
    <svg
      className='feather feather-play'
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
      <polygon points='5 3 19 12 5 21 5 3' />
    </svg>
  );
};

export default Play;

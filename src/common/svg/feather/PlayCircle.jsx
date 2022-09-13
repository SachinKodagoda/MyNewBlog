import React from 'react';

const PlayCircle = props => {
  return (
    <svg
      className='feather feather-play-circle'
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
      <circle cx='12' cy='12' r='10' />
      <polygon points='10 8 16 12 10 16 10 8' />
    </svg>
  );
};

export default PlayCircle;

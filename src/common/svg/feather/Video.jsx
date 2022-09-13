import React from 'react';

const Video = props => {
  return (
    <svg
      className='feather feather-video'
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
      <polygon points='23 7 16 12 23 17 23 7' />
      <rect height='14' width='15' rx='2' ry='2' x='1' y='5' />
    </svg>
  );
};

export default Video;

import React from 'react';

const Delete = props => {
  return (
    <svg
      className='feather feather-delete'
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
      <path d='M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z' />
      <line x1='18' x2='12' y1='9' y2='15' />
      <line x1='12' x2='18' y1='9' y2='15' />
    </svg>
  );
};

export default Delete;

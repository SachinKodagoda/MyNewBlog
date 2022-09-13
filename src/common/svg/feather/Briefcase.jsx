import React from 'react';

const Briefcase = props => {
  return (
    <svg
      className='feather feather-briefcase'
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
      <rect height='14' width='20' rx='2' ry='2' x='2' y='7' />
      <path d='M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16' />
    </svg>
  );
};

export default Briefcase;

import React from 'react';

const Clipboard = props => {
  return (
    <svg
      className='feather feather-clipboard'
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
      <path d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2' />
      <rect height='4' width='8' rx='1' ry='1' x='8' y='2' />
    </svg>
  );
};

export default Clipboard;

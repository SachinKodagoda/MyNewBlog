import React from 'react';

const Server = props => {
  return (
    <svg
      className='feather feather-server'
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
      <rect height='8' width='20' rx='2' ry='2' x='2' y='2' />
      <rect height='8' width='20' rx='2' ry='2' x='2' y='14' />
      <line x1='6' x2='6.01' y1='6' y2='6' />
      <line x1='6' x2='6.01' y1='18' y2='18' />
    </svg>
  );
};

export default Server;

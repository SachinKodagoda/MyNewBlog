import React from 'react';

const CloudSnow = props => {
  return (
    <svg
      className='feather feather-cloud-snow'
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
      <path d='M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25' />
      <line x1='8' x2='8.01' y1='16' y2='16' />
      <line x1='8' x2='8.01' y1='20' y2='20' />
      <line x1='12' x2='12.01' y1='18' y2='18' />
      <line x1='12' x2='12.01' y1='22' y2='22' />
      <line x1='16' x2='16.01' y1='16' y2='16' />
      <line x1='16' x2='16.01' y1='20' y2='20' />
    </svg>
  );
};

export default CloudSnow;
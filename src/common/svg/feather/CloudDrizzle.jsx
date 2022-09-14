import React from 'react';

const CloudDrizzle = props => {
  return (
    <svg
      className='feather feather-cloud-drizzle'
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
      <line x1='8' x2='8' y1='19' y2='21' />
      <line x1='8' x2='8' y1='13' y2='15' />
      <line x1='16' x2='16' y1='19' y2='21' />
      <line x1='16' x2='16' y1='13' y2='15' />
      <line x1='12' x2='12' y1='21' y2='23' />
      <line x1='12' x2='12' y1='15' y2='17' />
      <path d='M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25' />
    </svg>
  );
};

export default CloudDrizzle;
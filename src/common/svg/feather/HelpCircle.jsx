import React from 'react';

const HelpCircle = props => {
  return (
    <svg
      className='feather feather-help-circle'
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
      <path d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3' />
      <line x1='12' x2='12.01' y1='17' y2='17' />
    </svg>
  );
};

export default HelpCircle;

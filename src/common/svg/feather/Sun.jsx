import React from 'react';

const Sun = props => {
  return (
    <svg
      className='feather feather-sun'
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
      <circle cx='12' cy='12' r='5' />
      <line x1='12' x2='12' y1='1' y2='3' />
      <line x1='12' x2='12' y1='21' y2='23' />
      <line x1='4.22' x2='5.64' y1='4.22' y2='5.64' />
      <line x1='18.36' x2='19.78' y1='18.36' y2='19.78' />
      <line x1='1' x2='3' y1='12' y2='12' />
      <line x1='21' x2='23' y1='12' y2='12' />
      <line x1='4.22' x2='5.64' y1='19.78' y2='18.36' />
      <line x1='18.36' x2='19.78' y1='5.64' y2='4.22' />
    </svg>
  );
};

export default Sun;

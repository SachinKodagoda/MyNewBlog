import React from 'react';

const Aperture = props => {
  return (
    <svg
      className='feather feather-aperture'
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
      <line x1='14.31' x2='20.05' y1='8' y2='17.94' />
      <line x1='9.69' x2='21.17' y1='8' y2='8' />
      <line x1='7.38' x2='13.12' y1='12' y2='2.06' />
      <line x1='9.69' x2='3.95' y1='16' y2='6.06' />
      <line x1='14.31' x2='2.83' y1='16' y2='16' />
      <line x1='16.62' x2='10.88' y1='12' y2='21.94' />
    </svg>
  );
};

export default Aperture;

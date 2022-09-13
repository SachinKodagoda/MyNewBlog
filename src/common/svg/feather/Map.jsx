import React from 'react';

const Map = props => {
  return (
    <svg
      className='feather feather-map'
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
      <polygon points='1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6' />
      <line x1='8' x2='8' y1='2' y2='18' />
      <line x1='16' x2='16' y1='6' y2='22' />
    </svg>
  );
};

export default Map;

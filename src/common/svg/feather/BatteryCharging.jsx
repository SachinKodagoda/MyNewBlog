import React from 'react';

const BatteryCharging = props => {
  return (
    <svg
      className='feather feather-battery-charging'
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
      <path d='M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19' />
      <line x1='23' x2='23' y1='13' y2='11' />
      <polyline points='11 6 7 12 13 12 9 18' />
    </svg>
  );
};

export default BatteryCharging;

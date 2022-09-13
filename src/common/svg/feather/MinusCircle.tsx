import React from 'react';

type TProps = { className: string };
function MinusCircle({ className }: TProps): JSX.Element {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='20'
      height='20'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
      className={className}
    >
      <circle cx='12' cy='12' r='10' />
      <line x1='8' y1='12' x2='16' y2='12' />
    </svg>
  );
}

export default MinusCircle;

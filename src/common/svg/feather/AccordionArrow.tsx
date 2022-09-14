import React from 'react';

type TProps = { className: string };
function AccordionArrow({ className }: TProps): JSX.Element {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='20'
      height='20'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2.5'
      strokeLinecap='round'
      strokeLinejoin='round'
      className={className}
    >
      <polyline points='15 10 20 15 15 20' />
      <path d='M1.1 4v7a4 4 0 0 0 4 4h13' />
    </svg>
  );
}

export default AccordionArrow;

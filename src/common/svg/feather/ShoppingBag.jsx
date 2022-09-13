import React from 'react';

const ShoppingBag = props => {
  return (
    <svg
      className='feather feather-shopping-bag'
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
      <path d='M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z' />
      <path d='M16 10a4 4 0 0 1-8 0' />
      <line x1='3' x2='21' y1='6' y2='6' />
    </svg>
  );
};

export default ShoppingBag;

import React from 'react';

const List = props => {
  return (
    <svg
      className='feather feather-list'
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
      <line x1='8' x2='21' y1='6' y2='6' />
      <line x1='8' x2='21' y1='12' y2='12' />
      <line x1='8' x2='21' y1='18' y2='18' />
      <line x1='3' x2='3.01' y1='6' y2='6' />
      <line x1='3' x2='3.01' y1='12' y2='12' />
      <line x1='3' x2='3.01' y1='18' y2='18' />
    </svg>
  );
};

export default List;
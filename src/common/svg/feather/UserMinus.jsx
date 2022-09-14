import React from 'react';

const UserMinus = props => {
  return (
    <svg
      className='feather feather-user-minus'
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
      <path d='M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2' />
      <circle cx='8.5' cy='7' r='4' />
      <line x1='23' x2='17' y1='11' y2='11' />
    </svg>
  );
};

export default UserMinus;

import React from 'react';

const Save = props => {
  return (
    <svg
      className='feather feather-save'
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
      <path d='M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z' />
      <polyline points='17 21 17 13 7 13 7 21' />
      <polyline points='7 3 7 8 15 8' />
    </svg>
  );
};

export default Save;

import React from 'react';

function Film() {
  return (
    <svg
      className='feather feather-film'
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
      <rect height='20' width='20' rx='2.18' ry='2.18' x='2' y='2' />
      <line x1='7' x2='7' y1='2' y2='22' />
      <line x1='17' x2='17' y1='2' y2='22' />
      <line x1='2' x2='22' y1='12' y2='12' />
      <line x1='2' x2='7' y1='7' y2='7' />
      <line x1='2' x2='7' y1='17' y2='17' />
      <line x1='17' x2='22' y1='17' y2='17' />
      <line x1='17' x2='22' y1='7' y2='7' />
    </svg>
  );
}

export default Film;

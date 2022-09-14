import React from 'react';

function DownloadCloud(props) {
  return (
    <svg
      className='feather feather-download-cloud'
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
      <polyline points='8 17 12 21 16 17' />
      <line x1='12' x2='12' y1='12' y2='21' />
      <path d='M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29' />
    </svg>
  );
}

export default DownloadCloud;

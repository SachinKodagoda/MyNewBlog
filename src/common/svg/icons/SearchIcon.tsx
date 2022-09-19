/* eslint-disable react/jsx-props-no-spreading */
import { ISvg } from '@ts/common';

export function SearchIcon({ fill, height = 24, size, width = 24, ...props }: ISvg) {
  return (
    <svg fill='none' height={size || height} viewBox='0 0 24 24' width={size || width} {...props}>
      <path
        d='M11.5 21a9.5 9.5 0 1 0 0-19 9.5 9.5 0 0 0 0 19ZM22 22l-2-2'
        stroke={fill}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
      />
    </svg>
  );
}

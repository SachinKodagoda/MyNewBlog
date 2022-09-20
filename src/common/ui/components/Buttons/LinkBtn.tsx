import { colors } from '@theme/baseTheme';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

type TProps = {
  passHref?: boolean;
  href?: string;
  children: JSX.Element | string;
  bottom?: string;
  height?: string;
};
function LinkBtn({ children, href = '', passHref = true, bottom = '1px', height = '1px' }: TProps): JSX.Element {
  // If the child of Link is a custom component that wraps an <a> tag, you must add passHref to Link
  return (
    <Container bottom={bottom} height={height}>
      <Link href={href} passHref={passHref}>
        {children}
      </Link>
      <div className='line' />
    </Container>
  );
}

export default LinkBtn;

const Container = styled.div<{ bottom: string; height: string }>`
  cursor: pointer;
  position: relative;
  transition: all 0.2s ease-in;
  color: ${colors.blue9};
  flex-shrink: 0;
  .line {
    position: absolute;
    bottom: ${p => p.bottom};
    left: 0%;
    background: ${colors.blue9};
    width: 100%;
    transition: all 0.2s ease-in;
    height: ${p => p.height};
  }
  &:hover {
    font-weight: 500;
  }
  &:hover .line {
    width: 0;
    height: 0;
    left: 50%;
    background: ${colors.black};
  }
`;

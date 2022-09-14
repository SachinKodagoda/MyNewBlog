import React from 'react';

import Link from 'next/link';
import styled from 'styled-components';

import { colors } from '@theme/baseTheme';

type TProps = {
  passHref?: boolean;
  href?: string;
  children: JSX.Element | string;
};
function LinkBtn({ children, href = '', passHref = true }: TProps): JSX.Element {
  // If the child of Link is a custom component that wraps an <a> tag, you must add passHref to Link

  return (
    <Container>
      <Link href={href} passHref={passHref}>
        {children}
      </Link>
      <div className='line' />
    </Container>
  );
}

export default LinkBtn;

const Container = styled.div`
  cursor: pointer;
  position: relative;
  transition: all 0.2s ease-in;
  color: ${colors.dark_blue};
  flex-shrink: 0;
  .line {
    position: absolute;
    bottom: 1px;
    left: 0%;
    background: ${colors.dark_blue};
    width: 100%;
    transition: all 0.2s ease-in;
    height: 1px;
  }
  &:hover {
    color: ${colors.black};
  }
  &:hover .line {
    width: 0;
    height: 0;
    left: 50%;
    bottom: 0;
    background: ${colors.black};
  }
`;

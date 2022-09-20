import { colors } from '@theme/baseTheme';
import React from 'react';
import styled from 'styled-components';

type TProps = {
  clickHandler: () => void;
  children: JSX.Element | string;
};
function RouteBtn({ children, clickHandler }: TProps): JSX.Element {
  return (
    <Container onClick={clickHandler}>
      {children}
      <div className='line' />
    </Container>
  );
}

export default RouteBtn;

const Container = styled.div`
  cursor: pointer;
  position: relative;
  transition: all 0.2s ease-in;
  color: ${colors.blue9};
  flex-shrink: 0;
  .line {
    position: absolute;
    bottom: 1px;
    left: 0%;
    background: ${colors.blue9};
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

import { colors } from '@theme/baseTheme';
import React from 'react';
import styled from 'styled-components';

type TProps = {
  children: JSX.Element | string;
  onClick: () => void;
};
function HighlightBtn({ children, onClick }: TProps): JSX.Element {
  return (
    <Container onClick={onClick}>
      {children}
      <div className='line' />
    </Container>
  );
}

export default HighlightBtn;

const Container = styled.div`
  cursor: pointer;
  position: relative;
  transition: all 0.2s ease-in;
  color: ${colors.blue9};
  flex-shrink: 0;
  display: inline-flex;
  .line {
    position: absolute;
    bottom: 2px;
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
    bottom: 2px;
    background: ${colors.black};
  }
`;

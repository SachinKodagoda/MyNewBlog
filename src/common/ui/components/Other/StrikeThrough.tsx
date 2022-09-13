import { colors } from '@theme/baseTheme';
import React from 'react';
import styled from 'styled-components';

type TProps = { value: string; strikeColor?: string; fontColor?: string; needStrike?: boolean };
function StrikeThrough({
  value,
  strikeColor = colors.black,
  fontColor = colors.black,
  needStrike = false,
}: TProps): JSX.Element {
  return (
    <Container strikeColor={strikeColor} fontColor={fontColor} needStrike={needStrike}>
      {value}
    </Container>
  );
}

export default StrikeThrough;

const Container = styled.div<{ strikeColor: string; fontColor: string; needStrike: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  color: ${p => (p.needStrike ? p.fontColor : 'inherit')};
  &::after {
    transition: width 0.4s ease-in;
    content: '';
    width: ${p => (p.needStrike ? 'calc(100% + 4px)' : '0px')};
    border-radius: 10px;
    height: 1px;
    background: ${p => p.strikeColor};
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    opacity: 0.6;
  }
`;

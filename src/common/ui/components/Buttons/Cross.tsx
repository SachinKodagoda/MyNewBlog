import { colors, devices } from '@theme/baseTheme';
import React from 'react';
import styled from 'styled-components';

type TProps = {
  menuOpened: boolean;
  clickHandler: React.Dispatch<React.SetStateAction<boolean>>;
};
function Cross({ clickHandler, menuOpened }: TProps): JSX.Element {
  return (
    <Container
      className={`${(menuOpened as boolean) ? 'open' : ''}`}
      type='button'
      onClick={() => clickHandler(state => !state)}
    >
      <span />
      <span />
      <span />
      <span />
    </Container>
  );
}

export default Cross;

const barHeight = 4;
const barWidth = barHeight * 7;
const marginTwo = barHeight * 2;
const marginFour = barHeight * 4;
const marginFive = barHeight * 5;

const Container = styled.button`
  width: ${barWidth}px;
  height: ${marginFive}px;
  position: relative;
  margin: 50px 0;
  transform: rotate(0deg);
  transition: 0.5s ease-in-out;
  cursor: pointer;
  @media ${devices.minDesktopSM} {
    display: none;
  }
  & > span {
    display: block;
    position: absolute;
    height: ${barHeight}px;
    width: 100%;
    background: ${colors.black};
    border-radius: ${barHeight}px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out;
  }

  & span:nth-child(1) {
    top: 0px;
  }

  & span:nth-child(2),
  & span:nth-child(3) {
    top: ${marginTwo}px;
  }

  & span:nth-child(4) {
    top: ${marginFour}px;
  }

  &.open span:nth-child(1) {
    top: ${marginTwo}px;
    width: 0%;
    left: 50%;
  }

  &.open span:nth-child(2) {
    transform: rotate(45deg);
  }

  &.open span:nth-child(3) {
    transform: rotate(-45deg);
  }

  &.open span:nth-child(4) {
    top: ${marginTwo}px;
    width: 0%;
    left: 50%;
  }
`;

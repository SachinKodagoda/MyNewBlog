import { colors } from '@theme/baseTheme';
import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

function BookingLogo(): JSX.Element {
  const [animate, setAnimate] = useState('');
  useEffect(() => {
    const timer1 = setTimeout(() => {
      setAnimate('animate_rotation');
    }, 1000);
    const timer2 = setTimeout(() => {
      setAnimate('animate_width');
    }, 2000);
    const timer3 = setTimeout(() => {
      setAnimate('animate_width animate_border');
    }, 3000);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);
  return (
    <Container className={animate}>
      <Txt>
        TWIN
        <br />
        SHIELD
        <br />
        RESORT
      </Txt>
    </Container>
  );
}

export default BookingLogo;

// Styles 👕🧦👗🧣🧥👔 -->

const rotate = keyframes`
  from {
    transform: rotate(0deg);
    transform: translate(-50%, -50%) rotate3d(0, 0, 1, -200deg);
  }
  to {
    transform-origin: center;
    transform: translate(-50%, -50%) translate3d(0, 0, 0);
  }
`;

const Container = styled.div`
  position: absolute;
  left: 50%;
  top: calc(50% + 40px);
  transform: translate(-50%, -50%);
  font-family: 'Roboto', sans-serif;
  text-shadow: 1px 1px ${colors.black}, 2px 2px ${colors.black}, 3px 3px ${colors.black}, 4px 4px ${colors.black},
    5px 5px ${colors.black}, 6px 6px ${colors.black};
  font-weight: 900;
  font-size: 50px;
  width: 0;
  height: 250px;
  border-right: 2px solid ${colors.white};
  border-left: 2px solid ${colors.white};
  overflow: hidden;
  transition: all 1s;
  transition-timing-function: ease-in-out;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
  user-select: none;
  @media only screen and (min-width: 576px) {
    & {
      top: calc(50% + 40px);
    }
  }
  &.animate_rotation {
    animation-name: ${rotate};
    animation-duration: 1s;
    animation-iteration-count: 1;
  }
  &.animate_width {
    width: 260px !important;
  }
  &.animate_border {
    border: none !important;
  }
`;

const Txt = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  width: 250px;
  height: auto;
  line-height: 1.5em;
  color: ${colors.white};
  &::first-letter {
    font-size: 1.3em;
    font-style: italic;
    color: ${colors.royalGold};
  }
`;

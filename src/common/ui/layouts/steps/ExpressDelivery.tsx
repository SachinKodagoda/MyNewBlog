import { colors } from '@theme/baseTheme';
import { Translations } from '@util/localize';
import React from 'react';
import styled, { keyframes } from 'styled-components';

function ExpressDelivery(): JSX.Element {
  const t = Translations();

  return (
    <Container>
      <div className='blink' />
      <span className='delivery_in'>{t.expressDeliveryIn}</span>
      &nbsp;
      <span className='delivery_days'>{t.just7Days}</span>
    </Container>
  );
}

export default ExpressDelivery;

const blinker = keyframes`
  50% {
    opacity: 0;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .delivery_in {
    text-transform: capitalize;
  }
  .delivery_days {
    color: ${colors.green2};
    font-weight: 700;
  }
  .blink {
    width: 10px;
    height: 10px;
    background: ${colors.green2};
    border-radius: 100%;
    margin-right: 10px;
    animation: ${blinker} 1.8s linear infinite;
  }
`;

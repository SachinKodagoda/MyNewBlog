import BouncingDots from '@components/Loaders/BouncingDots';
import React from 'react';
import styled from 'styled-components';

function WaitingPage(): JSX.Element {
  return (
    <Container>
      <BouncingDots />
      Loading
    </Container>
  );
}

export default WaitingPage;

const Container = styled.div`
  font-size: 20px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: none;
  width: 100vw;
  height: 100vh;
  gap: 40px;
  flex-direction: column;
`;

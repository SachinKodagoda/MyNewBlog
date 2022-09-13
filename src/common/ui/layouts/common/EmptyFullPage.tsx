import React from 'react';
import styled from 'styled-components';

function EmptyFullPage(): JSX.Element {
  return <Container />;
}

export default EmptyFullPage;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
`;

import React from 'react';
import styled from 'styled-components';

type TProps = {
  hrefVal: string;
  txt: string;
};

function SkipLink({ hrefVal = 'index_main', txt = 'Skip to main' }: TProps): JSX.Element {
  return <Container href={hrefVal}>{txt}</Container>;
}

export default SkipLink;

// Styles 👕🧦👗🧣🧥👔 -->

const Container = styled.a`
  position: absolute;
  top: -40px;
  left: 0;
  background: #000000;
  color: white;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  z-index: 100;

  &:focus {
    top: 0;
  }
`;

import { colors } from '@theme/baseTheme';
import { fistCapitalLetter } from '@util/normalize';
import React from 'react';
import styled from 'styled-components';

type TProps = {
  text: string;
  size?: string;
  color?: string;
  background?: string;
  fontSize?: string;
};
function LetterImg({
  background = colors.gray3,
  color = colors.black,
  size = '50px',
  fontSize = '1.5rem',
  text,
}: TProps): JSX.Element {
  return (
    <Container style={{ fontSize, background, color, width: size, height: size, lineHeight: size }}>
      {fistCapitalLetter(text)}
    </Container>
  );
}

export default LetterImg;

const Container = styled.div`
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

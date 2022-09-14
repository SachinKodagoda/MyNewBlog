import { colors } from '@theme/baseTheme';
import React from 'react';
import styled from 'styled-components';

type TProps = { type: string; text: string; className?: string; onClick?: () => void };
function Buttons({ className = '', onClick, text, type }: TProps): JSX.Element {
  if (type === 'type1') {
    return (
      <Type1 className={`${className}`} type='button' onClick={onClick}>
        {text}
      </Type1>
    );
  }
  return (
    <Type2 type='button' onClick={onClick}>
      Buttons
    </Type2>
  );
}

export default Buttons;

const Type1 = styled.button`
  background: ${colors.goldenBrown};
  padding: 1rem 1.5rem;
  width: fit-content;
  border-radius: 60px;
  cursor: pointer;
  color: ${colors.white};
`;

const Type2 = styled.button`
  cursor: pointer;
`;

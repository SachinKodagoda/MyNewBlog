import { colors } from '@theme/baseTheme';
import React from 'react';
import styled from 'styled-components';

type TProp = {
  onClick: () => void;
  checked: boolean;
  value: string;
  name: string;
  size?: number;
};

function CheckBox({ checked, name, onClick, size = 20, value }: TProp): JSX.Element {
  return (
    <Container onClick={onClick} size={size}>
      <input
        type='checkbox'
        className='checkmarkInput'
        checked={checked}
        name={name}
        value={value}
        onChange={() => {
          // eslint-disable-next-line no-console
          console.log(value);
        }}
      />
      <span className='checkmark' />
    </Container>
  );
}

export default CheckBox;

const Container = styled.div<{ size: number }>`
  position: relative;
  height: ${({ size }) => size}px;
  width: ${({ size }) => size}px;
  user-select: none;
  border: 1px solid ${colors.black};
  border-radius: 4px;
  overflow: hidden;
  flex: none;

  .checkmarkInput {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    z-index: 1;
    cursor: pointer;
  }

  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: scale(0);
    transition: transform 0.2s, border-radius 0.2s;
    transform-origin: center center;
    border-radius: 100%;
  }

  .checkmarkInput:checked + .checkmark {
    background: ${colors.black};
    transform: scale(1);
    border-radius: 0%;
  }

  .checkmark:after {
    content: '';
    position: absolute;
    display: none;
    left: 50%;
    top: ${({ size }) => size * 0.4}px;
    width: ${({ size }) => size * 0.3}px;
    height: ${({ size }) => size * 0.6}px;
    border: solid white;
    border-width: 0 3px 3px 0;
    transform: translate(-50%, -50%) rotate(45deg);
  }

  .checkmarkInput:checked ~ .checkmark:after {
    display: block;
  }
`;

import useLockedBody from '@hooks/useLockedBody';
import { Cross } from '@svg/common';
import { colors, devices } from '@theme/baseTheme';
import React from 'react';
import styled from 'styled-components';

type TProps = { children: JSX.Element; onClickOutside: () => void; modalOpen: boolean };
function Modal({ children, modalOpen, onClickOutside }: TProps): JSX.Element | null {
  useLockedBody(modalOpen);
  if (!modalOpen) return null;
  return (
    <OuterContainer
      role='button'
      tabIndex={0}
      onKeyPress={e => {
        e.stopPropagation();
        onClickOutside();
      }}
      onClick={e => {
        e.stopPropagation();
        onClickOutside();
      }}
    >
      <div
        className='innerContainer'
        tabIndex={0}
        role='button'
        onKeyPress={e => {
          e.stopPropagation();
        }}
        onClick={e => {
          e.stopPropagation();
        }}
      >
        <button
          type='button'
          className='button'
          onClick={e => {
            e.stopPropagation();
            onClickOutside();
          }}
        >
          <Cross cls='cross' />
        </button>
        {children}
      </div>
    </OuterContainer>
  );
}

export default Modal;

const OuterContainer = styled.div`
  width: 100%;
  height: calc(100% + 60px);
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  position: fixed;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 8px;
  @media ${devices.minTablet} {
    padding: 16px;
  }

  .innerContainer {
    background: ${colors.white};
    min-width: fit-content;
    min-height: fit-content;
    border-radius: 1rem;
    padding: 2rem;
    position: relative;
  }

  .button {
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;
    cursor: pointer;
    margin: 0;
    padding: 0;
  }

  .cross {
    width: 30px;
    height: 30px;
  }
`;

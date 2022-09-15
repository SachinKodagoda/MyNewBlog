import styled from 'styled-components';

import ArrowRight from '@svg/feather/ArrowRight';
import { colors } from '@theme/baseTheme';

type TArrow = {
  size: number;
};
type TProps = {
  text: string;
  onClickHandler?: () => void;
  isDisabled: boolean;
  type: 'normal' | 'submit';
  arrow?: TArrow | null;
  background?: string;
  color?: string;
};
function Button({
  arrow = null,
  isDisabled,
  onClickHandler,
  text,
  type = 'normal',
  background = `${colors.black}`,
  color = `${colors.white}`,
}: TProps): JSX.Element {
  return (
    <>
      {type === 'normal' && (
        <NormalBtn
          isDisabled={isDisabled}
          onClick={() => {
            if (!isDisabled && onClickHandler) {
              onClickHandler();
            }
          }}
          type='button'
          arrow={arrow}
          background={background}
          color={color}>
          {text}&nbsp;{arrow && <ArrowRight />}
        </NormalBtn>
      )}
      {type === 'submit' && (
        <SubmitBtn
          type='submit'
          isDisabled={isDisabled}
          onClick={e => {
            if (isDisabled) {
              e.preventDefault();
            }
          }}>
          {text}
        </SubmitBtn>
      )}
    </>
  );
}

export default Button;

type TBtn = { isDisabled: boolean; arrow: TArrow | null; color: string; background: string };

const NormalBtn = styled.button<TBtn>`
  background: ${p => (p.isDisabled ? colors.gray3 : p.background)};
  color: ${p => p.color};
  height: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  cursor: ${({ isDisabled }) => (isDisabled ? 'not-allowed' : 'pointer')};
  font-weight: 500;
  text-transform: uppercase;
  .feather-arrow-right {
    width: ${p => p?.arrow?.size || 24}px;
    height: ${p => p?.arrow?.size || 24}px;
  }
`;

const SubmitBtn = styled.button<{ isDisabled: boolean }>`
  appearance: none;
  outline: none;
  border: none;
  background: ${p => (p.isDisabled ? colors.gray1 : colors.black)};
  color: ${p => (p.isDisabled ? colors.gray3 : colors.white)};
  height: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  cursor: ${p => (p.isDisabled ? 'not-allowed' : 'pointer')};
`;

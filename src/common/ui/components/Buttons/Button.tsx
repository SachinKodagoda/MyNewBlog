import Loader from '@components/Loaders/CircularLoader';
import ArrowRight from '@svg/feather/ArrowRight';
import { colors } from '@theme/baseTheme';
import React from 'react';
import styled from 'styled-components';

type TArrow = {
  size: number;
};
type TProps = {
  text: string;
  onClickHandler?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  isDisabled: boolean;
  type: 'normal' | 'submit';
  arrow?: TArrow | null;
  background?: string;
  color?: string;
  height?: string;
  loading?: boolean;
  loaderSize?: string;
  loaderBorder?: string;
  loaderTrackColor?: string;
  loaderColor?: string;
  outlined?: boolean;
  dataCy?: string;
};
function Button({
  dataCy = 'not-available',
  arrow = null,
  isDisabled,
  onClickHandler,
  text,
  type = 'normal',
  background = `${colors.black}`,
  color = `${colors.white}`,
  height = '40px',
  loaderSize = '30px',
  loaderBorder = '10px',
  loaderTrackColor = colors.white,
  loaderColor = colors.black,
  loading = false,
  outlined = false,
}: TProps): JSX.Element {
  return (
    <NormalBtn
      data-cy={dataCy}
      isDisabled={isDisabled}
      onClick={e => {
        if (type === 'normal' && !isDisabled && onClickHandler) {
          e.preventDefault();
          onClickHandler(e);
        } else if (isDisabled) {
          e.preventDefault();
        }
      }}
      type={type === 'submit' ? 'submit' : 'button'}
      arrow={arrow}
      background={background}
      color={color}
      height={height}
      outlined={outlined}>
      {text}&nbsp;{arrow && <ArrowRight className='arrowRight' />}
      {loading && (
        <LoaderCtr>
          <Loader
            show={loading}
            trackColor={loaderTrackColor}
            loaderColor={loaderColor}
            size={loaderSize}
            border={loaderBorder}
          />
        </LoaderCtr>
      )}
    </NormalBtn>
  );
}
export default Button;

type TBtn = {
  isDisabled: boolean;
  arrow: TArrow | null;
  color: string;
  background: string;
  height: string;
  outlined: boolean;
};

const NormalBtn = styled.button<TBtn>`
  background: ${p => (p.isDisabled ? colors.gray3 : p.background)};
  color: ${p => p.color};
  height: ${p => p.height};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  cursor: ${({ isDisabled }) => (isDisabled ? 'not-allowed' : 'pointer')};
  font-weight: 900;
  text-transform: uppercase;
  outline-offset: 2px;
  outline: ${p => (p.outlined ? `1px solid ${colors.black}` : `none`)};
  .arrowRight {
    width: ${p => p?.arrow?.size || 24}px;
    height: ${p => p?.arrow?.size || 24}px;
  }
`;

const LoaderCtr = styled.div`
  width: max-content;
  height: max-content;
  padding-left: 10px;
`;

import { CartContext } from '@ctx/CartContext';
import { colors, devices } from '@theme/baseTheme';
import { ICommonPackageObj, TTab } from '@ts/common';
import React, { useContext } from 'react';
import styled, { keyframes } from 'styled-components';

type TProps = {
  onBtnClick: (key: string) => void;
  topic: string;
  packageObj: ICommonPackageObj | null;
  selected: string | null;
  itIs: TTab;
};
function Selections({ itIs, onBtnClick, packageObj, selected, topic }: TProps): JSX.Element {
  const { mscObj, orientation, setOrientation } = useContext(CartContext);
  return (
    <Container>
      <div className='topic'>{topic}</div>
      <FigureCount repeatCount={itIs === 'type' ? 2 : 3} border={false}>
        {packageObj &&
          Object.entries(packageObj).map(([key, value], i) => (
            <button
              className={`${key === selected ? 'figureCountItem selected' : 'figureCountItem'}`}
              type='button'
              onClick={() => onBtnClick(key)}
              key={`types-${i + 1}`}
            >
              {itIs === 'size' && <div className='title1'>{value.desc[1]}</div>}
              <div className='title2'>
                {value.desc[0]}
                {value.iconUrl && value.iconUrl}
              </div>
            </button>
          ))}
      </FigureCount>

      {itIs === 'size' && (
        <FigureCount repeatCount={2} border>
          {mscObj?.orientation?.map((item, i) => (
            <button
              className={`${item.key === orientation ? 'figureCountItem selected' : 'figureCountItem'}`}
              type='button'
              onClick={() => setOrientation(item.key)}
              key={`orientation-${i + 1}`}
            >
              <div className='title2'>{item.value}</div>
            </button>
          ))}
        </FigureCount>
      )}

      {/* {itIs === 'type' && selectedTypeObj?.key === 'low_featured' && (
        <FigureCount repeatCount={2} border>
          {mscObj.features?.map((item, i) => (
            <button
              className={`${item.key === features ? 'figureCountItem selected' : 'figureCountItem'}`}
              type='button'
              onClick={() => setFeatures(item.key)}
              key={`orientation-${i + 1}`}
            >
              <div className='title2'>{item.value}</div>
            </button>
          ))}
        </FigureCount>
      )} */}
    </Container>
  );
}

export default Selections;

const leftToCenter = keyframes`
  0% {
      opacity: 0;
      transform: translateX(30px);
  }
  100% {
      opacity: 1;
      transform: translateX(0);
  }
`;

const Container = styled.div`
  .topic {
    text-transform: uppercase;
    align-self: center;
    text-align: center;
    font-size: 1rem;
    font-weight: 500;
    position: relative;
    padding-bottom: 8px;
    margin-bottom: 32px;
    overflow-x: hidden;
    &::after {
      content: '';
      position: absolute;
      left: 50%;
      bottom: 2px;
      transform: translate(-50%, -50%);
      width: 50%;
      height: 2px;
      background: ${colors.goldenBrown};
      border-radius: 6px;
    }
    @media ${devices.minDesktopSM} {
      font-size: 1.6rem;
    }
  }
`;

const FigureCount = styled.div<{ repeatCount: number; border: boolean }>`
  display: grid;
  grid-template-columns: repeat(${({ repeatCount }) => repeatCount}, 1fr);
  gap: 16px;
  margin: 16px 0;
  animation: ${leftToCenter} 0.5s 0.2s backwards;
  opacity: 1;
  visibility: visible;
  transform: translateX(0);
  position: relative;
  z-index: 2;
  transition: visibility 0.7s;
  justify-content: center;
  align-items: center;
  ${({ border }) =>
    border
      ? `border-top: 1px solid ${colors.black}; border-bottom: 1px solid ${colors.black}; padding: 16px; background: ${colors.light_gray};`
      : ''};

  .figureCountItem {
    padding: 8px;
    border-radius: 4px;
    text-align: center;
    font-weight: 600;
    cursor: pointer;
    background: 1;
    color: ${colors.black};
    border: 1px solid ${colors.black};
  }

  .fig {
    fill: ${colors.black};
    width: 30px;
    height: 30px;
    border: 2px solid ${colors.black};
    border-radius: 50%;
    padding: 2px;
  }

  .selected {
    background: ${colors.black};
    color: ${colors.white};
    & .fig {
      fill: ${colors.white};
      border: 2px solid ${colors.white};
    }
  }

  .title1 {
    font-weight: 600;
  }

  .title2 {
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
  }
`;

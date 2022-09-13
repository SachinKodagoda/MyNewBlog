import { CartContext } from '@ctx/CartContext';
import { colors } from '@theme/baseTheme';
import { Translations } from '@util/localize';
import { normalizedCurrency } from '@util/normalize';
import React, { useContext } from 'react';
import styled from 'styled-components';

function PriceTable(): JSX.Element {
  const t = Translations();
  const {
    currency,
    mscObj,
    orientation,
    selectedFigureObj,
    selectedPaperObj,
    selectedTypeObj,
    totalPreviousPrice,
    totalPrice,
  } = useContext(CartContext);
  return (
    <>
      <PriceTableCtr>
        {selectedTypeObj && (
          <>
            <div className='priceDesc grayLine first'>
              {selectedTypeObj.desc[0]}
              {/* {type === 'low_featured' && <br />}
              {type === 'low_featured' && mscObj.features?.filter(item => item.key === features)[0]?.value} */}
            </div>
            <div className='price grayLine second'>
              <div className='previousPrice'>{normalizedCurrency(selectedTypeObj.prev, currency)}</div>
              <div className='nowPrice'>{normalizedCurrency(selectedTypeObj.now, currency)}</div>
            </div>
          </>
        )}

        {selectedFigureObj && (
          <>
            <div className='priceDesc whiteLine first'>
              {selectedFigureObj.desc[0]} {t.personsAnimals}
            </div>
            <div className='price whiteLine second'>
              <div className='previousPrice'>{normalizedCurrency(selectedFigureObj.prev, currency)}</div>
              <div className='nowPrice'>{normalizedCurrency(selectedFigureObj.now, currency)}</div>
            </div>
          </>
        )}

        {selectedPaperObj && (
          <>
            <div className='priceDesc grayLine first'>
              {selectedPaperObj.desc[1]} <span className='lowercase'>({selectedPaperObj.desc[0]})</span> -{' '}
              {mscObj.orientation?.filter(item => item.key === orientation)[0]?.value}
            </div>
            <div className='price grayLine second'>
              <div className='previousPrice'>{normalizedCurrency(selectedPaperObj.prev, currency)}</div>
              <div className='nowPrice'>{normalizedCurrency(selectedPaperObj.now, currency)}</div>
            </div>
          </>
        )}
      </PriceTableCtr>
      <TotalPriceCover>
        <div className='totCtr'>
          <span className='prevPrice'>{normalizedCurrency(totalPreviousPrice, currency)}</span>
          <span className='totalPrice'>{normalizedCurrency(totalPrice, currency)}</span>
        </div>
      </TotalPriceCover>
    </>
  );
}

export default PriceTable;

const PriceTableCtr = styled.div`
  border-top: 1px solid ${colors.goldenBrown};
  display: grid;
  grid-template-columns: repeat(2, auto);
  padding: 4px 0;
  background: ${colors.light_gray};

  .priceDesc {
    padding: 8px 0;
    text-transform: capitalize;
    white-space: pre-wrap;
    word-break: break-word;
  }

  .lowercase {
    text-transform: lowercase;
  }

  .price {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 8px;
  }

  .previousPrice {
    text-decoration: line-through;
    font-size: 0.8rem;
  }

  .whiteLine {
    background: ${colors.white};
  }

  .first {
    padding: 8px;
  }

  .second {
    padding-right: 8px;
  }
`;

const TotalPriceCover = styled.div`
  border-top: 1px solid ${colors.goldenBrown};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  .totCtr {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 16px;
    padding-right: 8px;
  }
  .prevPrice {
    text-decoration: line-through;
    font-size: 0.8rem;
    margin-right: 8px;
  }
  .totalPrice {
    border-bottom: 2px solid ${colors.goldenBrown};
    position: relative;
    padding-bottom: 2px;
    color: ${colors.red1};
    font-weight: 900;

    &::after {
      content: '';
      position: absolute;
      left: 50%;
      bottom: 1px;
      transform: translate(-50%, -50%);
      width: 100%;
      height: 2px;
      background: ${colors.goldenBrown};
      border-radius: 6px;
    }
  }
`;

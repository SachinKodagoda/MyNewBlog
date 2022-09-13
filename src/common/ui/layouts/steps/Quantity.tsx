import { CartContext } from '@ctx/CartContext';
import ControlBtn from '@layouts/steps/ControlBtn';
import ExpressDelivery from '@layouts/steps/ExpressDelivery';
import PriceTable from '@layouts/steps/PriceTable';
import Selections from '@layouts/steps/Selections';
import { devices } from '@theme/baseTheme';
import { TFigure } from '@ts/common';
import { Translations } from '@util/localize';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import styled from 'styled-components';

function Quantity(): JSX.Element {
  const t = Translations();
  const router = useRouter();
  const { figurePackageObj, selectedFigureObj, selectedTypeObj, setFigureCount, setSelectedTab } =
    useContext(CartContext);

  return (
    <Container>
      <div className='leftContainer'>
        <img
          src={selectedTypeObj?.key === 'hi_featured' ? selectedFigureObj?.imgUrl[0] : selectedFigureObj?.imgUrl[1]}
          alt='sample_1'
          className='sample'
        />
      </div>
      <div className='rightContainer'>
        <Selections
          onBtnClick={key => {
            setFigureCount(key as TFigure);
          }}
          topic={t.numberOfPeople}
          packageObj={figurePackageObj}
          selected={selectedFigureObj?.key || null}
          itIs='quantity'
        />
        <div>
          <PriceTable />
          <ExpressDelivery />
          <ControlBtn
            onBack={() => {
              router.push('/design/type', undefined, { shallow: true });
              setSelectedTab('type');
            }}
            onNext={() => {
              router.push('/design/size', undefined, { shallow: true });
              setSelectedTab('size');
            }}
          />
        </div>
      </div>
    </Container>
  );
}

export default Quantity;

const Container = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  flex-wrap: wrap;

  .sample {
    max-width: 500px;
    height: auto;
    display: block;
    position: relative;
    @media ${devices.maxMobile} {
      width: calc(100vw - 32px);
      height: auto;
    }
  }

  .leftContainer {
    flex-basis: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    min-width: 280px;
    min-height: 280px;
    @media ${devices.minDesktopSM} {
      flex-basis: 50%;
      justify-content: flex-end;
    }
  }

  .rightContainer {
    flex-basis: 100%;
    padding: 32px 0;
    max-width: 500px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    @media ${devices.minDesktopSM} {
      flex-basis: 50%;
      padding: 0 32px;
    }
  }
`;

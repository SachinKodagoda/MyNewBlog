import CheckBox from '@components/FormElements/CheckBox';
import StrikeThrough from '@components/Other/StrikeThrough';
import { CartContext } from '@ctx/CartContext';
import { ImgComparisonSlider } from '@img-comparison-slider/react';
import ControlBtn from '@layouts/steps/ControlBtn';
import ExpressDelivery from '@layouts/steps/ExpressDelivery';
import PriceTable from '@layouts/steps/PriceTable';
import Selections from '@layouts/steps/Selections';
import { ComparisonHandle } from '@svg/common';
import { colors, devices } from '@theme/baseTheme';
import { TType } from '@ts/common';
import { Translations } from '@util/localize';
import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react';
import styled, { keyframes } from 'styled-components';

function Type(): JSX.Element {
  const t = Translations();
  const router = useRouter();
  const { selectedTypeObj, setSelectedTab, setType, typePackageObj } = useContext(CartContext);
  const [faceLessFeatures, setFaceLessFeatures] = useState<'noFeatures' | 'eyebrows' | 'eyebrowsWithSmiles'>(
    'noFeatures'
  );
  return (
    <Container>
      <div className='leftContainer'>
        {/* <img src={selectedTypeObj?.imgUrl[0]} alt='sample_1' className='sample' /> */}
        {selectedTypeObj?.key === 'hi_featured' && (
          <img src={selectedTypeObj?.imgUrl[0]} alt='sample_1' className='sample' />
        )}
        {selectedTypeObj?.key === 'low_featured' && (
          <ImgComparisonSlider hover className='comparison'>
            <img slot='first' src={selectedTypeObj?.imgUrl[0]} alt='sample_x' className='sample' />
            <img slot='second' src={selectedTypeObj?.imgUrl[1]} alt='sample_y1' className='sample' />
            <ComparisonHandle />
          </ImgComparisonSlider>
        )}
      </div>
      <div className='rightContainer'>
        <Selections
          onBtnClick={key => {
            setType(key as TType);
          }}
          topic={t.express_type_of_photo}
          packageObj={typePackageObj}
          selected={selectedTypeObj?.key || null}
          itIs='type'
        />
        {selectedTypeObj?.key === 'low_featured' ? (
          <FacelessSelections>
            <div className='checkBoxCtr'>
              <div className='checkBoxItem'>
                <CheckBox
                  onClick={() => setFaceLessFeatures('noFeatures')}
                  checked={faceLessFeatures === 'noFeatures'}
                  value={faceLessFeatures === 'noFeatures' ? 'details_checked' : 'details_unchecked'}
                  name='details_checkbox'
                />
                <StrikeThrough
                  value='No Features'
                  strikeColor={colors.black}
                  fontColor={colors.gray4}
                  needStrike={faceLessFeatures !== 'noFeatures'}
                />
              </div>
              <div className='checkBoxItem'>
                <CheckBox
                  onClick={() => setFaceLessFeatures('eyebrows')}
                  checked={faceLessFeatures === 'eyebrows'}
                  value={faceLessFeatures === 'eyebrows' ? 'details_checked' : 'details_unchecked'}
                  name='details_checkbox'
                />
                <StrikeThrough
                  value='Eyebrows'
                  strikeColor={colors.black}
                  fontColor={colors.gray4}
                  needStrike={faceLessFeatures !== 'eyebrows'}
                />
              </div>
              <div className='checkBoxItem'>
                <CheckBox
                  onClick={() => setFaceLessFeatures('eyebrowsWithSmiles')}
                  checked={faceLessFeatures === 'eyebrowsWithSmiles'}
                  value={faceLessFeatures === 'eyebrowsWithSmiles' ? 'details_checked' : 'details_unchecked'}
                  name='details_checkbox'
                />
                <StrikeThrough
                  value='Eyebrows & Smiles'
                  strikeColor={colors.black}
                  fontColor={colors.gray4}
                  needStrike={faceLessFeatures !== 'eyebrowsWithSmiles'}
                />
              </div>
            </div>
          </FacelessSelections>
        ) : (
          <EmptyHolder />
        )}

        <div>
          <PriceTable />
          <ExpressDelivery />
          <ControlBtn
            onBack={() => {
              router.push('/');
            }}
            onNext={() => {
              router.push('/design/quantity', undefined, { shallow: true });
              setSelectedTab('quantity');
            }}
          />
        </div>
      </div>
    </Container>
  );
}

export default Type;

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

const FacelessSelections = styled.div`
  animation: ${leftToCenter} 0.5s 0.2s backwards;
  margin-bottom: 10px;
  min-height: 80px;
  display: flex;
  align-items: center;
`;

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

  .comparison {
    --divider-width: 2px;
    --divider-color: rgba(0, 0, 0, 0.5);
    /* --divider-shadow: 0px 0px 5px rgba(255, 255, 255, 0.5); */
    --default-handle-opacity: 0.3;
  }

  .custom-animated-handle {
    opacity: 0.9;
  }

  .checkBoxItem {
    display: flex;
    gap: 10px;
    align-items: center;
  }
`;

const EmptyHolder = styled.div`
  margin-bottom: 10px;
  min-height: 80px;
  display: flex;
  align-items: center;
`;

import CheckBox from '@components/FormElements/CheckBox';
import StrikeThrough from '@components/Other/StrikeThrough';
import { CartContext } from '@ctx/CartContext';
import frame_black from '@images/express/frame_black.jpeg';
import frame_black_hanger from '@images/express/frame_black_hanger.jpeg';
import frame_not_available from '@images/express/frame_not_available.jpeg';
import frame_white from '@images/express/frame_white.jpeg';
import frame_white_hanger from '@images/express/frame_white_hanger.jpeg';
import frame_wood from '@images/express/frame_wood.jpeg';
import ControlBtn from '@layouts/steps/ControlBtn';
import ExpressDelivery from '@layouts/steps/ExpressDelivery';
import PriceTable from '@layouts/steps/PriceTable';
import Selections from '@layouts/steps/Selections';
import { colors, devices } from '@theme/baseTheme';
import { TPaperSize } from '@ts/common';
import { Translations } from '@util/localize';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react';
import styled from 'styled-components';

type TProductTypes = 'digital' | 'printed';
type TFrames = 'no_frame' | 'black_frame' | 'white_frame' | 'white_frame_hanger' | 'black_frame_hanger' | 'wood_frame';

function Quantity(): JSX.Element {
  const t = Translations();
  const router = useRouter();
  const { orientation, paperPackageObj, selectedPaperObj, setPaperSize, setSelectedTab } = useContext(CartContext);
  const [productType, setProductType] = useState<TProductTypes>('digital');
  const [selectedFrame, setSelectedFrame] = useState<TFrames>('no_frame');
  const frameName = (val: TFrames): string => {
    switch (val) {
      case 'no_frame':
        return 'No Frame';
      case 'black_frame':
        return 'Black Frame';
      case 'white_frame':
        return 'White Frame';
      case 'white_frame_hanger':
        return 'White Hanger';
      case 'black_frame_hanger':
        return 'Black Hanger';
      case 'wood_frame':
        return 'Wood Frame';
      default:
        break;
    }
    return 'No Frame';
  };
  return (
    <Container>
      <div className='leftContainer'>
        <img
          src={orientation === 'portrait' ? selectedPaperObj?.imgUrl[0] : selectedPaperObj?.imgUrl[1]}
          alt='sample_1'
          className='sample'
        />
      </div>
      <div className='rightContainer'>
        <Selections
          onBtnClick={key => {
            setPaperSize(key as TPaperSize);
          }}
          topic={t.size_choose_your_size}
          packageObj={paperPackageObj}
          selected={selectedPaperObj?.key || null}
          itIs='size'
        />
        <div>
          <PrintCtr>
            <CheckBoxItemCtr>
              <CheckBoxItem>
                <CheckBox
                  onClick={() => {
                    setProductType('digital');
                    setSelectedFrame('no_frame');
                  }}
                  checked={productType === 'digital'}
                  value={productType === 'digital' ? 'details_checked' : 'details_unchecked'}
                  name='details_checkbox'
                />
                <StrikeThrough
                  value='Digital Copy Only'
                  strikeColor={colors.black}
                  fontColor={colors.gray4}
                  needStrike={productType !== 'digital'}
                />
              </CheckBoxItem>

              <CheckBoxItem>
                <CheckBox
                  onClick={() => {
                    setProductType('printed');
                    setSelectedFrame('no_frame');
                  }}
                  checked={productType === 'printed'}
                  value={productType === 'printed' ? 'details_checked' : 'details_unchecked'}
                  name='details_checkbox'
                />
                <StrikeThrough
                  value={`Printed (${frameName(selectedFrame)})`}
                  strikeColor={colors.black}
                  fontColor={colors.gray4}
                  needStrike={productType !== 'printed'}
                />
              </CheckBoxItem>
            </CheckBoxItemCtr>

            <FrameCtr>
              <FrameItem
                disabled={false}
                selected={selectedFrame === 'no_frame'}
                onClick={() => {
                  setSelectedFrame('no_frame');
                }}
              >
                <Image src={frame_not_available} alt='no_frame' placeholder='blur' />
                <span className='not_available'>Unavailable</span>
              </FrameItem>

              <FrameItem
                disabled={productType === 'digital'}
                selected={selectedFrame === 'black_frame'}
                onClick={() => {
                  if (productType !== 'digital') {
                    setSelectedFrame('black_frame');
                  }
                }}
              >
                <Image src={frame_black} alt='black_frame' placeholder='blur' />
                <span className='not_available'>Unavailable</span>
              </FrameItem>

              <FrameItem
                disabled={productType === 'digital'}
                selected={selectedFrame === 'white_frame'}
                onClick={() => {
                  if (productType !== 'digital') {
                    setSelectedFrame('white_frame');
                  }
                }}
              >
                <Image src={frame_white} alt='white_frame' placeholder='blur' />
                <span className='not_available'>Unavailable</span>
              </FrameItem>

              <FrameItem
                disabled={productType === 'digital'}
                selected={selectedFrame === 'wood_frame'}
                onClick={() => {
                  if (productType !== 'digital') {
                    setSelectedFrame('wood_frame');
                  }
                }}
              >
                <Image src={frame_wood} alt='wood_frame' placeholder='blur' />
                <span className='not_available down'>Unavailable</span>
              </FrameItem>

              <FrameItem
                disabled={productType === 'digital'}
                selected={selectedFrame === 'white_frame_hanger'}
                onClick={() => {
                  if (productType !== 'digital') {
                    setSelectedFrame('white_frame_hanger');
                  }
                }}
              >
                <Image src={frame_black_hanger} alt='white_frame_hanger' placeholder='blur' />
                <span className='not_available down'>Unavailable</span>
              </FrameItem>

              <FrameItem
                disabled={productType === 'digital'}
                selected={selectedFrame === 'black_frame_hanger'}
                onClick={() => {
                  if (productType !== 'digital') {
                    setSelectedFrame('black_frame_hanger');
                  }
                }}
              >
                <Image src={frame_white_hanger} alt='black_frame_hanger' placeholder='blur' />
                <span className='not_available down'>Unavailable</span>
              </FrameItem>
            </FrameCtr>
          </PrintCtr>
          <PriceTable />
          <ExpressDelivery />
          <ControlBtn
            onBack={() => {
              router.push('/design/quantity', undefined, { shallow: true });
              setSelectedTab('quantity');
            }}
            onNext={() => {
              router.push('/design/upload', undefined, { shallow: true });
              setSelectedTab('upload');
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

const PrintCtr = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 4px;
`;

const CheckBoxItemCtr = styled.div`
  min-width: 200px;
`;

const CheckBoxItem = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const FrameCtr = styled.div`
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
  max-width: 140px;
`;

const FrameItem = styled.div<{ selected: boolean; disabled: boolean }>`
  position: relative;
  width: 42px;
  height: 42px;
  border: ${p => (p.selected ? `3px solid ${colors.black}` : `1px dashed ${colors.dark_gray}`)};
  border-style: ${p => (p.disabled ? 'dashed' : 'solid')};
  border-radius: 6px;
  padding: ${p => (p.selected ? '0px' : '2px')};
  box-shadow: ${p => (p.disabled ? 'none' : 'inset 0px 0px 4px 1px rgba(0, 0, 0, 0.1)')};
  opacity: ${p => (p.disabled ? '0.8' : '1')};
  cursor: ${p => (p.disabled ? 'not-allowed' : 'pointer')};
  &:hover {
    opacity: ${p => (p.disabled ? `${colors.dark_gray}` : `${colors.black}`)};
  }
  & img {
    border-radius: ${p => (p.selected ? '3px' : '6px')};
  }

  .not_available {
    display: none;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 50%;
    top: 0;
    transform: translate(-50%, calc(-100% - 2px));
    line-height: 0.75em;
    padding: 3px 5px;
    font-size: 12px;
    background: ${colors.black};
    color: ${colors.white};
    border-radius: 10px;
  }
  .down {
    top: auto;
    bottom: 0px;
    transform: translate(-50%, calc(100% + 2px));
  }

  &:hover .not_available {
    display: ${p => (p.selected ? 'none' : 'inline-flex')};
    ${p => (p.disabled ? '' : 'display: none')};
  }
`;

import DropArea from '@components/Other/DropArea';
import ExpressDelivery from '@layouts/steps/ExpressDelivery';
import PriceTable from '@layouts/steps/PriceTable';
import { MasterIcon, PayPalIcon, VisaIcon } from '@svg/common';
import { colors, devices } from '@theme/baseTheme';
import React from 'react';
import styled from 'styled-components';
import Questions from './Questions';

function Upload(): JSX.Element {
  return (
    <Container>
      <div className='leftContainer'>
        <Questions />
      </div>
      <div className='rightContainer'>
        <div className='topic'>Upload image(s) later or now?</div>
        <div className='imageUploaderCtr'>
          <DropArea />
        </div>
        <div>
          <PriceTable />
          <ExpressDelivery />
          <div className='checkoutCtr'>
            <div
              className='checkout'
              onClick={() => {
                // eslint-disable-next-line no-console
                console.log('keepIt=-->');
              }}
              onKeyPress={() => {
                // eslint-disable-next-line no-console
                console.log('keepIt=-->');
              }}
              role='button'
              tabIndex={0}
            >
              Checkout Now
            </div>
            <PayPalIcon />
            <VisaIcon />
            <MasterIcon />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Upload;

const Container = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  flex-wrap: wrap;

  .leftContainer {
    flex-basis: calc(100% - 16px);
    display: flex;
    align-items: flex-start;
    justify-content: center;
    height: 100%;

    @media ${devices.minDesktopSM} {
      flex-basis: 50%;
      justify-content: flex-end;
    }
  }

  .checkmark {
    fill: ${colors.black};
    width: 18px;
    height: 18px;
    margin: 0 5px -4px 0;
    background: ${colors.green2};
    padding: 2px;
    border-radius: 5px;
  }

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

  .rightContainer {
    flex-basis: calc(100% - 16px);
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

  .imageUploaderCtr {
    margin-bottom: 10px;
    position: relative;
  }

  .checkoutCtr {
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  .checkout {
    border: 1px solid ${colors.goldenBrown};
    width: 200px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    font-weight: 600;
    color: ${colors.white};
    background: ${colors.goldenBrown};
    text-transform: uppercase;
    cursor: pointer;
  }
`;

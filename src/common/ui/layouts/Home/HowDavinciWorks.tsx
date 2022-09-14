import step1 from '@images/home/step_1.jpg';
import step2 from '@images/home/step_2.jpg';
import step3 from '@images/home/step_3.jpg';
import step4 from '@images/home/step_4.jpg';
import { colors, devices, widths } from '@theme/baseTheme';
import { Translations } from '@util/localize';
import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

function HowDavinciWorks(): JSX.Element {
  const t = Translations();
  return (
    <Container>
      <div className='content'>
        <div className='contentBox'>
          <div className='lines firstLine' />
          <div className='steps'>1</div>
          <div className='contentBoxInner'>
            <div className='imageCover'>
              <Image src={step1} alt='step1' placeholder='blur' />
            </div>
            <div className='contentTitle'>{t.main_create_a_portrait}</div>
            <div className='contentDescription'>{t.main_create_a_portrait_desc}</div>
          </div>
        </div>
        <div className='contentBox'>
          <div className='lines' />
          <div className='steps'>2</div>
          <div className='contentBoxInner'>
            <div className='imageCover'>
              <Image src={step2} alt='step2' placeholder='blur' />
            </div>
            <div className='contentTitle'>{t.main_hand_drawing}</div>
            <div className='contentDescription'>{t.main_hand_drawing_desc}</div>
          </div>
        </div>
        <div className='contentBox'>
          <div className='lines' />
          <div className='steps'>3</div>
          <div className='contentBoxInner'>
            <div className='imageCover'>
              <Image src={step3} alt='step3' placeholder='blur' />
            </div>
            <div className='contentTitle'>{t.main_hight_quality_print}</div>
            <div className='contentDescription'>{t.main_hight_quality_print_desc}</div>
          </div>
        </div>
        <div className='contentBox'>
          <div className='lines' />
          <div className='steps'>4</div>
          <div className='contentBoxInner'>
            <div className='imageCover'>
              <Image src={step4} alt='step4' placeholder='blur' />
            </div>
            <div className='contentTitle'>{t.main_express_delivery}</div>
            <div className='contentDescription'>{t.main_express_delivery_desc}</div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default HowDavinciWorks;

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  flex-direction: column;

  .content {
    display: flex;
    gap: 1rem;
    position: relative;
    flex-wrap: wrap;
    width: 100%;

    @media ${devices.minTablet} {
      width: 300px;
    }

    @media ${devices.minDesktopSM} {
      flex-wrap: nowrap;
      width: ${widths.minDesktopSM}px;
    }

    @media ${devices.minDesktopLG} {
      width: ${widths.minDesktopLG}px;
    }

    &::after {
      content: '';
      position: absolute;
      top: 1rem;
      left: 50%;
      transform: translateX(-50%);
      height: 2px;
      width: calc(75% + 1rem);
      background: ${colors.dark_blue};
      display: none;
      @media ${devices.minDesktopSM} {
        display: block;
      }
    }
  }

  .contentBox {
    position: relative;
    width: 100%;
    border-radius: 10px;
    margin-top: 3rem;
    @media ${devices.minDesktopSM} {
      width: 25%;
    }
  }

  .steps {
    position: absolute;
    color: ${colors.dark_red};
    background: ${colors.white};
    border: 2px solid ${colors.dark_blue};
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    top: -3rem;
    transform: translateX(-50%);
    left: 50%;
    z-index: 1;
  }

  .lines {
    position: absolute;
    top: -6rem;
    left: 50%;
    height: 6rem;
    width: 2px;
    transform: translateX(-50%);
    background: ${colors.dark_blue};
    @media ${devices.minDesktopSM} {
      display: none;
    }
    &.firstLine {
      height: 3rem;
      top: -3rem;
    }
  }

  .imageCover {
    overflow: hidden;
    background: ${colors.light_gray2};
    width: 300px;
    height: 300px;
    border-radius: 50%;
    border: 10px solid ${colors.dark_blue};
    margin-bottom: 10px;
    @media ${devices.minTablet} {
      width: 200px;
      height: 200px;
    }
  }

  .contentTitle {
    font-weight: 700;
    font-size: 1.1rem;
    margin-bottom: 10px;
  }

  .contentDescription {
    text-align: center;
    margin-bottom: 10px;
    position: relative;
    &::after {
      content: '';
      width: 50%;
      bottom: -10px;
      left: 50%;
      transform: translate(-50%);
      position: absolute;
      height: 2px;
      background: ${colors.black};
      border-radius: 5px;
      @media ${devices.minDesktopSM} {
        display: none;
      }
    }
  }

  .contentBoxInner {
    background: ${colors.white};
    width: 100%;
    height: 100%;
    padding: 0 8px;
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
  }
`;

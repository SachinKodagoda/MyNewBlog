import Buttons from '@components/Buttons/Buttons';
import mainImg from '@images/main-img.jpg';
import mainMobileImg from '@images/main-mobile-img.jpg';
import truck from '@images/truck.svg';
import { colors, devices, widths } from '@theme/baseTheme';
import { Translations } from '@util/localize';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';

function HeroSection(): JSX.Element {
  const t = Translations();
  const router = useRouter();
  return (
    <Container>
      <HalfBackground />
      <Main>
        <MainLeft>
          <Buttons
            type='type1'
            text={t.main_design_now}
            className='button1'
            onClick={() => {
              router.push('/design/type');
            }}
          />
          <MainLeftTitle>{t.main_hero_title}</MainLeftTitle>
          <MainLeftSubtitle>{t.main_our_artists}</MainLeftSubtitle>
          <Buttons
            type='type1'
            text={t.main_design_now}
            className='button2'
            onClick={() => {
              router.push('/design/type');
            }}
          />
          <DeliveryDate>
            <Image src={truck} alt='delivery icon' width='30' height='30' />
            <ExpressText>
              {t.main_express_shipping} <b>{t.main_just_7_days}</b>
            </ExpressText>
          </DeliveryDate>
        </MainLeft>
        <MainRight>
          <RightSub>
            <RightTitle>{t.main_hero_title}</RightTitle>
            <RightSubText>{t.main_our_artists}</RightSubText>
          </RightSub>
          <ImageCoverDesktop>
            <Image src={mainImg} alt='workspace' layout='responsive' />
            <GradientOver2 />
            <GradientOver3 />
            <GradientOver4 />
          </ImageCoverDesktop>
          <ImageCoverMobile>
            <Image src={mainMobileImg} alt='workspace' layout='responsive' />
            <GradientOver2 />
            <GradientOver3 />
            <GradientOver4 />
          </ImageCoverMobile>
        </MainRight>
      </Main>
      <GradientOver1 />
    </Container>
  );
}

export default HeroSection;

// Styles 👕🧦👗🧣🧥👔 -->

const Container = styled.div`
  background: ${colors.davinci_light_yellow};
  position: relative;
`;

const HalfBackground = styled.div`
  position: absolute;
  bottom: 0;
  right: 0%;
  width: 50%;
  height: 100%;
  background: ${colors.davinci_light_yellow};
  display: none;
  @media ${devices.minDesktopSM} {
    display: block;
  }
`;

const Main = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: auto;
  flex-wrap: wrap-reverse;
  @media ${devices.minDesktopSM} {
    flex-wrap: nowrap;
  }
  @media ${devices.minDesktopLG} {
    width: ${widths.minDesktopLG}px;
  }
`;

const MainLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
  padding: 0;
  align-items: center;
  margin-top: -40px;
  z-index: 3;
  @media ${devices.minTablet} {
    margin-top: -50px;
  }
  @media ${devices.minDesktopSM} {
    padding: 2rem 1rem 2rem 3rem;
    align-items: flex-start;
    margin-top: 0;
  }

  .button1 {
    display: block;
    margin-bottom: 1rem;
    @media ${devices.minDesktopSM} {
      display: none;
      margin-bottom: 0;
    }
  }

  .button2 {
    text-transform: uppercase;
    display: none;
    @media ${devices.minDesktopSM} {
      display: block;
    }
  }
`;

const MainRight = styled.div`
  width: 100%;
  @media ${devices.minTablet} {
    width: 70%;
  }
  @media ${devices.minDesktopSM} {
    padding: 0;
  }
`;

const MainLeftTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  display: block;
  margin-top: 16px;
  @media ${devices.minTablet} {
    display: none;
    margin-top: 0;
  }
  @media ${devices.minDesktopSM} {
    display: block;
    margin-top: 0;
  }
`;

const MainLeftSubtitle = styled.div`
  max-width: 450px;
  font-size: 1.2rem;
  margin-bottom: 0;
  text-align: center;
  padding: 0 1rem;
  display: block;
  @media ${devices.minTablet} {
    display: none;
  }
  @media ${devices.minDesktopSM} {
    padding: 0;
    margin-bottom: 3rem;
    text-align: left;
    display: block;
  }
`;

const DeliveryDate = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0 1rem;
  @media ${devices.minTablet} {
    padding: 0;
  }
`;

const ExpressText = styled.div`
  margin-left: 0.5rem;
  text-align: center;
`;

const RightSub = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 4;
  width: 100%;
  text-align: center;
  margin: auto;
`;

const RightTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 16px;
  display: none;
  @media ${devices.minTablet} {
    display: block;
  }
  @media ${devices.minDesktopSM} {
    display: none;
  }
`;

const RightSubText = styled.div`
  max-width: 20rem;
  font-size: 1.2rem;
  margin: auto;
  text-align: center;
  display: none;
  @media ${devices.minTablet} {
    max-width: 30rem;
    display: block;
  }
  @media ${devices.minDesktopSM} {
    display: none;
  }
`;

const ImageCoverDesktop = styled.div`
  width: auto;
  height: auto;
  position: relative;
  display: none;
  @media ${devices.minDesktopSM} {
    display: block;
  }
`;

const ImageCoverMobile = styled.div`
  width: auto;
  height: auto;
  position: relative;
  display: block;
  margin-top: 0;
  @media ${devices.minTablet} {
    margin-top: 48px;
  }
  @media ${devices.minDesktopSM} {
    display: none;
  }
`;

const GradientOver1 = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 10%;
  background: linear-gradient(0deg, ${colors.white} 0, rgba(255, 255, 255, 0) 100%);
`;

const GradientOver2 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 30%;
  height: 100%;
  background: linear-gradient(90deg, ${colors.davinci_light_yellow} 0, rgba(243, 242, 239, 0) 100%);
  display: none;
  @media ${devices.minTablet} {
    display: block;
  }
`;

const GradientOver3 = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  background: linear-gradient(90deg, rgba(217, 211, 202, 0) 0, ${colors.davinci_light_yellow} 100%);
  display: none;
  @media ${devices.minTablet} {
    display: block;
  }
  @media ${devices.minDesktopSM} {
    background: linear-gradient(90deg, rgba(217, 211, 202, 0) 0, ${colors.davinci_light_yellow} 100%);
    width: 30%;
  }
`;

const GradientOver4 = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 20%;
  background: linear-gradient(0deg, ${colors.davinci_light_yellow} 0, rgba(255, 255, 255, 0) 100%);
  display: block;
  @media ${devices.minDesktopSM} {
    display: none;
  }
`;

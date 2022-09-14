import SkipLink from '@components/Other/SkipLink';
import ComingSoonModal from '@layouts/Home/ComingSoonModal';
import DesignNow from '@layouts/Home/DesignNow';
import Faq from '@layouts/Home/Faq';
import Footer from '@layouts/Home/Footer';
import Gallery from '@layouts/Home/Gallery';
import HeroSection from '@layouts/Home/HeroSection';
import HowDavinciWorks from '@layouts/Home/HowDavinciWorks';
import OurArtists from '@layouts/Home/OurArtists';
import NavBar from '@layouts/NavBar';
import NavPage from '@layouts/NavPage';
import { colors } from '@theme/baseTheme';
import { Translations } from '@util/localize';
import React from 'react';
import styled from 'styled-components';

function Home(): JSX.Element {
  const t = Translations();

  return (
    <>
      <SkipLink hrefVal='index_main' txt='Skip to main' />
      <NavBar />
      <Container id='index_main'>
        <HeroSection />
        <TitleCtr margin='48px 16px 32px'>
          <Title1>{t.main_how_davinci_works_title1}</Title1>
          <Title2>{t.main_how_davinci_works_title2}</Title2>
        </TitleCtr>
        <HowDavinciWorks />
        <TitleCtr margin='32px 16px 48px'>
          <Title1>{t.main_gallery_title1}</Title1>
          <Title2>{t.main_gallery_title2}</Title2>
        </TitleCtr>
        <Gallery />
        <TitleCtr margin='48px 16px'>
          <Title1>{t.main_our_artists_title1}</Title1>
          <Title2>{t.main_our_artists_title2}</Title2>
        </TitleCtr>
        <OurArtists />
        <TitleCtr margin='48px 16px'>
          <Title1>{t.main_faq_title1}</Title1>
          <Title2>{t.main_faq_title2}</Title2>
        </TitleCtr>
        <Faq />
        <TitleCtr margin='32px 16px'>
          <Title1>{t.main_design_now_title1}</Title1>
          <Title2>{t.main_design_now_title2}</Title2>
        </TitleCtr>
        <DesignNow />
        <Footer />
      </Container>
      <ComingSoonModal />
      <NavPage />
    </>
  );
}

export default Home;

const Container = styled.div`
  width: 100%;
  margin: auto;
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
`;

const TitleCtr = styled.div<{ margin: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: ${p => p.margin};
`;

const Title1 = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  color: ${colors.goldenBrown};
  text-transform: uppercase;
`;

const Title2 = styled.h1`
  position: relative;
  text-align: center;
  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 50%;
    height: 2px;
    width: 50%;
    background: ${colors.goldenBrown};
    transform: translateX(-50%);
    border-radius: 10px;
  }
`;

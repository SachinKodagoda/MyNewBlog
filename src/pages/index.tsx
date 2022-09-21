import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import styled from 'styled-components';

import NavBar from '@components/NavBar';
import RatingStars from '@components/Ratings/RatingStars';
import { WeatherCtxProvider } from '@ctx/weatherCtx';
import BookNow from '@layouts/Home/BookNow';
import Conference from '@layouts/Home/Conference';
import Contact from '@layouts/Home/Contact';
import Event from '@layouts/Home/Event';
import Food from '@layouts/Home/Food';
import Footer from '@layouts/Home/Footer';
import HeroArea from '@layouts/Home/HeroArea';
import PoolBarSpa from '@layouts/Home/PoolBarSpa';
import Room from '@layouts/Home/Room';
import Subscribe from '@layouts/Home/Subscribe';
import BackTopTop from '@layouts/HomeMisc/BackTopTop';
import { devices, widths } from '@theme/baseTheme';

function Home(): JSX.Element {
  return (
    <Container>
      <NavBar />
      <HeroArea />
      <BookNow />
      <Room />
      <TestDiv>
        <RatingStars size={40} isHoverable={false} rating={0} />
        <RatingStars size={40} isHoverable={false} rating={0.3} />
        <RatingStars size={40} isHoverable={false} rating={0.5} />
        <RatingStars size={40} isHoverable={false} rating={0.7} />
        <RatingStars size={40} isHoverable={false} rating={1} />
        <RatingStars size={40} isHoverable={false} rating={2} />
        <RatingStars size={40} isHoverable={false} rating={3} />
        <RatingStars size={40} isHoverable={false} rating={4} />
        <RatingStars size={40} isHoverable={false} rating={5} />
        <RatingStars size={40} isHoverable={false} rating={6} />
      </TestDiv>
      <Conference />
      <Food />
      <PoolBarSpa />
      <Event />
      <Subscribe />
      <Contact />
      <Footer />
      <BackTopTop />
    </Container>
  );
}

function HomeProvider(): JSX.Element {
  return (
    <PayPalScriptProvider
      options={{
        'client-id': 'AUxsVWk5PpDreJQA0e4Qa4oYZrwfNmDEjnbJiDPEJhdB8esfk_Kjfms5f7IVMi8r9Oe1wsmbYtTZnIUv',
        currency: 'USD',
      }}>
      <WeatherCtxProvider>
        <Home />
      </WeatherCtxProvider>
    </PayPalScriptProvider>
  );
}

export default HomeProvider;

// Styles 👕🧦👗🧣🧥👔 -->

const Container = styled.div`
  overflow-x: hidden;
  max-width: ${widths.min4K};
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media ${devices.min4K} {
    .top_wrapper {
      margin: 0 auto;
      border: 1px solid #ccc;
    }
  }
`;

const TestDiv = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
`;

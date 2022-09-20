import NavBar from '@components/NavBar';
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
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import { devices, widths } from '@theme/baseTheme';
import React from 'react';
import styled from 'styled-components';

function Home(): JSX.Element {
  return (
    <Container>
      <NavBar />
      <HeroArea />
      <BookNow />
      <Room />
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

const HomeProvider = (): JSX.Element => (
  <PayPalScriptProvider
    options={{
      'client-id': 'AUxsVWk5PpDreJQA0e4Qa4oYZrwfNmDEjnbJiDPEJhdB8esfk_Kjfms5f7IVMi8r9Oe1wsmbYtTZnIUv',
      currency: 'USD',
    }}
  >
    <WeatherCtxProvider>
      <Home />
    </WeatherCtxProvider>
  </PayPalScriptProvider>
);

export default HomeProvider;

// Styles 👕🧦👗🧣🧥👔 -->

const Container = styled.div`
  overflow-x: hidden;
  max-width: ${widths.min4K};
  margin: 0 auto;
  height: 100%;
  @media ${devices.min4K} {
    .top_wrapper {
      margin: 0 auto;
      border: 1px solid #ccc;
    }
  }
`;

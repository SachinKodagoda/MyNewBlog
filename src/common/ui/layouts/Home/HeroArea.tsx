import BookingLogo from '@layouts/HomeMisc/BookingLogo';
import Weather from '@layouts/HomeMisc/Weather';
import { colors } from '@theme/baseTheme';
import React from 'react';
import styled from 'styled-components';

function HeroArea(): JSX.Element {
  return (
    <Container>
      <BookingBg>
        <video className='booking-video' playsInline loop muted autoPlay>
          <track kind='captions' />
          <source src='video/hotel.mp4' type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </BookingBg>
      <GuestImg src='/images/home/food.svg' alt='guest' />
      <BookingLogo />
      <Weather />
    </Container>
  );
}

export default HeroArea;

// Styles 👕🧦👗🧣🧥👔 -->

const Container = styled.div`
  height: auto;
  width: 100%;
  position: relative;
  .booking-bg {
  }
  @media only screen and (min-width: 992px) {
    .booking-bg {
      background: #000;
    }
  }
  .booking-avatar {
    width: 150px;
    height: 150px;
    border-radius: 100%;
    position: absolute;
    right: 32px;
    top: 32px;
    border: 5px solid #000;
  }
  .booking-avatar-text {
    position: absolute;
    right: 70px;
    top: 190px;
    color: #fff;
    font-size: 20px;
  }
`;

const GuestImg = styled.img`
  position: absolute;
  top: calc(50% - 180px);
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width: 150px;
  height: 150px;
  border-radius: 100%;
  border: 2px solid #fff;
  box-shadow: 0px 0px 0px 8px ${colors.transparent_black5};
  background: ${colors.transparent_black5};
`;

const BookingBg = styled.div`
  background-image: url(images/home/img_0.jpg);
  background-color: #000;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  width: 100%;
  height: auto;
  position: relative;

  .booking-video {
    width: auto;
    height: 100vh;
    margin: auto;
    display: block;
  }
`;

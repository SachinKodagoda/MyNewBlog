import ScrollRef from '@components/ScrollRef';
import { colors } from '@theme/baseTheme';
import React from 'react';
import styled from 'styled-components';

function Conference(): JSX.Element {
  return (
    <Container>
      <ScrollRef name='Conference' />
      <div className='a-conference-bg' />
      <div className='a-conference-body'>
        <div className='a-conference-body_line1'>OUR CONFERENCE CENTER</div>
        <div className='a-conference-body_line2'>Check it now</div>
        <div className='a-conference-body_btn'>View more details</div>
      </div>
    </Container>
  );
}

export default Conference;

// Styles 👕🧦👗🧣🧥👔 -->

const Container = styled.div`
  position: relative;
  width: calc(100% - 32px);
  height: 400px;
  background: #f44336;
  color: #fff;
  text-align: center;
  background: url(images/home/conference.jpg);
  background-attachment: fixed;
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
  margin: 0 16px;
  .a-conference-bg {
    position: absolute;
    width: 100%;
    height: 100%;
    background: ${colors.transparent_black5};
  }
  .a-conference-body {
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
    width: 250px;
  }
  @media only screen and (min-width: 576px) {
    .a-conference-body {
      font-size: 20px;
      width: 350px;
    }
  }
  .a-conference-body_btn {
    border: 1px solid #fff;
    padding: 16px;
    font-weight: 600;
    margin-top: 16px;
    width: 200px;
    margin: auto;
    cursor: pointer;
  }
  @media only screen and (min-width: 576px) {
    .a-conference-body_btn {
      font-size: 30px;
      width: 350px;
    }
  }
`;

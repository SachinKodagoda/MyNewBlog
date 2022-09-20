import { WeatherCtx } from '@ctx/weatherCtx';
import { colors } from '@theme/baseTheme';
import React, { useContext } from 'react';
import styled from 'styled-components';

function Weather(): JSX.Element | null {
  const { weather } = useContext(WeatherCtx);
  return (
    <>
      {weather ? (
        <Container>
          Weather at our place is {weather?.temp_c} &#176;C{' '}
          <ImgIcon src={`https:${weather?.condition.icon}`} alt='sunny' />
        </Container>
      ) : (
        <Container>🙂 You are warmly welcome to our resort!!</Container>
      )}
    </>
  );
}

export default Weather;

// Styles 👕🧦👗🧣🧥👔 -->

const Container = styled.div`
  font-weight: 900;
  color: #fff;
  position: absolute;
  right: 0;
  bottom: 0;
  width: 100%;
  font-size: 24px;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  text-align: center;
  color: ${colors.royalGold};
  background: ${colors.black};
  border-top: 2px solid ${colors.royalGold};
  box-shadow: 0px 2px 10px ${colors.transparent_black5};
`;

const ImgIcon = styled.img`
  margin-right: 10px;
  width: 30px;
  height: 30px;
`;

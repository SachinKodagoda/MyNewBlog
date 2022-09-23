import styled from 'styled-components';

import ScrollRef from '@components/ScrollRef';
import { colors, devices, fonts, sizes } from '@theme/baseTheme';

function PoolBarSpa(): JSX.Element {
  return (
    <Container>
      <ScrollRef name='Features' />
      <PhotoGrid>
        <Body>
          <BodyImg src='/images/home/img_5.jpg' alt='location' />
          <BodyDesc>X&apos;mas Parties</BodyDesc>
        </Body>
        <Body>
          <BodyImg src='/images/home/img_6.jpg' alt='location' />
          <BodyDesc>Food</BodyDesc>
        </Body>
        <Body>
          <BodyImg src='/images/home/img_7.jpg' alt='location' />
          <BodyDesc>Drinks</BodyDesc>
        </Body>
        <Body>
          <BodyImg src='/images/home/img_8.jpg' alt='location' />
          <BodyDesc>Swimming</BodyDesc>
        </Body>
        <Body>
          <BodyImg src='/images/home/img_9.jpg' alt='location' />
          <BodyDesc>DJ</BodyDesc>
        </Body>
      </PhotoGrid>
    </Container>
  );
}

export default PoolBarSpa;

// Styles 👕🧦👗🧣🧥👔 -->

const Container = styled.div`
  height: auto;
  padding: ${sizes.xs.px} ${sizes.md.px};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  @media ${devices.minTabletLC} {
    flex-direction: row;
  }
`;

const PhotoGrid = styled.div`
  display: grid;
  width: 100%;
  grid-template-areas:
    'a'
    'b'
    'c'
    'd'
    'e';
  @media ${devices.minTablet} {
    grid-template-areas:
      'a a'
      'b c'
      'd e';
  }

  @media ${devices.minTabletLC} {
    grid-template-areas:
      'a a b c'
      'a a d e';
  }
`;

const Body = styled.div`
  height: auto;
  position: relative;
  &:nth-of-type(1) {
    grid-area: a;
  }
  &:nth-of-type(2) {
    grid-area: b;
  }
  &:nth-of-type(3) {
    grid-area: c;
  }
  &:nth-of-type(4) {
    grid-area: d;
  }
  &:nth-of-type(5) {
    grid-area: e;
  }
`;

const BodyImg = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const BodyDesc = styled.div`
  position: absolute;
  font-size: ${fonts.size.l2};
  left: ${sizes.sm.px};
  bottom: ${sizes.sm.px};
  color: ${colors.white};
`;

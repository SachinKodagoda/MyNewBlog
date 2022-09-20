import styled from 'styled-components';

import ScrollRef from '@components/ScrollRef';

function PoolBarSpa(): JSX.Element {
  return (
    <Container>
      <ScrollRef name='Features' />
      <Left>
        <Body>
          <BodyImg src='/images/home/img_5.jpg' alt='location' />
          <BodyDesc>X&apos;mas Parties</BodyDesc>
        </Body>
      </Left>
      <Right>
        <RightFirst>
          <Body>
            <BodyImg src='/images/home/img_6.jpg' alt='location' />
            <BodyDesc>Food</BodyDesc>
          </Body>
          <Body>
            <BodyImg src='/images/home/img_7.jpg' alt='location' />
            <BodyDesc>Drinks</BodyDesc>
          </Body>
        </RightFirst>
        <RightSecond>
          <Body>
            <BodyImg src='/images/home/img_8.jpg' alt='location' />
            <BodyDesc>Swimming</BodyDesc>
          </Body>
          <Body>
            <BodyImg src='/images/home/img_9.jpg' alt='location' />
            <BodyDesc>DJ</BodyDesc>
          </Body>
        </RightSecond>
      </Right>
    </Container>
  );
}

export default PoolBarSpa;

// Styles 👕🧦👗🧣🧥👔 -->

const Container = styled.div`
  height: auto;
  padding: 0 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Left = styled.div`
  display: flex;
  background: red;
`;

const Body = styled.div`
  height: auto;
  position: relative;
`;

const BodyImg = styled.img`
  width: 100%;
  height: auto;
  display: block;
  background: #fff;
  border: none;
`;

const BodyDesc = styled.div`
  position: absolute;
  width: 180px;
  height: 30px;
  line-height: 30px;
  font-size: 20px;
  text-align: left;
  padding-left: 10px;
  left: 10px;
  bottom: 10px;
  color: #fff;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  background: blue;
`;

const RightFirst = styled.div`
  display: flex;
`;

const RightSecond = styled.div`
  display: flex;
`;

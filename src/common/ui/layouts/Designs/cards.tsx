import Image from 'next/image';
import styled from 'styled-components';

import Card2Img from '@images/card2.jpeg';
import Card3Img from '@images/card3.jpeg';
import Card4Img from '@images/card4.jpeg';
import Card5Img from '@images/card5.jpeg';
import Card6Img from '@images/card6.jpeg';

function Cards(): JSX.Element {
  return (
    <Container>
      <Card2>
        <Image src={Card2Img} layout='fill' />
      </Card2>
      <Card3>
        <Image src={Card3Img} layout='fill' />
      </Card3>
      <Card4>
        <Image src={Card4Img} layout='fill' />
      </Card4>
      <Card5>
        <Image src={Card5Img} layout='fill' />
      </Card5>
      <Card6>
        <Image src={Card6Img} layout='fill' />
      </Card6>
    </Container>
  );
}

export default Cards;

const Container = styled.div`
  display: grid;
  width: auto;
  gap: 10px;
  grid-template-areas: 'a b c' 'd e e';
  height: auto;
  width: 800px;
`;

const Card2 = styled.div`
  width: auto;
  height: 200px;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  grid-area: a;
`;

const Card3 = styled.div`
  width: auto;
  height: 200px;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  grid-area: b;
`;

const Card4 = styled.div`
  width: auto;
  height: 200px;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  grid-area: c;
`;

const Card5 = styled.div`
  width: auto;
  height: 200px;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  grid-area: e;
`;

const Card6 = styled.div`
  width: auto;
  height: 200px;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  grid-area: d;
`;

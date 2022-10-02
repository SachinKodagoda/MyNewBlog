import styled from 'styled-components';

import Card2Img from '@images/card2.jpeg';
import Card3Img from '@images/card3.jpeg';
import Card4Img from '@images/card4.jpeg';
import Card5Img from '@images/card5.jpeg';
import Card6Img from '@images/card6.jpeg';

import Card from './card';

function Cards(): JSX.Element {
  return (
    <Container>
      <Card imgSrc={Card2Img} />
      <Card imgSrc={Card3Img} />
      <Card imgSrc={Card4Img} />
      <Card imgSrc={Card5Img} />
      <Card imgSrc={Card6Img} />
    </Container>
  );
}

export default Cards;

const Container = styled.div`
  display: flex;
  width: auto;
  gap: 16px;
  height: auto;
  width: auto;
`;

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
      <Card
        imgSrc={Card2Img}
        imgRatio='4/5'
        title={{
          headerFirstTitle: 'New',
          headerSecondTitle: 'Acme Camera',
        }}
      />
      <Card
        imgSrc={Card3Img}
        imgRatio='4/5'
        title={{
          headerFirstTitle: 'New',
          headerSecondTitle: 'Acme Camera',
        }}
      />
      <Card
        imgSrc={Card4Img}
        imgRatio='4/5'
        title={{
          headerFirstTitle: 'New',
          headerSecondTitle: 'Acme Camera',
        }}
      />
      <Card
        imgSrc={Card5Img}
        imgRatio='6/5'
        title={{
          footerButtonText: 'Notify',
          footerFirstTitle: 'Available Soon.',
          footerSecondTitle: 'Get Notified.',
          headerFirstTitle: 'New',
          headerSecondTitle: 'Acme Camera',
        }}
      />
      <Card
        imgSrc={Card6Img}
        imgRatio='4/5'
        title={{
          footerButtonText: 'Notify',
          footerFirstTitle: 'Available Soon.',
          footerSecondTitle: 'Get Notified.',
          headerFirstTitle: 'New',
          headerSecondTitle: 'Acme Camera',
          type: 'type2',
        }}
      />
    </Container>
  );
}

export default Cards;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: auto;
  gap: 16px;
  height: auto;
  width: auto;
`;

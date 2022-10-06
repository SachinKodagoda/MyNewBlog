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
      <OtherCards>
        <BasicCard>A Basic Card</BasicCard>
        <FlatCard>A Flat Card</FlatCard>
        <HoverCard>A Bordered, Hoverable Card</HoverCard>
        <Clickable>A Bordered, Clickable Card</Clickable>
      </OtherCards>
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

const BasicCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  filter: drop-shadow(0 12px 24px rgb(104 112 118 / 0.15)) drop-shadow(0 12px 14px rgb(104 112 118 / 0.1));
  transition: transform 0.25s ease 0s, filter 0.25s ease 0s, box-shadow 0.25s ease 0s;
  width: 320px;
  height: 100px;
  border-radius: 14px;
  background: #fff;
  padding: 20px;
  /* transform: translateZ(0px);
  backface-visibility: hidden; */
`;

const FlatCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 320px;
  height: 100px;
  border-radius: 14px;
  background: #f1f3f5;
  padding: 20px;
`;

const HoverCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--xui-transitions-card);
  border: 1px solid rgba(0, 0, 0, 0.15);
  width: 320px;
  height: 100px;
  border-radius: 14px;
  background: #fff;
  padding: 20px;
  cursor: pointer;
  /* transform: translateZ(0px);
  backface-visibility: hidden; */
  &:hover {
    transform: translateY(-2px);
    filter: var(--xui-dropShadows-lg);
  }
`;

const OtherCards = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
`;

const Clickable = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--xui-transitions-card);
  border: 1px solid rgba(0, 0, 0, 0.15);
  width: 320px;
  height: 100px;
  border-radius: 14px;
  background: #fff;
  padding: 20px;
  cursor: pointer;
  &:active {
    transform: scale(0.97);
  }
`;

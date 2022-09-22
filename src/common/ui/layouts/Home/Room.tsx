import { Link as LinkScroll } from 'react-scroll';
import styled from 'styled-components';

import RatingStars from '@components/Ratings/RatingStars';
import ScrollRef from '@components/ScrollRef';
import { roomData } from '@data/roomData';
import { colors, devices, fonts, sizes } from '@theme/baseTheme';

function Room(): JSX.Element {
  return (
    <Container>
      <ScrollRef name='Rooms' />
      {roomData.map((room, i) => (
        <RoomCtr key={`room-${i + 1}`}>
          <Header>
            <HeaderImg className='room-header_img' src='/images/home/img_1.jpg' alt='room_1' />
          </Header>
          <Body>
            <TitleBar>
              <TopicLeft>
                <RatingStars isHoverable={false} rating={room.rating} gap={sizes.sm.px} size={sizes.lg.px} />
                <Topic>Single Room</Topic>
              </TopicLeft>
              <TopicRight>
                <Price>$33</Price>
                <PerNight>/night</PerNight>
              </TopicRight>
            </TitleBar>
            <DescriptionCtr>
              {room.description.map((item, j) => (
                <Description key={`desc-${j + 1}`}>
                  <img className='room-body_desc_correct' src='/images/home/correct.svg' alt='s' />
                  {item}
                </Description>
              ))}
            </DescriptionCtr>
            <SubmitCtr>
              <LinkScroll to='BookNow' smooth offset={-65} isDynamic>
                Reserve a room
              </LinkScroll>
            </SubmitCtr>
          </Body>
        </RoomCtr>
      ))}
    </Container>
  );
}
export default Room;

const Container = styled.div`
  position: relative;
  padding: ${sizes.md.px};
  display: flex;
  flex-direction: column;
  gap: ${sizes.md.px};
  @media ${devices.minDesktopSM} {
    flex-direction: row;
  }
  .room-body_desc_correct {
    width: 15px;
    height: 15px;
    margin-right: 10px;
  }
`;

const RoomCtr = styled.div`
  padding: ${sizes.md.px};
  width: 100%;
  height: auto;
  border: 1px solid #ccc;
`;

const Header = styled.div``;

const HeaderImg = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${sizes.md.px};
  padding-top: ${sizes.md.px};
  @media ${devices.minTablet} {
    padding: ${sizes.md.px};
  }
`;

const TitleBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TopicLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${sizes.xs.px};
  padding-bottom: ${sizes.sm.px};
`;

const Topic = styled.div`
  font-family: ${fonts.family.secondary};
  font-weight: ${fonts.weight.semibold};
  font-size: ${fonts.size.l2};
`;

const TopicRight = styled.div`
  border-bottom: 2px solid #ff6138;
  display: flex;
  gap: ${sizes.sm.px};
  align-items: center;
  line-height: 1;
  padding-bottom: ${sizes.sm.px};
`;

const Price = styled.div`
  color: #ff6138;
  font-size: ${fonts.size.l3};
`;

const PerNight = styled.div`
  font-size: ${fonts.size.l1};
  align-self: flex-end;
`;

const Description = styled.div`
  display: flex;
  align-items: center;
  gap: ${sizes.sm.px};
`;

const DescriptionCtr = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${sizes.sm.px};
`;

const SubmitCtr = styled.div`
  cursor: pointer;
  background: ${colors.themeRed};
  color: ${colors.white};
  padding: ${sizes.sm.px};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: ${fonts.weight.bold};
`;

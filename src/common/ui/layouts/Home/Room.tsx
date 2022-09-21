import { Link as LinkScroll } from 'react-scroll';
import styled from 'styled-components';

import RatingStars from '@components/Ratings/RatingStars';
import ScrollRef from '@components/ScrollRef';
import { roomData } from '@data/roomData';
import { devices, sizes } from '@theme/baseTheme';

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
                <div className='room-body_topic_name'>Single Room</div>
              </TopicLeft>
              <div className='room-body_topic_right'>
                $33<span className='room-body_topic_right_span'>/night</span>
              </div>
            </TitleBar>
            {room.description.map((item, j) => (
              <div className='room-body_desc' key={`desc-${j + 1}`}>
                <img className='room-body_desc_correct' src='/images/home/correct.svg' alt='s' />
                {item}
              </div>
            ))}
            <div className='room-body_btn'>
              <LinkScroll to='BookNow' smooth offset={-65} isDynamic>
                Reserve a room
              </LinkScroll>
            </div>
          </Body>
        </RoomCtr>
      ))}
    </Container>
  );
}
export default Room;

// Styles 👕🧦👗🧣🧥👔 -->

const Container = styled.div`
  position: relative;
  padding: 8px;
  display: flex;
  flex-direction: column;
  @media ${devices.minDesktopSM} {
    flex-direction: row;
  }

  .room-container {
    width: 100%;
    height: auto;
    border: 1px solid #ccc;
  }
  .room-body_topic {
    font-family: 'Playfair Display', Georgia, serif;
    text-align: left;
    position: relative;
    height: 50px;
    padding: 0 16px;
    margin-bottom: 16px;
  }
  .room-body_topic:after,
  .room-body_topic:before {
    content: '';
    display: table;
  }
  .room-body_topic:after {
    clear: both;
  }
  .room-body_topic_star_cover {
    width: 80px;
    height: 20px;
  }
  .room-body_topic_star_cover:after,
  .room-body_topic_star_cover:before {
    content: '';
    display: table;
  }
  .room-body_topic_star_cover:after {
    clear: both;
  }
  .room-body_topic_star {
    width: 15px;
    height: 15px;
    float: left;
  }
  .room-body_topic_name {
    font-size: 20px;
  }
  .room-body_topic_left {
    float: left;
    width: 70%;
    height: 50px;
  }
  .room-body_topic_right {
    text-align: center;
    float: right;
    width: 30%;
    height: 50px;
    font-size: 28px;
    color: #ff6138;
    line-height: 50px;
    border-bottom: 2px solid #ff6138;
  }
  .room-body_topic_right_span {
    font-size: 15px;
    color: #000;
  }
  .room-body_desc {
    font-size: 16px;
    padding-left: 16px;
  }
  .room-body_desc_correct {
    width: 15px;
    height: 15px;
    margin-right: 10px;
  }
  .room-body_btn {
    cursor: pointer;
    width: 50%;
    background: #ff6138;
    color: #fff;
    text-align: center;
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    margin: 16px auto;
    border-radius: 5px;
    position: relative;
    z-index: 2;
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
`;

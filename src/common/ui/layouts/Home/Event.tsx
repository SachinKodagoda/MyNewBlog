import styled from 'styled-components';

import ScrollRef from '@components/ScrollRef';
import { eventData } from '@data/eventData';
import { borders, colors, devices, fonts, sizes } from '@theme/baseTheme';

function Event(): JSX.Element {
  return (
    <Container>
      <ScrollRef name='Events' />
      <InnerCtr>
        <Left>
          <LeftImg className='event-container-sub_left_img' src='/images/home/events.png' alt='location' />
        </Left>
        <Right>
          {eventData.map((event, i) => (
            <EventItem key={`event-${i + 1}`}>
              <CalendarItem>
                <CalendarDate>{event?.dateValue?.date}</CalendarDate>
                <CalendarMonth>{event?.dateValue?.month}</CalendarMonth>
                <CalendarYear>{event?.dateValue?.year}</CalendarYear>
              </CalendarItem>
              <Details>
                <Title>{event?.title}</Title>
                <SubTitle>{event?.subtitle}</SubTitle>
                <EventBtnCtr>
                  <JoinBtn>join event</JoinBtn>
                  <MoreDetailBtn>see details</MoreDetailBtn>
                </EventBtnCtr>
              </Details>
            </EventItem>
          ))}
        </Right>
      </InnerCtr>
    </Container>
  );
}

export default Event;

const Container = styled.div`
  padding: ${sizes.md.px};
  position: relative;
`;

const InnerCtr = styled.div`
  border: ${borders.primary};
  display: flex;
  background-color: ${colors.themeBackground2};
  flex-direction: column;
  gap: ${sizes.xs.px};
  @media ${devices.minDesktopSM} {
    flex-direction: row;
  }
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LeftImg = styled.img`
  display: block;
  height: auto;
  width: 100%;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: ${sizes.l1.px};
  border: none;
  width: 100%;
  padding: ${sizes.md.px};
  @media ${devices.minDesktopSM} {
    border-left: ${borders.turnery};
    width: 50%;
    padding: ${sizes.l1.px};
  }
`;

const EventItem = styled.div`
  display: flex;
  gap: ${sizes.l1.px};
`;

const CalendarItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${sizes.xs.px};
`;

const CalendarDate = styled.div`
  color: ${colors.themeRed};
  font-size: ${fonts.size.l4};
  font-weight: ${fonts.weight.bold};
`;

const CalendarMonth = styled.div``;

const CalendarYear = styled.div``;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${sizes.xs.px};
`;

const Title = styled.div`
  font-size: ${fonts.size.l3};
  font-family: ${fonts.family.secondary};
  font-weight: ${fonts.weight.semibold};
`;

const SubTitle = styled.div`
  color: ${colors.gray6};
`;

const EventBtnCtr = styled.div`
  display: flex;
  gap: ${sizes.sm.px};
  line-height: 1;
`;

const JoinBtn = styled.div`
  background-color: ${colors.themeRed};
  color: ${colors.white};
  border-radius: ${sizes.xs.px};
  padding: ${sizes.sm.px} ${sizes.l1.px};
`;

const MoreDetailBtn = styled.div`
  background-color: ${colors.white};
  border: 2px solid ${colors.themeRed};
  color: ${colors.themeRed};
  border-radius: ${sizes.xs.px};
  padding: ${sizes.sm.px} ${sizes.l1.px};
`;

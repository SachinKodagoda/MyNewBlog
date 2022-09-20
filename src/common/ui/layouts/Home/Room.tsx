import ScrollRef from '@components/ScrollRef';
import { devices } from '@theme/baseTheme';
import React from 'react';
import { Link as LinkScroll } from 'react-scroll';
import styled from 'styled-components';

function Room(): JSX.Element {
  return (
    <Container>
      <ScrollRef name='Rooms' />
      <div className='a-room--one'>
        <div className='room-container'>
          <div className='room-header'>
            <img className='room-header_img' src='/images/home/img_1.jpg' alt='room_1' />
          </div>
          <div className='room-body'>
            <div className='room-body_topic'>
              <div className='room-body_topic_left'>
                <div className='room-body_topic_star_cover'>
                  <img className='room-body_topic_star' src='/images/home/full-star.svg' alt='s' />
                  <img className='room-body_topic_star' src='/images/home/full-star.svg' alt='s' />
                  <img className='room-body_topic_star' src='/images/home/full-star.svg' alt='s' />
                  <img className='room-body_topic_star' src='/images/home/full-star.svg' alt='s' />
                  <img className='room-body_topic_star' src='/images/home/half-star.svg' alt='s' />
                </div>
                <div className='room-body_topic_name'>Single Room</div>
              </div>
              <div className='room-body_topic_right'>
                $33<span className='room-body_topic_right_span'>/night</span>
              </div>
            </div>
            <div className='room-body_desc'>
              <img className='room-body_desc_correct' src='/images/home/correct.svg' alt='s' />
              Perfect for traveling couples
            </div>
            <div className='room-body_desc'>
              <img className='room-body_desc_correct' src='/images/home/correct.svg' alt='s' />
              Breakfast included
            </div>
            <div className='room-body_desc'>
              <img className='room-body_desc_correct' src='/images/home/correct.svg' alt='s' />
              Two double beds
            </div>
            <div className='room-body_desc'>
              <img className='room-body_desc_correct' src='/images/home/correct.svg' alt='s' />
              Baby sitting facilities
            </div>
            <div className='room-body_desc'>
              <img className='room-body_desc_correct' src='/images/home/correct.svg' alt='s' />
              Free wifi
            </div>
            <div className='room-body_btn'>
              <LinkScroll to='BookNow' smooth offset={-65} isDynamic>
                Reserve a room
              </LinkScroll>
            </div>
          </div>
        </div>
      </div>
      <div className='a-room--two'>
        <div className='room-container'>
          <div className='room-header'>
            <img className='room-header_img' src='/images/home/img_2.jpg' alt='room_2' />
          </div>
          <div className='room-body'>
            <div className='room-body_topic'>
              <div className='room-body_topic_left'>
                <div className='room-body_topic_star_cover'>
                  <img className='room-body_topic_star' src='/images/home/full-star.svg' alt='s' />
                  <img className='room-body_topic_star' src='/images/home/full-star.svg' alt='s' />
                  <img className='room-body_topic_star' src='/images/home/full-star.svg' alt='s' />
                  <img className='room-body_topic_star' src='/images/home/full-star.svg' alt='s' />
                  <img className='room-body_topic_star' src='/images/home/half-star.svg' alt='s' />
                </div>
                <div className='room-body_topic_name'>Double Room</div>
              </div>
              <div className='room-body_topic_right'>
                $66<span className='room-body_topic_right_span'>/night</span>
              </div>
            </div>
            <div className='room-body_desc'>
              <img className='room-body_desc_correct' src='/images/home/correct.svg' alt='s' />
              Perfect for traveling couples
            </div>
            <div className='room-body_desc'>
              <img className='room-body_desc_correct' src='/images/home/correct.svg' alt='s' />
              Breakfast included
            </div>
            <div className='room-body_desc'>
              <img className='room-body_desc_correct' src='/images/home/correct.svg' alt='s' />
              Two double beds
            </div>
            <div className='room-body_desc'>
              <img className='room-body_desc_correct' src='/images/home/correct.svg' alt='s' />
              Baby sitting facilities
            </div>
            <div className='room-body_desc'>
              <img className='room-body_desc_correct' src='/images/home/correct.svg' alt='s' />
              Free wifi
            </div>
            <div className='room-body_btn'>
              <LinkScroll to='BookNow' smooth offset={-65} isDynamic>
                Reserve a room
              </LinkScroll>
            </div>
          </div>
        </div>
      </div>
      <div className='a-room--three'>
        <div className='room-container'>
          <div className='room-header'>
            <img className='room-header_img' src='/images/home/img_3.jpg' alt='room_3' />
          </div>
          <div className='room-body'>
            <div className='room-body_topic'>
              <div className='room-body_topic_left'>
                <div className='room-body_topic_star_cover'>
                  <img className='room-body_topic_star' src='/images/home/full-star.svg' alt='s' />
                  <img className='room-body_topic_star' src='/images/home/full-star.svg' alt='s' />
                  <img className='room-body_topic_star' src='/images/home/full-star.svg' alt='s' />
                  <img className='room-body_topic_star' src='/images/home/full-star.svg' alt='s' />
                  <img className='room-body_topic_star' src='/images/home/half-star.svg' alt='s' />
                </div>
                <div className='room-body_topic_name'>Deluxe Room</div>
              </div>
              <div className='room-body_topic_right'>
                $99<span className='room-body_topic_right_span'>/night</span>
              </div>
            </div>
            <div className='room-body_desc'>
              <img className='room-body_desc_correct' src='/images/home/correct.svg' alt='s' />
              Perfect for traveling couples
            </div>
            <div className='room-body_desc'>
              <img className='room-body_desc_correct' src='/images/home/correct.svg' alt='s' />
              Breakfast included
            </div>
            <div className='room-body_desc'>
              <img className='room-body_desc_correct' src='/images/home/correct.svg' alt='s' />
              Two double beds
            </div>
            <div className='room-body_desc'>
              <img className='room-body_desc_correct' src='/images/home/correct.svg' alt='s' />
              Baby sitting facilities
            </div>
            <div className='room-body_desc'>
              <img className='room-body_desc_correct' src='/images/home/correct.svg' alt='s' />
              Free wifi
            </div>
            <div className='room-body_btn'>
              <LinkScroll to='BookNow' smooth offset={-65} isDynamic>
                Reserve a room
              </LinkScroll>
            </div>
          </div>
        </div>
      </div>
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
  .a-room--one,
  .a-room--three,
  .a-room--two {
    padding: 8px;
  }
  .room-container {
    width: 100%;
    height: auto;
    border: 1px solid #ccc;
  }
  .room-header {
    background: #ff0;
  }
  .room-header_img {
    width: 100%;
    height: auto;
    margin-bottom: -6px;
  }
  .room-body {
    padding-top: 16px;
  }
  @media only screen and (min-width: 576px) {
    .room-body {
      padding: 16px;
    }
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

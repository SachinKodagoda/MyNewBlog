import ScrollRef from '@components/ScrollRef';
import React from 'react';
import styled from 'styled-components';

function Event(): JSX.Element {
  return (
    <Container>
      <ScrollRef name='Events' />
      <div className='event-container'>
        <div className='event-container-sub_left'>
          <img className='event-container-sub_left_img' src='/images/home/events.png' alt='location' />
        </div>
        <div className='event-container-sub_right'>
          <div className='event-item'>
            <div className='event-item_calender_cover'>
              <div className='event-item_calender'>
                <div className='event-item_calender_date'>12</div>
                <div className='event-item_calender_month'>JANUARY</div>
                <div className='event-item_calender_year'>2019</div>
              </div>
            </div>
            <div className='event-item_details'>
              <div className='event-item_topic'>Big summer meetups</div>
              <div className='event-item_dec'>
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
                blind texts
              </div>
              <div className='event-item_dec_btn_cover'>
                <div className='event-item_dec_btn_join'>join event</div>
                <div className='event-item_dec_btn_details'>see details</div>
              </div>
            </div>
          </div>
          <div className='event-item event_no_margin_bottom'>
            <div className='event-item_calender_cover'>
              <div className='event-item_calender'>
                <div className='event-item_calender_date'>12</div>
                <div className='event-item_calender_month'>JANUARY</div>
                <div className='event-item_calender_year'>2019</div>
              </div>
            </div>
            <div className='event-item_details'>
              <div className='event-item_topic'>Big summer meetups</div>
              <div className='event-item_dec'>
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
                blind texts
              </div>
              <div className='event-item_dec_btn_cover'>
                <div className='event-item_dec_btn_join'>join event</div>
                <div className='event-item_dec_btn_details'>see details</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Event;

// Styles 👕🧦👗🧣🧥👔 -->

const Container = styled.div`
  padding: 32px 16px;
  font-size: 16px;
  font-weight: 400;
  position: relative;
  .event-container:after,
  .event-container:before {
    content: '';
    display: table;
  }
  .event-container:after {
    clear: both;
  }
  @media only screen and (min-width: 992px) {
    .event-container {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      border: 1px solid #000;
    }
  }
  .event-container-sub_left {
    background: #fbfbfb;
    width: 100%;
    height: auto;
  }
  @media only screen and (min-width: 992px) {
    .event-container-sub_left {
      width: 50%;
    }
  }
  .event-container-sub_left_img {
    width: 100%;
    height: auto;
    vertical-align: middle;
  }
  @media only screen and (min-width: 992px) {
    .event-container-sub_left_img {
      position: relative;
      top: 50%;
      -webkit-transform: translateY(-50%);
      transform: translateY(-50%);
    }
  }
  .event-container-sub_right {
    background: #fbfbfb;
    border: none;
    width: 100%;
  }
  @media only screen and (min-width: 992px) {
    .event-container-sub_right {
      border-left: 1px dashed #000;
      width: 50%;
      padding: 60px 16px;
    }
  }
  .event-item {
    margin-bottom: 50px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }
  .event-item:after,
  .event-item:before {
    content: '';
    display: table;
  }
  .event-item:after {
    clear: both;
  }
  .event-item_topic {
    word-wrap: break-word;
    font-size: 28px;
    font-family: 'Playfair Display', Georgia, serif;
  }
  .event-item_calender {
    padding: 5px;
    width: auto;
    height: auto;
    background: #fafafa;
    text-align: center;
  }
  .event-item_calender_date {
    font-size: 30px;
    color: #ff6138;
  }
  .event-item_details {
    padding: 0 16px;
  }
  .event-item_dec {
    color: #86868d;
  }
  .event-item_dec_btn_cover:after,
  .event-item_dec_btn_cover:before {
    content: '';
    display: table;
  }
  .event-item_dec_btn_cover:after {
    clear: both;
  }
  .event-item_dec_btn_join {
    cursor: pointer;
    float: left;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    font-size: 14px;
    line-height: 1.5;
    border-radius: 4px;
    -webkit-box-shadow: none;
    box-shadow: none;
    background: #ff6138;
    border: 2px solid #ff6138;
    color: #fff;
    font-size: 14px;
    width: 100px;
    display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    padding: 6px 12px;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
      box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
  }
  .event-item_dec_btn_join:hover {
    background: #fff;
    color: #ff6138;
  }
  .event-item_dec_btn_details {
    cursor: pointer;
    float: left;
    margin-left: 10px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    font-size: 14px;
    line-height: 1.5;
    border-radius: 4px;
    -webkit-box-shadow: none;
    box-shadow: none;
    color: #ff6138;
    border: 2px solid #ff6138;
    background: #fff;
    font-size: 14px;
    width: 100px;
    display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    padding: 6px 12px;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
      box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
  }
  .event-item_dec_btn_details:hover {
    color: #fff;
    background: #ff6138;
  }
  @media only screen and (min-width: 992px) {
    .event_no_margin_bottom {
      margin-bottom: 0;
    }
  }
`;

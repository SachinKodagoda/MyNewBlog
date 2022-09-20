import ScrollRef from '@components/ScrollRef';
import React from 'react';
import styled from 'styled-components';

function PoolBarSpa(): JSX.Element {
  return (
    <Container>
      <ScrollRef name='Features' />
      <div className='left'>
        <div className='hotel-body'>
          <img className='hotel-body_img' src='/images/home/img_5.jpg' alt='location' />
          <div className='hotel-body_desc'>X&apos;mas Parties</div>
        </div>
      </div>
      <div className='right'>
        <div className='right_first'>
          <div className='hotel-body'>
            <img className='hotel-body_img' src='/images/home/img_6.jpg' alt='location' />
            <div className='hotel-body_desc'>Food</div>
          </div>
          <div className='hotel-body'>
            <img className='hotel-body_img' src='/images/home/img_7.jpg' alt='location' />
            <div className='hotel-body_desc'>Drinks</div>
          </div>
        </div>
        <div className='right_second'>
          <div className='hotel-body'>
            <img className='hotel-body_img' src='/images/home/img_8.jpg' alt='location' />
            <div className='hotel-body_desc'>Swimming</div>
          </div>
          <div className='hotel-body'>
            <img className='hotel-body_img' src='/images/home/img_9.jpg' alt='location' />
            <div className='hotel-body_desc'>DJ</div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default PoolBarSpa;

// Styles 👕🧦👗🧣🧥👔 -->

const Container = styled.div`
  height: auto;
  padding: 0 16px;
  display: flex;
  position: relative;
  .left {
    display: flex;
  }
  .hotel-body {
    height: auto;
    position: relative;
  }
  .hotel-body_img {
    width: 100%;
    height: auto;
    display: block;
    background: #fff;
    border: none;
  }
  .hotel-body_desc {
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
  }
  .right {
    display: flex;
    flex-direction: column;
  }
  .right_first {
    display: flex;
  }

  .right_second {
    display: flex;
  }
`;

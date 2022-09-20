import ScrollRef from '@components/ScrollRef';
import React from 'react';
import styled from 'styled-components';

function Subscribe(): JSX.Element {
  return (
    <Container>
      <ScrollRef name='Offers' />
      <div className='subscribe-container'>
        <div className='subscribe-head'>Get the best offers first!</div>
        <form className='subscribe-form'>
          <div className='subscribe-form_group'>
            <input
              className='subscribe-form_group_input'
              type='text'
              placeholder='Your Email Address'
              onChange={() => {
                // eslint-disable-next-line no-console
                console.log('test=-->');
              }}
            />
          </div>
        </form>
        <div className='subscribe-btn'>Subscribe</div>
      </div>
    </Container>
  );
}

export default Subscribe;

// Styles 👕🧦👗🧣🧥👔 -->

const Container = styled.div`
  position: relative;
  padding: 0 16px;
  .subscribe-container {
    height: auto;
    background: #606060;
    padding: 0 16px 16px 16px;
    color: #fff;
    font-size: 20px;
  }
  .subscribe-head {
    text-align: center;
    height: 60px;
    line-height: 60px;
  }
  .subscribe-form {
    height: auto;
  }
  .subscribe-form_group {
    width: 100%;
    margin-bottom: 16px;
  }
  .subscribe-form_group_input {
    width: 100%;
    display: block;
    margin: 0 auto;
    padding: 8px;
    border: none;
    border-bottom: 1px solid #ccc;
    background-color: #fff;
  }
  @media only screen and (min-width: 992px) {
    .subscribe-form_group_input {
      width: 50%;
    }
  }
  .subscribe-btn {
    background: #ff6138;
    border-radius: 4px;
    height: 40px;
    color: #fff;
    width: 150px;
    line-height: 40px;
    text-align: center;
    margin: auto;
  }
`;

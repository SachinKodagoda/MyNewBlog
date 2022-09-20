import ScrollRef from '@components/ScrollRef';
import React from 'react';
import styled from 'styled-components';

function Contact(): JSX.Element {
  return (
    <Container>
      <ScrollRef name='Contacts' />
      <div className='contact-container'>
        <div className='contact-head'>Contact</div>
        <div className='contact-body'>
          If you have any questions, do not hesitate to ask them.
          <form className='contact-form'>
            <div className='contact-form_group'>
              <input
                className='contact-form_group_input'
                type='text'
                placeholder='Name'
                onChange={() => {
                  // eslint-disable-next-line no-console
                  console.log('test=-->');
                }}
              />
            </div>
            <div className='contact-form_group'>
              <input
                className='contact-form_group_input'
                type='Email'
                placeholder='Email'
                onChange={() => {
                  // eslint-disable-next-line no-console
                  console.log('test=-->');
                }}
              />
            </div>
            <div className='contact-form_group'>
              <input className='contact-form_group_input' type='text' placeholder='Message' />
            </div>
          </form>
        </div>
        <div className='contact-btn'>Send Message</div>
      </div>
    </Container>
  );
}

export default Contact;

// Styles 👕🧦👗🧣🧥👔 -->

const Container = styled.div`
  height: auto;
  padding: 20px;
  color: #000;
  font-size: 20px;
  text-align: center;
  position: relative;
  .contact-container {
    border: 1px solid #000;
    padding: 20px 16px;
  }
  @media only screen and (min-width: 992px) {
    .contact-container {
      padding: 20px 0;
    }
  }
  .contact-form {
    height: auto;
  }
  .contact-form_group {
    width: 100%;
    margin-bottom: 16px;
  }
  .contact-form_group_input {
    text-align: center;
    width: 100%;
    display: block;
    margin: 0 auto;
    padding: 8px;
    border: none;
    border: 1px solid #ccc;
    background-color: #fff;
  }
  @media only screen and (min-width: 992px) {
    .contact-form_group_input {
      width: 50%;
      border: none;
      border-bottom: 1px solid #ccc;
    }
  }
  .contact-btn {
    background: #000;
    border-radius: 4px;
    height: 40px;
    color: #fff;
    width: 180px;
    line-height: 40px;
    text-align: center;
    margin: auto;
  }
`;

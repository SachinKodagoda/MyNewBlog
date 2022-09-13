import CheckBox from '@components/FormElements/CheckBox';
import InputElement from '@components/FormElements/InputElement';
import { CartContext } from '@ctx/CartContext';
import ControlBtn from '@layouts/steps/ControlBtn';
import ExpressDelivery from '@layouts/steps/ExpressDelivery';
import PriceTable from '@layouts/steps/PriceTable';
import { colors, devices } from '@theme/baseTheme';
import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react';
import styled from 'styled-components';

function Cart(): JSX.Element {
  const router = useRouter();
  const { setSelectedTab } = useContext(CartContext);
  const [email, setEmail] = useState('');
  const [emailCheckBox, setEmailCheckBox] = useState(true);
  const [country, setCountry] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [street, setStreet] = useState('');
  const [address, setAddress] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [city, setCity] = useState('');
  const [saveDetailsCheckBox, setSaveDetailsCheckBox] = useState(true);

  return (
    <Container>
      <div className='leftContainer'>
        <div className='topic'>Shipping Details</div>
        <div className='formCtr'>
          <div className='formElementRow'>
            <InputElement
              placeholder='Enter Your Country'
              label='Country :'
              errorMsg=''
              value={country}
              onChange={val => {
                setCountry(val);
              }}
              autoComplete='on'
              type='text'
              required
            />
          </div>
          <div className='formElementRow'>
            <InputElement
              placeholder='Enter Your First Name'
              label='First Name :'
              errorMsg=''
              value={firstName}
              onChange={val => {
                setFirstName(val);
              }}
              type='text'
              required
            />
            <InputElement
              placeholder='Enter Your First Name'
              label='First Name :'
              errorMsg=''
              value={lastName}
              onChange={val => {
                setLastName(val);
              }}
              type='text'
              required
            />
          </div>
          <div className='formElementRow'>
            <InputElement
              placeholder='Enter Your Street & House number'
              label='Street & house number :'
              errorMsg=''
              value={street}
              onChange={val => {
                setStreet(val);
              }}
              type='text'
              autoComplete='username'
              required
            />
          </div>
          <div className='formElementRow'>
            <InputElement
              placeholder='Enter Additional Address Information'
              label='Additional address information(Optional) :'
              errorMsg=''
              value={address}
              onChange={val => {
                setAddress(val);
              }}
              type='text'
              autoComplete='username'
              required
            />
          </div>
          <div className='formElementRow'>
            <InputElement
              placeholder='Enter Your Post Code'
              label='Postal code :'
              errorMsg=''
              value={postalCode}
              onChange={val => {
                setPostalCode(val);
              }}
              type='text'
              autoComplete='username'
              required
            />
            <InputElement
              placeholder='Enter Your City Code'
              label='City :'
              errorMsg=''
              value={city}
              onChange={val => {
                setCity(val);
              }}
              type='text'
              autoComplete='username'
              required
            />
          </div>
          <div className='formElementColumn'>
            <div className='checkBoxCtr'>
              <CheckBox
                onClick={() => setSaveDetailsCheckBox(val => !val)}
                checked={saveDetailsCheckBox}
                value={saveDetailsCheckBox ? 'details_checked' : 'details_unchecked'}
                name='details_checkbox'
              />
              Save my information and pay faster next time
            </div>
          </div>
        </div>
      </div>
      <div className='rightContainer'>
        <div className='topic'>Contact Details</div>
        <div className='formCtr'>
          <div className='formElementColumn'>
            <InputElement
              placeholder='Enter Your Email'
              label='Email :'
              errorMsg=''
              value={email}
              onChange={val => {
                setEmail(val);
              }}
              type='text'
              autoComplete='username'
              required
            />
            <div className='checkBoxCtr'>
              <CheckBox
                onClick={() => setEmailCheckBox(val => !val)}
                checked={emailCheckBox}
                value={emailCheckBox ? 'email_checked' : 'email_unchecked'}
                name='email_checkbox'
              />
              Receive news and offers via email
            </div>
          </div>
        </div>
        <div>
          <PriceTable />
          <ExpressDelivery />
          <ControlBtn
            onBack={() => {
              router.push('/design/type', undefined, { shallow: true });
              setSelectedTab('type');
            }}
            onNext={() => {
              router.push('/design/size', undefined, { shallow: true });
              setSelectedTab('size');
            }}
          />
        </div>
      </div>
    </Container>
  );
}

export default Cart;

const Container = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  flex-wrap: wrap;

  .sample {
    max-width: 500px;
    height: auto;
    display: block;
    position: relative;
    @media ${devices.maxMobile} {
      width: calc(100vw - 32px);
      height: auto;
    }
  }

  .leftContainer {
    flex-basis: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: 280px;
    min-height: 280px;
    @media ${devices.minDesktopSM} {
      flex-basis: 50%;
    }
  }

  .rightContainer {
    flex-basis: 100%;
    padding: 32px 0;
    max-width: 500px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    @media ${devices.minDesktopSM} {
      flex-basis: 50%;
      padding: 0 32px;
    }
  }

  .topic {
    text-transform: uppercase;
    align-self: center;
    text-align: center;
    font-size: 1rem;
    font-weight: 500;
    position: relative;
    padding-bottom: 8px;
    margin-bottom: 8px;
    overflow-x: hidden;
    &::after {
      content: '';
      position: absolute;
      left: 50%;
      bottom: 2px;
      transform: translate(-50%, -50%);
      width: 50%;
      height: 2px;
      background: ${colors.goldenBrown};
      border-radius: 6px;
    }
    @media ${devices.minDesktopSM} {
      font-size: 1.6rem;
    }
  }

  .formCtr {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .formElementRow {
    display: flex;
    gap: 20px;
  }
  .formElementColumn {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .checkBoxCtr {
    display: flex;
    gap: 10px;
    align-items: center;
    margin-top: 5px;
  }
`;

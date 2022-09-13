import Button from '@components/Buttons/Button';
import InputElement from '@components/FormElements/InputElement';
import Modal from '@components/Other/Modal';
import creditCard from '@images/creditCard.svg';
import Image from 'next/image';
import React, { useState } from 'react';
import styled from 'styled-components';

type TProps = {
  imageUrl?: string;
  modalCloseOpenHandler: (status: boolean) => void;
  modalState: boolean;
  onModalSubmitHandler: () => void;
  price?: string;
};
function CreditCard({
  imageUrl = '',
  modalCloseOpenHandler,
  modalState,
  onModalSubmitHandler,
  price = '0.00 $',
}: TProps): JSX.Element {
  const [cardNumber, setCardNumber] = useState('1234-5678-9101-1234');
  const [nameOnCard, setNameOnCard] = useState('D.G.Kodagoda');
  const [validUntil, setValidUntil] = useState('02/25');
  const [cvc, setCvc] = useState('123');
  return (
    <Modal
      onClickOutside={() => {
        modalCloseOpenHandler(false);
      }}
      modalOpen={modalState}
    >
      <ModalInner>
        <form className='containerInner'>
          <div className='imageCover'>
            {imageUrl.trim().length > 0 ? (
              <Image src={imageUrl} alt='test2' layout='fill' />
            ) : (
              <Image src={creditCard} alt='test2' layout='fill' />
            )}
          </div>
          <div className='price'>{price}</div>
          <div className='twoColumnForm'>
            <div className='formElement'>
              <InputElement
                placeholder='xxxx-xxxx-xxxx-xxxx'
                label='Card Number :'
                errorMsg=''
                value={cardNumber}
                onChange={val => {
                  setCardNumber(val);
                }}
                type='text'
                autoComplete='username'
                required
              />
            </div>

            <div className='formElement'>
              <InputElement
                placeholder='Name'
                label='Name On Card :'
                errorMsg=''
                value={nameOnCard}
                onChange={val => {
                  setNameOnCard(val);
                }}
                type='text'
                autoComplete='username'
                required
              />
            </div>
            <div className='formElement'>
              <InputElement
                placeholder='xx/xx'
                label='Valid Until :'
                errorMsg=''
                value={validUntil}
                onChange={val => {
                  setValidUntil(val);
                }}
                type='text'
                autoComplete='username'
                required
              />
            </div>
            <div className='formElement'>
              <InputElement
                placeholder='xxx'
                label='CVC :'
                errorMsg=''
                value={cvc}
                onChange={val => {
                  setCvc(val);
                }}
                type='text'
                autoComplete='username'
                required
              />
            </div>
          </div>
          <div className='formButton'>
            <Button
              type='submit'
              text='Pay Now'
              isDisabled={false}
              onClickHandler={(): void => {
                onModalSubmitHandler();
              }}
            />
          </div>
        </form>
      </ModalInner>
    </Modal>
  );
}

export default CreditCard;

const ModalInner = styled.div`
  padding: 1rem;

  .containerInner {
    margin: auto;
  }

  .twoColumnForm {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 2rem;
    row-gap: 0.8rem;
  }

  .formButton {
    margin-top: 2rem;
  }

  .imageCover {
    position: relative;
    width: 200px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    margin-bottom: 20px;
    border-radius: 10px;
    overflow: hidden;
  }

  .price {
    font-size: 40px;
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 16px;
  }
`;

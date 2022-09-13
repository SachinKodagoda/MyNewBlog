import HighlightBtn from '@components/Buttons/HiglightBtn';
import { CartContext } from '@ctx/CartContext';
import { CheckMark } from '@svg/common';
import React, { useContext } from 'react';
import styled from 'styled-components';

function Questions(): JSX.Element {
  const { selectedFigureObj, selectedTypeObj } = useContext(CartContext);
  return (
    <Container>
      <ImgCtr
        imgSrc={
          selectedTypeObj?.key === 'hi_featured'
            ? selectedFigureObj?.imgUrl[0] || ''
            : selectedFigureObj?.imgUrl[1] || ''
        }
      />
      <Filter />
      <div className='question'>Can you combine several individual pictures into a work of art?</div>
      <div className='answer'>
        <CheckMark />
        Yes, Keep a note and we will contact you.{' '}
        <HighlightBtn
          onClick={() => {
            // eslint-disable-next-line no-console
            console.log(': =-->');
          }}
        >
          Click Here
        </HighlightBtn>
      </div>
      <div className='question'>I&apos;m not sure about the picture selection.</div>
      <div className='answer'>
        <CheckMark />
        We&apos;ll help you choose a better one. Keep a note and we will contact you.{' '}
        <HighlightBtn
          onClick={() => {
            // eslint-disable-next-line no-console
            console.log(': =-->');
          }}
        >
          Click Here
        </HighlightBtn>
      </div>
      <div className='question'>Can I upload images later</div>
      <div className='answer'>
        <CheckMark />
        Yes, Keep a note and we will contact you.{' '}
        <HighlightBtn
          onClick={() => {
            // eslint-disable-next-line no-console
            console.log(': =-->');
          }}
        >
          Click Here
        </HighlightBtn>
      </div>
    </Container>
  );
}

export default Questions;

// Styles 👕🧦👗🧣🧥👔 -->

const Container = styled.div`
  width: 100%;
  height: auto;

  position: relative;
  padding: 32px;
  .question {
    font-weight: 500;
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
    position: relative;
    z-index: 1;
  }
  .answer {
    margin-bottom: 1rem;
    position: relative;
    z-index: 1;
  }
`;

const ImgCtr = styled.div<{ imgSrc: string }>`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-image: url(${p => p.imgSrc});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
`;

const Filter = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
`;

import NormalSwiper from '@components/Carousel/NormalSwiper';
import mainImg from '@images/main-img.jpg';
import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

function Gallery(): JSX.Element {
  return (
    <SwiperCtr slidWidth={360 * 0.75}>
      <NormalSwiper identifier='test' gap={10} height={360} ratio={0.75}>
        <div className='slide'>
          <Image src={mainImg} alt='workspace' layout='fill' objectFit='cover' />
          <MiniTxtCtr>
            <div className='miniTitle'>To the</div>
            <div className='miniSubTitle'>The Family</div>
          </MiniTxtCtr>
        </div>
        <div className='slide'>
          <Image src={mainImg} alt='workspace' layout='fill' objectFit='cover' />
          <MiniTxtCtr>
            <div className='miniTitle'>To the</div>
            <div className='miniSubTitle'>The Family</div>
          </MiniTxtCtr>
        </div>
        <div className='slide'>
          <Image src={mainImg} alt='workspace' layout='fill' objectFit='cover' />
          <MiniTxtCtr>
            <div className='miniTitle'>To the</div>
            <div className='miniSubTitle'>The Family</div>
          </MiniTxtCtr>
        </div>
        <div className='slide'>
          <Image src={mainImg} alt='workspace' layout='fill' objectFit='cover' />
          <MiniTxtCtr>
            <div className='miniTitle'>To the</div>
            <div className='miniSubTitle'>The Family</div>
          </MiniTxtCtr>
        </div>
        <div className='slide'>
          <Image src={mainImg} alt='workspace' layout='fill' objectFit='cover' />
          <MiniTxtCtr>
            <div className='miniTitle'>To the</div>
            <div className='miniSubTitle'>The Family</div>
          </MiniTxtCtr>
        </div>
        <div className='slide'>
          <Image src={mainImg} alt='workspace' layout='fill' objectFit='cover' />
          <MiniTxtCtr>
            <div className='miniTitle'>To the</div>
            <div className='miniSubTitle'>The Family</div>
          </MiniTxtCtr>
        </div>
        <div className='slide'>
          <Image src={mainImg} alt='workspace' layout='fill' objectFit='cover' />
          <MiniTxtCtr>
            <div className='miniTitle'>To the</div>
            <div className='miniSubTitle'>The Family</div>
          </MiniTxtCtr>
        </div>
        <div className='slide'>
          <Image src={mainImg} alt='workspace' layout='fill' objectFit='cover' />
          <MiniTxtCtr>
            <div className='miniTitle'>To the</div>
            <div className='miniSubTitle'>The Family</div>
          </MiniTxtCtr>
        </div>
      </NormalSwiper>
    </SwiperCtr>
  );
}

export default Gallery;

const SwiperCtr = styled.div<{ slidWidth: number }>`
  width: 80%;
  margin: 0 auto;
  .slide {
    width: ${p => p.slidWidth}px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
`;

const MiniTxtCtr = styled.div`
  position: absolute;
  bottom: 5px;
  left: 30px;
  .miniTitle {
    font-weight: 500;
  }

  .miniSubTitle {
    font-weight: 600;
  }
`;

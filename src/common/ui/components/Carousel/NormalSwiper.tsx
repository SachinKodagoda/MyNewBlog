/* eslint-disable import/no-unresolved */
import { colors } from '@theme/baseTheme';
import styled from 'styled-components';
import { Autoplay, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';

type TProps = {
  // elementArr: JSX.Element[];
  identifier: string;
  children: React.ReactElement[];
  gap: number;
  height?: number;
  ratio?: number;
};
function NormalSwiper({ children, gap = 0, height = 360, identifier, ratio = 0.75 }: TProps): JSX.Element {
  const unitWidth = height * ratio;
  const unitWidth2 = unitWidth * 2 + gap * 1;
  const unitWidth3 = unitWidth * 3 + gap * 2;
  const unitWidth4 = unitWidth * 4 + gap * 3;
  const unitWidth5 = unitWidth * 5 + gap * 4;
  return (
    <Container height={height} ratio={ratio}>
      <Swiper
        className='swiper'
        modules={[Navigation, Autoplay]}
        loop={children.length > 5}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        updateOnWindowResize
        spaceBetween={gap}
        slidesPerView='auto'
        breakpoints={{
          [unitWidth]: {
            slidesPerView: 1,
          },
          [unitWidth2]: {
            slidesPerView: 2,
          },
          [unitWidth3]: {
            slidesPerView: 3,
          },
          [unitWidth4]: {
            slidesPerView: 4,
          },
          [unitWidth5]: {
            slidesPerView: 5,
          },
        }}
        navigation={{
          nextEl: `.swiper-button-next.next`,
          prevEl: `.swiper-button-prev.prev`,
        }}
      >
        {children.map((item, i) => (
          <SwiperSlide key={`swiperItem-${i + 1}-${identifier}`} className='swiperSlide'>
            {item}
          </SwiperSlide>
        ))}
        <div className='gradientRight' />
        <div className='gradientLeft' />
        <div className='swiper-button-next next' />
        <div className='swiper-button-prev prev' />
      </Swiper>
    </Container>
  );
}

const Container = styled.div<{ height: number; ratio: number }>`
  .swiper {
    width: 100%;
    cursor: grab;
    height: ${p => p.height}px;
    display: flex;
    position: relative;
  }
  .swiperSlide {
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${p => p.height * p.ratio}px;
  }
  .next {
    position: absolute;
    flex: none;
    top: 50%;
    transform: translateY(25%);
    height: 30px !important;
    width: 30px !important;
    border-radius: 100%;
    border: none;
    background: ${colors.black};
    z-index: 1;
    &:after {
      font-size: 16px !important;
      font-weight: 900 !important;
      color: ${colors.white} !important;
      text-align: center !important;
    }
  }

  .prev {
    position: absolute;
    flex: none;
    z-index: 10;
    top: 50%;
    transform: translateY(25%);
    height: 30px !important;
    width: 30px !important;
    border-radius: 100%;
    border: 2px solid ${colors.black};
    background: ${colors.black};
    border: none;
    z-index: 1;
    &:after {
      font-size: 16px !important;
      font-weight: 900 !important;
      color: ${colors.white} !important;
      text-align: center !important;
    }
  }

  .gradientRight {
    text-align: right;
    position: absolute;
    bottom: 0;
    right: 0;
    width: 15px;
    height: 100%;
    z-index: 1;
    background: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1) 50%);
  }

  .gradientLeft {
    text-align: right;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 15px;
    height: 100%;
    z-index: 1;
    background: linear-gradient(to left, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1) 50%);
  }
`;

export default NormalSwiper;

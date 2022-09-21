import { useState } from 'react';

import styled from 'styled-components';

import { colors, sizes } from '@theme/baseTheme';

type TProps = {
  isActive?: boolean;
  isHoverable?: boolean;
  onClick?: (rating: number) => void;
  rating?: number;
  size?: number;
};

function RatingStars({ isActive = true, isHoverable = true, onClick, rating = 0, size = 20 }: TProps): JSX.Element {
  const [forcedRatingHoverIndex, setForcedRatingHoverIndex] = useState<number>(0);
  const getColor = (index: number) => {
    if (index >= 5) {
      return colors.ratingGreenFilter;
    }
    if (index >= 4) {
      return colors.ratingLightGreenFilter;
    }
    if (index >= 3) {
      return colors.ratingYellowFilter;
    }
    if (index >= 2) {
      return colors.ratingOrangeFilter;
    }
    if (index > 0) {
      return colors.ratingRedFilter;
    }
    return colors.ratingGrayFilter;
  };

  const checkAvailability = (i: number, _rating: number) => {
    return i <= _rating && i + 1 > _rating;
  };
  return (
    <Container hoverColorFilter={getColor(forcedRatingHoverIndex)} isHoverable={isHoverable ? 'yes' : 'no'}>
      {[1, 2, 3, 4, 5].map(item => (
        <ImageCtr key={`ratings-${item}`}>
          <Image
            onClick={() => onClick && onClick(item)}
            onMouseEnter={() => isHoverable && setForcedRatingHoverIndex(item)}
            onMouseLeave={() => isHoverable && setForcedRatingHoverIndex(0)}
            alt='starFilled'
            className={item <= forcedRatingHoverIndex ? 'forcedHover' : ''}
            selectedColorFilter={item <= rating && isActive ? getColor(rating) : getColor(0)}
            height={size}
            src='/images/home/full-star.svg'
            width='auto'
          />
          {checkAvailability(item, rating) && (
            <NoFilledCtr width={`${(1 - rating + item) * 100}%`}>
              <NoFilledImage
                onClick={() => onClick && onClick(item)}
                alt='starFilled'
                className={item <= forcedRatingHoverIndex ? 'forcedHover' : ''}
                selectedColorFilter={getColor(0)}
                height={size}
                src='/images/home/full-star.svg'
                width='auto'
                data-test={(rating - item) % 1}
              />
            </NoFilledCtr>
          )}
        </ImageCtr>
      ))}
    </Container>
  );
}

export default RatingStars;

// Styles 👕🧦👗🧣🧥👔 -->

const Container = styled.div<{ hoverColorFilter: string; isHoverable: string }>`
  display: flex;
  column-gap: ${sizes.xs.px};
  @media (hover: hover) and (pointer: fine) {
    &:hover img {
      ${p => (p.isHoverable === 'yes' ? `filter: ${colors.ratingGrayFilter}; cursor: pointer;` : '')};
    }
    &:hover img.forcedHover {
      ${p => (p.isHoverable === 'yes' ? `filter: ${p.hoverColorFilter}` : '')};
    }
  }
`;

const ImageCtr = styled.div`
  display: inline-flex;
  position: relative;
`;

const Image = styled.img<{ selectedColorFilter: string }>`
  filter: ${p => p.selectedColorFilter};
`;

const NoFilledCtr = styled.div<{ width: string }>`
  display: inline-flex;
  position: absolute;
  height: 100%;
  right: 0;
  top: 0;
  width: ${p => p.width};
  overflow: hidden;
`;

const NoFilledImage = styled.img<{ selectedColorFilter: string }>`
  filter: ${colors.ratingGrayFilter};
  display: block;
  position: absolute;
  right: 0;
  top: 0;
`;

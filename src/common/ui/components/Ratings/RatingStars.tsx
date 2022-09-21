import { useState } from 'react';

import styled from 'styled-components';

import { colors, sizes } from '@theme/baseTheme';

type TProps = {
  isActive?: boolean;
  isHoverable?: boolean;
  onClick?: (rating: number) => void;
  rating?: number;
  size?: string;
  gap?: string;
};

function RatingStars({
  isActive = true,
  isHoverable = true,
  onClick,
  rating = 0,
  size = '20px',
  gap = sizes.xs.px,
}: TProps): JSX.Element {
  const sanitizedRating = parseFloat(`${rating}`);
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

  const checkAvailability = (_number: number, _rating: number, _isActive: boolean) => {
    return _isActive && _number === Math.ceil(_rating) && _rating % 1 !== 0;
  };

  const getSelected = (_number: number, _rating: number, _isActive: boolean) => {
    return _isActive && _number <= Math.ceil(_rating) ? getColor(_rating) : getColor(0);
  };
  return (
    <Container hoverColorFilter={getColor(forcedRatingHoverIndex)} isHoverable={isHoverable ? 'yes' : 'no'} gap={gap}>
      {[1, 2, 3, 4, 5].map(number => (
        <ImageCtr key={`ratings-${number}`}>
          <Image
            onClick={() => onClick && onClick(number)}
            onMouseEnter={() => isHoverable && setForcedRatingHoverIndex(number)}
            onMouseLeave={() => isHoverable && setForcedRatingHoverIndex(0)}
            alt='starFilled'
            className={number <= forcedRatingHoverIndex ? 'forcedHover' : ''}
            selectedColorFilter={getSelected(number, sanitizedRating, isActive)}
            height={size}
            src='/images/home/full-star.svg'
            width='auto'
          />
          {checkAvailability(number, sanitizedRating, isActive) && (
            <NoFilledCtr width={`${(1 - (sanitizedRating % 1)) * 100}%`}>
              <NoFilledImage
                onClick={() => onClick && onClick(number)}
                onMouseEnter={() => isHoverable && setForcedRatingHoverIndex(number)}
                onMouseLeave={() => isHoverable && setForcedRatingHoverIndex(0)}
                alt='starFilled'
                className={number <= forcedRatingHoverIndex ? 'forcedHover' : ''}
                selectedColorFilter={getColor(0)}
                height={size}
                src='/images/home/full-star.svg'
                width='auto'
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

const Container = styled.div<{ hoverColorFilter: string; isHoverable: string; gap: string }>`
  display: flex;
  column-gap: ${p => p.gap};
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

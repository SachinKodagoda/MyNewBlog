import { useState } from 'react';

import styled from 'styled-components';

import { colors } from '@theme/baseTheme';

type TProps = {
  isActive: boolean;
  onClick?: (rating: number) => void;
  rating?: number;
  size?: number;
};

function RatingStars({ isActive, onClick, rating = 0, size = 28 }: TProps): JSX.Element {
  const [forcedRatingHoverIndex, setForcedRatingHoverIndex] = useState<number>(0);
  const getColor = (index: number) => {
    let starColor = colors.ratingGrayFilter;
    if (index <= 5) {
      starColor = colors.ratingGreenFilter;
    }
    if (index <= 4) {
      starColor = colors.ratingLightGreenFilter;
    }
    if (index <= 3) {
      starColor = colors.ratingYellowFilter;
    }
    if (index <= 2) {
      starColor = colors.ratingOrangeFilter;
    }
    if (index === 1) {
      starColor = colors.ratingRedFilter;
    }
    return starColor;
  };
  // <img className='room-body_topic_star' src='/images/home/full-star.svg' alt='s' />
  // <img className='room-body_topic_star' src='/images/home/half-star.svg' alt='s' />
  return (
    <Container>
      {[1, 2, 3, 4, 5].map(ratingIndex => (
        <button
          key={ratingIndex}
          type='button'
          onClick={() => onClick && onClick(ratingIndex)}
          onMouseEnter={() => setForcedRatingHoverIndex(ratingIndex)}
          onMouseLeave={() => setForcedRatingHoverIndex(0)}>
          <Image
            alt='starFilled'
            className={ratingIndex <= forcedRatingHoverIndex ? 'forcedHover' : ''}
            // selectedColorFilter={ratingIndex <= rating && isActive ? getColor(rating) : getColor(0)}
            selectedColorFilter={getColor(4)}
            height={size}
            src='/images/home/full-star.svg'
            width={size}
          />
        </button>
      ))}
    </Container>
  );
}

export default RatingStars;

// Styles 👕🧦👗🧣🧥👔 -->

const Container = styled.div`
  display: flex;
  column-gap: 4px;
`;

const Image = styled.img<{ selectedColorFilter: string }>`
  filter: ${p => p.selectedColorFilter};
  &:hover {
    filter: ${colors.ratingGrayFilter};
  }
  &:hover .forcedHover {
    filter: selectedColorFilter;
  }
  /* @media (hover: hover) and (pointer: fine) {
    &:hover {
      filter: ${colors.ratingGrayFilter};
    }
    &:hover .forcedHover {
      filter: selectedColorFilter;
    }
  } */
`;

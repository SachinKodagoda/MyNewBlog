import { colors } from '@theme/baseTheme';

import { Star12, Star34, Star5, Star67, Star8, Star9, StarEmpty, StarFull } from '@com/core/common/components/svg/Star';

type TProps = {
  rating: string | number;
  activeColor?: string;
  disabledColor?: string;
};
function RatingStarOld({
  activeColor = `${colors.orange4}`,
  rating,
  disabledColor = `${colors.gray4}`,
}: TProps): JSX.Element {
  /* <------= Initialize Rating value =------> */
  let ratedAs = 0;

  /* <------= Handle string passed by API =------> */
  if (typeof rating === 'string') {
    ratedAs = parseFloat(rating);
  } else {
    ratedAs = rating;
  }

  /* <------= Range is fixed to 0 to 5 =------> */
  let rangeFixed = 0;
  if (ratedAs > 5) {
    rangeFixed = 5;
  } else if (ratedAs < 0) {
    rangeFixed = 0;
  } else {
    rangeFixed = ratedAs;
  }

  /* <------= Get the decimal portion of the rating =------> */
  const decimalPart = parseFloat((rangeFixed - Math.floor(rangeFixed)).toFixed(1));

  /* <------= Initialize stars array =------> */
  const stars: JSX.Element[] = [];

  for (let i = 1; i <= 5; i += 1) {
    if (i < Math.ceil(rangeFixed)) {
      stars.push(<StarFull activeColor={activeColor} disabledColor={disabledColor} key={`star1-${i + 1}`} />);
    } else if (i === Math.ceil(rangeFixed)) {
      if (decimalPart === 0) {
        stars.push(<StarFull activeColor={activeColor} disabledColor={disabledColor} key={`star2-${i + 1}`} />);
      } else if (decimalPart === 0.2 || decimalPart < 0.2) {
        stars.push(<Star12 activeColor={activeColor} disabledColor={disabledColor} key={`star3-${i + 1}`} />);
      } else if (decimalPart === 0.4 || decimalPart < 0.4) {
        stars.push(<Star34 activeColor={activeColor} disabledColor={disabledColor} key={`star4-${i + 1}`} />);
      } else if (decimalPart === 0.5 || decimalPart < 0.5) {
        stars.push(<Star5 activeColor={activeColor} disabledColor={disabledColor} key={`star5-${i + 1}`} />);
      } else if (decimalPart === 0.7 || decimalPart < 0.7) {
        stars.push(<Star67 activeColor={activeColor} disabledColor={disabledColor} key={`star6-${i + 1}`} />);
      } else if (decimalPart === 0.8 || decimalPart < 0.8) {
        stars.push(<Star8 activeColor={activeColor} disabledColor={disabledColor} key={`star7-${i + 1}`} />);
      } else if (decimalPart === 0.9 || decimalPart < 0.9) {
        stars.push(<Star9 activeColor={activeColor} disabledColor={disabledColor} key={`star8-${i + 1}`} />);
      }
    } else {
      stars.push(<StarEmpty activeColor={activeColor} disabledColor={disabledColor} key={`star9-${i + 1}`} />);
    }
  }
  return <>{stars}</>;
}

export default RatingStarOld;

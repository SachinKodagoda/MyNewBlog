import { colors } from '@theme/baseTheme';
import React from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import styled from 'styled-components';

type TProps = { size: string; value: number };

function CircularProgressBar({ size, value }: TProps): JSX.Element {
  return (
    <Container size={size}>
      <CircularProgressbar
        value={value}
        text={`${value}%`}
        background
        backgroundPadding={4}
        styles={buildStyles({
          strokeLinecap: 'round',
          textSize: '16px',
          pathTransitionDuration: 0.5,
          pathColor: colors.red1,
          textColor: colors.black,
          trailColor: colors.black,
          backgroundColor: colors.gray2,
        })}
      />
      ;
    </Container>
  );
}

const Container = styled.div<{ size: string }>`
  width: ${p => p.size};
  height: ${p => p.size};
`;

export default CircularProgressBar;

import { colors } from '@theme/baseTheme';
import { Translations } from '@util/localize';
import React from 'react';
import styled from 'styled-components';

function DesignNow(): JSX.Element {
  const t = Translations();
  return (
    <Container>
      <DesignNowBtn>{t.main_design_now}</DesignNowBtn>
    </Container>
  );
}

export default DesignNow;

// Styles 👕🧦👗🧣🧥👔 -->

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
`;

const DesignNowBtn = styled.span`
  text-transform: uppercase;
  cursor: pointer;
  padding: 16px 48px;
  border-radius: 48px;
  background: ${colors.goldenBrown};
  color: ${colors.white};
`;

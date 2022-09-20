import useScrollPosition from '@hooks/useScrollPosition';
import { colors } from '@theme/baseTheme';
import { Translations } from '@util/localize';
import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import styled from 'styled-components';

function BackTopTop(): JSX.Element {
  const scrollPosition = useScrollPosition();
  const t = Translations();
  return (
    <Container
      onClick={() => {
        scroll.scrollToTop({ smooth: true });
      }}
      isVisible={scrollPosition > 200}
    >
      {t.top}
    </Container>
  );
}

export default BackTopTop;

// Styles 👕🧦👗🧣🧥👔 -->

const Container = styled.div<{ isVisible: boolean }>`
  background: ${colors.themeRed};
  padding: 10px;
  position: fixed;
  right: 20px;
  color: #fff;
  cursor: pointer;
  transition: bottom 0.4s ease-in-out;
  bottom: ${p => (p.isVisible ? '5px' : '-200%')};
  text-transform: capitalize;
`;

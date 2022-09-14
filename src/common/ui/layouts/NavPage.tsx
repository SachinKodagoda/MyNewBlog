import { colors, devices } from '@theme/baseTheme';
import { Translations } from '@util/localize';
import React, { useState } from 'react';
import styled from 'styled-components';

function NavPage(): JSX.Element {
  const [opened, setOpened] = useState(false);
  const t = Translations();
  return (
    <Container>
      <MenuIconCtr onClick={() => setOpened(val => !val)}>
        <IconCurve />
        <BurgerCtr className={opened ? 'opened' : ''}>
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </BurgerCtr>
      </MenuIconCtr>
      <BackOuter opened={opened} />
      <BackCtr opened={opened}>
        <BackItem opened={opened}>{t.howItWorks}</BackItem>
        <BackItem opened={opened}>{t.gallery}</BackItem>
        <BackItem opened={opened}>{t.prices}</BackItem>
        <BackItem opened={opened}>{t.shipping}</BackItem>
      </BackCtr>
    </Container>
  );
}

export default NavPage;

// Styles 👕🧦👗🧣🧥👔 -->

const Container = styled.div`
  display: block;
  color: ${colors.white};
  @media ${devices.minDesktopSM} {
    display: none;
  }
`;

const MenuIconCtr = styled.div`
  background: transparent;
`;

const barH = 4;
const barW = barH * 8;

const BurgerCtr = styled.div`
  cursor: pointer;
  position: relative;
  width: ${barW}px;
  height: ${barH * 5}px;
  position: fixed;
  z-index: 22;
  top: ${barH * 2}px;
  right: ${barH * 2}px;
  & > span {
    display: block;
    position: absolute;
    height: ${barH}px;
    width: 50%;
    background: ${colors.white};
    opacity: 1;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out;
    &:nth-child(odd) {
      right: 0%;
      border-radius: 0 ${barH}px ${barH}px 0;
    }
    &:nth-child(even) {
      right: 50%;
      border-radius: ${barH}px 0 0 ${barH}px;
    }
    &:nth-child(1),
    &:nth-child(2) {
      top: ${barH * 0}px;
    }
    &:nth-child(3),
    &:nth-child(4) {
      top: ${barH * 2}px;
    }
    &:nth-child(5),
    &:nth-child(6) {
      top: ${barH * 4}px;
    }
  }

  &.opened > span {
    &:nth-child(1) {
      right: ${barH * 0.5}px;
      top: ${barH * 0.5}px;
    }

    &:nth-child(2) {
      right: calc(50% - ${barH}px);
      top: ${barH * 0.5}px;
    }

    &:nth-child(3) {
      right: -50%;
      opacity: 0;
    }

    &:nth-child(4) {
      right: 100%;
      opacity: 0;
    }

    &:nth-child(5) {
      right: ${barH * 0.5}px;
      top: ${barH * 3}px;
    }

    &:nth-child(6) {
      right: calc(50% - ${barH}px);
      top: ${barH * 3}px;
    }
    &:nth-child(1),
    &:nth-child(6) {
      transform: rotate(-45deg);
    }
    &:nth-child(2),
    &:nth-child(5) {
      transform: rotate(45deg);
    }
  }
`;

const IconCurve = styled.div`
  cursor: pointer;
  background: ${colors.accent};
  width: 120px;
  height: 100px;
  position: fixed;
  border-radius: 50%;
  right: 0;
  top: 0;
  transform: translate(50%, -50%);
  z-index: 21;
`;

const BackOuter = styled.div<{ opened: boolean }>`
  width: ${p => (p.opened ? '300vw' : '120px')};
  height: ${p => (p.opened ? '300vh' : '100px')};
  position: fixed;
  right: 0;
  top: 0;
  border-radius: 50%;
  transform: translate(50%, -50%);
  z-index: 20;
  transition: all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  transform-origin: 0 0;
  background: ${colors.accent};
`;

const BackCtr = styled.div<{ opened: boolean }>`
  width: ${p => (p.opened ? 'auto' : '0')};
  height: ${p => (p.opened ? 'auto' : '0')};
  left: ${p => (p.opened ? '50%' : '-50%')};
  top: ${p => (p.opened ? '50%' : '50%')};
  transform: ${p => (p.opened ? 'translate(-50%,-50%)' : 'translate(100%, -50%)')};
  position: fixed;
  z-index: 22;
  overflow: hidden;
  padding: ${p => (p.opened ? '16px' : '0')};
  opacity: ${p => (p.opened ? '1' : '0')};
  ${p => (p.opened ? 'transition: all .5s ease-in-out .6s' : '')};
`;

const BackItem = styled.div<{ opened: boolean }>`
  font-size: 2rem;
  width: 100vw;
  text-align: center;
  transform: ${p => (p.opened ? 'skewY(0deg)' : 'skewY(-10deg)')};
  ${p => (p.opened ? 'transition: all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) 1.2s' : '')};
`;

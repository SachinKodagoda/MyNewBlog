import AccordionArrow from '@svg/feather/AccordionArrow';
import MinusCircle from '@svg/feather/MinusCircle';
import PlusCircle from '@svg/feather/PlusCircle';
import { colors } from '@theme/baseTheme';
import React from 'react';
import styled from 'styled-components';

type TProps = {
  title: string;
  content: string;
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
};

function ControlledAccordionItem({ content, isActive, setIsActive, title }: TProps): JSX.Element {
  return (
    <Container onClick={() => setIsActive(!isActive)}>
      <TitleCtr opened={isActive}>
        <Title opened={isActive}>{title}</Title>
        <Icon>{isActive ? <MinusCircle className='activeIcon' /> : <PlusCircle className='activeIcon' />}</Icon>
      </TitleCtr>
      <Content opened={isActive}>{content}</Content>
      <MiniLine opened={isActive}>
        <AccordionArrow className='arrow_right' />
      </MiniLine>
    </Container>
  );
}

export default ControlledAccordionItem;

// Styles 👕🧦👗🧣🧥👔 -->

const Container = styled.div`
  height: auto;
  position: relative;
`;

const TitleCtr = styled.div<{ opened: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${p => (p.opened ? colors.white : colors.light_gray)};
  padding: 24px;
  border-width: 2px;
  border-style: solid;
  border-color: ${p => (p.opened ? colors.gray4 : colors.white)};
  border-radius: ${p => (p.opened ? '10px 10px 10px 0' : '10px')};
  cursor: pointer;
  position: relative;
`;

const Title = styled.div<{ opened: boolean }>`
  color: ${p => (p.opened ? colors.black : colors.gray4)};
`;

const Icon = styled.div`
  .activeIcon {
    width: 20px;
    height: 20px;
  }
`;

const Content = styled.div<{ opened: boolean }>`
  padding: ${p => (p.opened ? '12px 20px 0px 30px' : '0px')};
  height: ${p => (p.opened ? 'auto' : '0')};
  overflow: hidden;
  transform-origin: left;
  color: ${colors.gray4};
`;

const MiniLine = styled.div<{ opened: boolean }>`
  position: absolute;
  height: 75%;
  left: 0;
  top: 0;
  z-index: 1;
  &::before {
    content: '';
    width: 2px;
    height: calc(100% - 10px);
    position: absolute;
    left: 0;
    top: 10px;
    background: ${colors.gray4};
    display: ${p => (p.opened ? 'block' : 'none')};
  }
  .arrow_right {
    position: absolute;
    left: 0px;
    bottom: 0px;
    transform: translateY(50%);
    width: 20px;
    height: 20px;
    color: ${colors.gray4};
    display: ${p => (p.opened ? 'block' : 'none')};
  }
`;

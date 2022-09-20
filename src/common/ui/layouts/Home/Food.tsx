import { useEffect, useState } from 'react';

import styled from 'styled-components';

import ScrollRef from '@components/ScrollRef';
import { IFoodMenuItem, IFoodTitles, menuListData, titleListData } from '@data/foodMenu';
import { borders, colors, devices, fonts, shadows, sizes, weights } from '@theme/baseTheme';

import Topic from './Topic';

function Food(): JSX.Element {
  const [selectedMenuItem, setSelectedMenuItem] = useState<IFoodTitles>([]);
  const [selectedMenuData, setSelectedMenuData] = useState<IFoodMenuItem[]>([]);
  useEffect(() => {
    const selectedTitle = titleListData.filter(title => title.selected);
    if (selectedTitle.length > 0) {
      setSelectedMenuItem(selectedTitle[0]);
      setSelectedMenuData(menuListData[selectedTitle[0].title]);
    }
  }, []);

  return (
    <Container>
      <ScrollRef name='Restaurant' />
      <InnerContainer>
        <Topic title='OUR MENU' subTitle='Restaurant & Bar' />
        <Body>
          <TopicCover>
            {titleListData.map(item => (
              <TopicItem
                onClick={() => {
                  setSelectedMenuItem(item);
                }}
                isSelected={item.title === selectedMenuItem.title}>
                <TopicMenuImg src={item.image} alt='title icon' />
                <TopicTitle>{item.title}</TopicTitle>
              </TopicItem>
            ))}
          </TopicCover>
          <ItemCover>
            {selectedMenuData.map(item => (
              <FoodItem>
                <ItemLeftImg src={item.image} alt='food icon' />
                <ItemMiddle>
                  <ItemTitle>{item.title}</ItemTitle>
                  <ItemContent>{item.ingredients.map(ingredient => ingredient)}</ItemContent>
                </ItemMiddle>
                <ItemRight>{item.price.en.valueWithCurrency}</ItemRight>
              </FoodItem>
            ))}
          </ItemCover>
        </Body>
      </InnerContainer>
    </Container>
  );
}

export default Food;

// Styles 👕🧦👗🧣🧥👔 -->

const Container = styled.div`
  padding: ${sizes.md.px};
`;

const InnerContainer = styled.div`
  height: auto;
  background: ${colors.themeBackground};
  display: flex;
  flex-direction: column;
  gap: ${sizes.xl.px};
  @media only screen and (min-width: 992px) {
    border: ${borders.turnery};
    padding: ${sizes.md.px} 0;
  }
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${sizes.md.px};
`;

const TopicCover = styled.div`
  display: flex;
  justify-content: center;
`;

const TopicTitle = styled.div`
  color: ${colors.menuTitle};
  font-weight: ${weights.bold};
`;

const TopicItem = styled.div<{ isSelected: boolean }>`
  background: ${p => `${p.isSelected ? colors.royalGold : colors.white}`};
  text-align: center;
  border: 1px solid ${colors.black};
  padding: ${sizes.md.px} ${sizes.lg.px};
  user-select: none;
  display: flex;
  gap: ${sizes.md.px};
  cursor: pointer;
  &:hover {
    background: ${p => `${p.isSelected ? colors.royalGold : colors.themeRed}`};
    ${TopicTitle} {
      color: ${p => `${p.isSelected ? colors.menuTitle : colors.white}`};
    }
  }
  & + & {
    border-left: none;
  }
`;

const TopicMenuImg = styled.img`
  width: ${sizes.lg.px};
  height: ${sizes.lg.px};
  margin-bottom: 0;
  vertical-align: middle;
`;

const ItemCover = styled.div`
  height: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-around;
  gap: ${sizes.md.px} ${sizes.xxl.px};
  width: 100%;
  margin: 0 auto;
  @media ${devices.minDesktopSM} {
    width: 50%;
  }
`;

const MiddleSubContent = styled.div`
  color: #000;
  transition: color ${sizes.md.ani} ease;
`;

const ItemRight = styled.div`
  font-family: ${fonts.secondary};
  color: ${colors.themeRed};
  font-size: ${sizes.xl.px};
  transition: color ${sizes.md.ani} ease;
`;

const FoodItem = styled.div`
  display: flex;
  gap: ${sizes.md.px};
  justify-content: space-between;
  align-items: center;
  padding: ${sizes.md.px};
  cursor: pointer;
  background-color: ${colors.white};
  border: ${borders.secondary};
  transition: border-color ${sizes.md.ani} ease, background-color ${sizes.md.ani} ease;
  box-shadow: ${shadows.turnery};
  word-wrap: break-word;
  user-select: none;
  &:hover {
    background-color: #ff6239;
    border-color: #000;
    ${MiddleSubContent},${ItemRight} {
      color: #fff;
    }
  }
`;

const ItemLeftImg = styled.img`
  width: ${sizes.xxxl.px};
  height: ${sizes.xxxl.px};
  border-radius: 100%;
`;

const ItemMiddle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const ItemTitle = styled.div`
  font-weight: ${weights.bold};
  font-size: ${sizes.xl.f};
`;

const ItemContent = styled.div``;

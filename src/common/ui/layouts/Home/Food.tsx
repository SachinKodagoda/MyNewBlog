import { useEffect, useState } from 'react';

import styled from 'styled-components';

import ScrollRef from '@components/ScrollRef';
import { IFoodMenuItem, IFoodTitles, menuListData, titleListData } from '@data/foodMenu';
import { animation, borders, colors, devices, fonts, shadows, sizes } from '@theme/baseTheme';

import Topic from './Topic';

function Food(): JSX.Element {
  const [selectedMenuItem, setSelectedMenuItem] = useState<IFoodTitles>();
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
        <Topic title='Our Menu' subTitle='Restaurant & Bar' />
        <Body>
          <TopicCover>
            {titleListData.map((item, i) => (
              <TopicItem
                onClick={() => {
                  setSelectedMenuItem(item);
                  setSelectedMenuData(menuListData[item.title]);
                }}
                isSelected={item.title === selectedMenuItem?.title}
                key={`titles-${i + 1}`}>
                <TopicMenuImg src={item.image} alt='title icon' />
                <TopicTitle>{item.title}</TopicTitle>
              </TopicItem>
            ))}
          </TopicCover>
          <ItemCover>
            {selectedMenuData.map((item, i) => (
              <FoodItem key={`food-${i + 1}`}>
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
  gap: ${sizes.l2.px};
  @media ${devices.minDesktopSM} {
    border: ${borders.turnery};
    padding: ${sizes.l3.px} ${sizes.md.px};
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
  font-weight: ${fonts.weight.bold};
`;

const TopicItem = styled.div<{ isSelected: boolean }>`
  background: ${p => `${p.isSelected ? colors.royalGold : colors.white}`};
  text-align: center;
  border: 1px solid ${colors.black};
  padding: ${sizes.md.px} ${sizes.l1.px};
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
  width: ${sizes.l1.px};
  height: ${sizes.l1.px};
  margin-bottom: 0;
  vertical-align: middle;
`;

const ItemCover = styled.div`
  height: auto;
  display: grid;
  grid-template-columns: 1fr;
  justify-content: space-around;
  gap: ${sizes.md.px} ${sizes.l3.px};
  margin: 0 auto;
  @media ${devices.minDesktopSM} {
    grid-template-columns: 1fr 1fr;
  }
`;

const MiddleSubContent = styled.div`
  color: ${colors.black};
  transition: color ${animation.medium} ease;
`;

const ItemRight = styled.div`
  font-family: ${fonts.family.secondary};
  color: ${colors.themeRed};
  font-size: ${sizes.l2.px};
  transition: color ${animation.medium} ease;
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
  transition: border-color ${animation.medium} ease, background-color ${animation.medium} ease;
  box-shadow: ${shadows.turnery};
  word-wrap: break-word;
  user-select: none;
  &:hover {
    background-color: ${colors.themeRed};
    border-color: ${colors.black};
    ${MiddleSubContent},${ItemRight} {
      color: ${colors.white};
    }
  }
`;

const ItemLeftImg = styled.img`
  width: ${sizes.l4.px};
  height: ${sizes.l4.px};
  border-radius: 100%;
`;

const ItemMiddle = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${sizes.xs.px};
`;

const ItemTitle = styled.div`
  font-weight: ${fonts.weight.bold};
  font-size: ${fonts.size.l2};
`;

const ItemContent = styled.div``;

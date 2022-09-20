import styled from 'styled-components';

import ScrollRef from '@components/ScrollRef';
import { foodMenuData } from '@data/foodMenu';
import { borders, colors, devices, fonts, shadows, sizes, weights } from '@theme/baseTheme';

function Food(): JSX.Element {
  return (
    <Container>
      <ScrollRef name='Restaurant' />
      <InnerContainer>
        <Head>OUR MENU</Head>
        <SubHead>Restaurant & Bar</SubHead>
        <Body>
          <Topic>
            <TopicMenu>
              <TopicMenuImg src='/images/home/menu.svg' alt='s' />
              Main
            </TopicMenu>
            <TopicMenu>
              <TopicMenuImg src='/images/home/fruits.svg' alt='s' />
              Dessert
            </TopicMenu>
            <TopicMenu className='food_sp_r_margin_topic'>
              <TopicMenuImg src='/images/home/beverage.svg' alt='s' />
              Drinks
            </TopicMenu>
          </Topic>
          <ItemCover>
            {foodMenuData.map(item => (
              <FoodItem>
                <ItemLeftImg src={item.image} alt='food item' />
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
  padding: 0 16px;
  position: relative;
  margin-bottom: 10px;
  .food_sp_r_margin_body {
    margin: 0 auto;
  }
  @media only screen and (min-width: 992px) {
    .food_sp_r_margin_body {
      margin: 8px auto;
    }
  }
`;

const InnerContainer = styled.div`
  padding: 16px 0;
  height: auto;
  background: #f8faff;
  @media only screen and (min-width: 992px) {
    border-left: 1px dashed #000;
    border-right: 1px dashed #000;
    border-bottom: 1px dashed #000;
    padding: 32px 0;
  }
`;

const Head = styled.div`
  color: ${colors.transparent_black5};
  text-align: center;
  font-size: 20px;
`;

const SubHead = styled.div`
  font-family: 'Playfair Display', Georgia, serif;
  text-align: center;
  font-size: 25px;
`;

const Body = styled.div``;

const Topic = styled.div`
  display: flex;
  justify-content: center;
  padding: ${sizes.md.px} 0;
  &:after,
  &:before {
    content: '';
    display: table;
  }
  &:after {
    clear: both;
  }
  @media ${devices.minDesktopSM} {
    padding: ${sizes.lg.px} 0;
  }
`;

const TopicMenu = styled.div`
  width: 110px;
  background: #fff;
  text-align: center;
  border: 1px solid ${colors.transparent_black2};
  color: #a5a5ab;
  font-weight: ${weights.bold};
  padding: 20px 0;
  user-select: none;
  &:hover {
    background: #ff6239;
    color: #fff;
  }
  &.food_sp_r_margin_topic {
    margin-right: 0;
  }
`;

const TopicMenuImg = styled.img`
  width: 20px;
  height: 20px;
  margin-bottom: 0;
  margin-right: 5px;
  vertical-align: middle;
`;

const ItemCover = styled.div`
  height: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-around;
  gap: ${sizes.md.px};
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
  font-size: ${sizes.lg.px};
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
  width: ${sizes.xxl.px};
  height: ${sizes.xxl.px};
  border-radius: 100%;
`;

const ItemMiddle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const ItemTitle = styled.div`
  font-weight: ${weights.bold};
  font-size: ${sizes.lg.f};
`;

const ItemContent = styled.div``;

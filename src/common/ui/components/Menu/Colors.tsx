import { useTheme } from 'next-themes';
import styled from 'styled-components';

import { ColorCodes, Prefix } from '@data/Colors';

function Colors(): JSX.Element {
  const { theme } = useTheme();
  return (
    <Container>
      <Main>
        <MainTitle>{theme}</MainTitle>
        <ItemBoxCtr>
          {Object.entries(ColorCodes).map((item, i) => (
            <ItemBox key={`first-light-${i + 1}`} mode={theme}>
              {Object.entries(item[1]).map((sub, j) => (
                <Item key={`second-dark-${j + 1}`} color={`${Prefix}-${item[0]}${sub[0]}`} mode={theme}>
                  <ColorBlock color={`${Prefix}-${item[0]}${sub[0]}`} />
                  <Title fontColor={sub[1][`${theme}`].font}>
                    {item[0]}
                    {sub[0]}
                    <br />
                    <SubT>{sub[1][`${theme}`].color}</SubT>
                  </Title>
                </Item>
              ))}
              <MiniTitle mode={theme}>{item[0]}</MiniTitle>
            </ItemBox>
          ))}
        </ItemBoxCtr>
      </Main>
    </Container>
  );
}

export default Colors;

const Container = styled.div`
  display: flex;
  font-size: 18px;
  font-weight: bold;
  background: var(--xui-colors-background);
  color: var(--xui-colors-foreground);
`;

const Main = styled.div`
  flex: auto;
  padding: 5px 30px 30px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Title = styled.div<{ fontColor: string }>`
  color: ${p => p.fontColor};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: 500;
  font-size: 14px;
`;

const SubT = styled.div`
  opacity: 0.8;
  font-weight: 600;
`;

const ColorBlock = styled.div`
  width: 100px;
  height: 100px;
  border-radius: var(--xui-radii-lg);
`;

const Item = styled.div<{ color: string; mode?: string }>`
  display: flex;
  align-items: center;
  gap: 5px;
  position: relative;
  ${ColorBlock} {
    background: var(${p => p.color});
  }
`;

const ItemBox = styled.div<{ mode?: string }>`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
`;

const MainTitle = styled.div``;

const ItemBoxCtr = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const MiniTitle = styled.div<{ mode?: string }>``;

const Theme = styled.div`
  cursor: pointer;
`;

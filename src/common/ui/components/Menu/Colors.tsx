import { useTheme } from 'next-themes';
import styled from 'styled-components';

import { ColorCodes, Prefix } from '@data/Colors';

function Colors(): JSX.Element {
  const { theme } = useTheme();
  const antiTheme = theme === 'dark' ? 'light' : 'dark';
  return (
    <Container>
      <Main>
        <MainTitle>{theme}</MainTitle>
        <ItemBoxCtr>
          {Object.entries(ColorCodes).map((item, i) => (
            <ItemBox key={`first-light-${i + 1}`} mode={theme}>
              {Object.entries(item[1]).map((sub, j) => (
                <ColorBlock key={`second-dark-${j + 1}`} color={`${Prefix}-${item[0]}${sub[0]}`}>
                  <Title fontColor={sub[1][`${theme}`].font}>
                    {item[0]}
                    {sub[0]} {sub[1][`${theme}`].color === sub[1][`${antiTheme}`].color ? '*' : ''}
                    <br />
                    <SubT>{sub[1][`${theme}`].color}</SubT>
                  </Title>
                </ColorBlock>
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
  font-weight: 500;
  font-size: 14px;
`;

const SubT = styled.div`
  opacity: 0.8;
  font-weight: 600;
`;

const ColorBlock = styled.div<{ color: string }>`
  width: 120px;
  height: 120px;
  border-radius: var(--xui-radii-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(${p => p.color});
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

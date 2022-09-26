import { useTheme } from 'next-themes';
import styled from 'styled-components';

import { colorData } from '@data/Colors';

function ThemeComponent(): JSX.Element {
  const { setTheme, theme } = useTheme();
  return (
    <Container>
      <Main>
        <Theme
          onClick={() => {
            if (theme === 'dark') {
              setTheme('light');
            } else {
              setTheme('dark');
            }
          }}>
          Theme
        </Theme>
        <MainTitle>Dark</MainTitle>
        <ItemBoxCtr>
          {Object.entries(colorData).map((item, i) => (
            <ItemBox key={`first-light-${i + 1}`} mode={theme}>
              {item[1].map((sub, j) => (
                <Item key={`second-dark-${j + 1}`} color={sub.name} mode={theme}>
                  <ColorBlock color={sub.name} />
                  <Title>{sub.value}</Title>
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

export default ThemeComponent;

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

const Title = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: none;
`;

const ColorBlock = styled.div`
  width: 50px;
  height: 50px;
`;

const Item = styled.div<{ color: string; mode?: string }>`
  display: flex;
  align-items: center;
  gap: 5px;
  position: relative;
  ${ColorBlock} {
    background: var(${p => p.color});
  }
  &:hover {
    ${Title} {
      display: block;
    }
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

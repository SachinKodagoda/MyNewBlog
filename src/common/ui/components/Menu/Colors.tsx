import { Fragment } from 'react';

import { useTheme } from 'next-themes';
import styled from 'styled-components';

import { ColorCodes, getOtherData, Prefix, TColorItem } from '@data/Colors';
import { hexToRgb } from '@util/common';

function Colors(): JSX.Element {
  const { theme } = useTheme();
  const tempTheme = theme || 'light';
  const antiTheme = tempTheme === 'dark' ? 'light' : 'dark';
  const isRepeated = (clr: string, itemx: TColorItem) => {
    const members = Object.entries(itemx).map(a => a[1][`${theme}`]?.color);
    const idx = members.findIndex(p => p === clr);
    members.splice(idx, 1);
    return members.includes(clr);
  };
  return (
    <Container>
      <Main>
        <MainTitle>{tempTheme}</MainTitle>
        <ItemBoxCtr>
          {Object.entries(ColorCodes).map((item, i) => (
            <ItemBox key={`first-light-${i + 1}`} mode={tempTheme}>
              {Object.entries(item[1]).map((sub, j) => (
                <ColorBlock key={`second-dark-${j + 1}`} color={`${Prefix}-${item[0]}${sub[0]}`}>
                  <Title fontColor={sub[1][`${tempTheme}`]?.font}>
                    <InnerSpan>
                      <IsRepeated isR={isRepeated(sub[1][`${tempTheme}`]?.color, item[1])}>{item[0]}</IsRepeated>
                      {sub[0]} {sub[1][`${tempTheme}`]?.color === sub[1][`${antiTheme}`].color ? '*' : ''}
                    </InnerSpan>
                    <SubT>
                      <span>{sub[1][`${tempTheme}`]?.color}</span>
                      <span>{hexToRgb(sub[1][`${tempTheme}`]?.color)}</span>
                    </SubT>
                  </Title>
                </ColorBlock>
              ))}
              <MiniTitle mode={tempTheme}>{item[0]}</MiniTitle>
            </ItemBox>
          ))}
        </ItemBoxCtr>
        <ColorSchema>
          {`[data-theme='${theme}'] {`}
          {Object.entries(ColorCodes).map((item, i) => (
            <Fragment key={`tItem-${i + 1}`}>
              <UICtr>
                {Object.entries(item[1]).map((sub, j) => (
                  <UItext key={`UItext-${j + 1}`}>{`${Prefix}-${item[0]}${sub[0]}: ${
                    sub[1][`${tempTheme}`]?.color
                  };`}</UItext>
                ))}
              </UICtr>
              <br />
            </Fragment>
          ))}
          {getOtherData[`${theme}`].map((item, i) => (
            <Fragment key={`OtherItem-${i + 1}`}>
              <UICtr>{`${Prefix}-${item.name}: ${item.color};`}</UICtr>
            </Fragment>
          ))}
          {`};`}
        </ColorSchema>
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
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  user-select: text;
`;

const InnerSpan = styled.div`
  display: flex;
`;

const SubT = styled.div`
  opacity: 0.8;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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

const IsRepeated = styled.div<{ isR: boolean }>`
  text-decoration: ${p => (p.isR ? 'underline' : 'none')};
`;

const ColorSchema = styled.div`
  user-select: text;
`;

const UICtr = styled.div``;

const UItext = styled.div``;

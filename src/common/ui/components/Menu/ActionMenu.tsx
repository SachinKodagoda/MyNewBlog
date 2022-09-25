import { useRouter } from 'next/router';
import styled from 'styled-components';

import { colors } from '@theme/baseTheme';

type TQueryData = {
  name: string;
  value: string;
};

type TTitleTypes = 'disabled' | 'main' | 'sub' | 'normal';

export type TMenuItem = {
  name: string;
  data?: TQueryData[];
  icon?: JSX.Element;
  titleType?: TTitleTypes;
};
type TProps = {
  menuItems: TMenuItem[];
  selected: string;
  setSelected: (selected: TMenuItem) => void;
  collapsed?: boolean;
  collapsedWidth?: string;
  width?: string;
  brand?: string;
  marginTop?: string;
  type?: 'primary' | 'secondary';
  itemHeight?: number;
  borderSize?: number;
};

function ActionMenu({
  borderSize = 0,
  brand = '',
  collapsed = false,
  collapsedWidth = '70px',
  itemHeight = 40,
  marginTop = '0px',
  menuItems,
  selected,
  setSelected,
  type = 'primary',
  width = '200px',
}: TProps): JSX.Element | null {
  const selectedArr = menuItems.map(a => a.name);
  const top = `${itemHeight * (selectedArr.indexOf(selected) >= 0 ? selectedArr.indexOf(selected) : 0)}px`;
  const router = useRouter();
  const getTitleType = (item: TMenuItem): JSX.Element => {
    if (item?.titleType === 'main') {
      return <MainTitle>{item?.name}</MainTitle>;
    }
    return <div>{item?.name}</div>;
  };
  return (
    <Container
      style={{ width: collapsed ? collapsedWidth : width }}
      marginTop={marginTop}
      menuType={type}
      borderSize={borderSize}>
      {brand.trim().length > 0 && <Logo>{brand}</Logo>}
      <MenuItemCtr>
        <MenuItemBackground style={{ top }} menuType={type} itemHeight={itemHeight} />
        {menuItems.map((a, i) => {
          return (
            <MenuItem
              itemHeight={itemHeight}
              type='button'
              menuType={type}
              className={`${selected === a?.name ? 'active' : ''}`}
              onClick={() => {
                const query = a?.data ? a.data.map(v => `&${v.name}=${v.value}`).join('&') : '';
                router.push(`?menu=${a.name}${query}`, undefined, { shallow: true });
                setSelected(a);
              }}
              key={`menu-${i + 1}`}>
              {a?.icon}
              {!collapsed && getTitleType(a)}
            </MenuItem>
          );
        })}
        <MenuArrow style={{ top }} itemHeight={itemHeight} borderSize={borderSize} menuType={type} />
      </MenuItemCtr>
    </Container>
  );
}

export default ActionMenu;

const Container = styled.div<{ marginTop: string; menuType: string; borderSize: number }>`
  height: calc(100vh - ${({ marginTop }) => marginTop});
  background: var(--xui-${p => p.menuType}-sidebar-background);
  color: var(--xui-${p => p.menuType}-sidebar-foreground);
  border-right: ${p => p.borderSize}px solid var(--xui-secondary-sidebar-border);
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  flex: none;
`;

const MenuItemCtr = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
`;

const MenuItemBackground = styled.span<{ menuType: string; itemHeight: number }>`
  content: '';
  position: absolute;
  right: 0;
  height: ${p => p.itemHeight}px;
  width: 100%;
  background: var(
    ${p => (p.menuType === 'secondary' ? 'transparent' : `--xui-${p.menuType}-sidebar-active-background`)}
  );
  pointer-events: none;
  transition: top 0.2s ease-in-out;
  transform-origin: top right;
`;

const Logo = styled.div``;

const MenuItem = styled.button<{ menuType: string; itemHeight: number }>`
  cursor: pointer;
  width: 100%;
  height: ${p => p.itemHeight}px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 20px;
  pointer-events: auto;
  position: relative;
  z-index: 1;
  font-weight: 400;
  gap: 8px;
  > svg {
    flex: none;
  }
  &.active {
    color: ${colors.black};
    color: var(${p => (p.menuType === 'secondary' ? 'inherit' : `--xui-${p.menuType}-sidebar-active-foreground`)});
    font-weight: 600;
  }
`;

const MenuArrow = styled.span<{ itemHeight: number; borderSize: number; menuType: string }>`
  content: '';
  position: absolute;
  right: -${p => p.borderSize + 1}px;
  height: 0;
  width: 0;
  border: ${p => p.itemHeight / 2}px solid transparent;
  border-right: ${p => p.itemHeight / 3}px solid ${colors.white};
  pointer-events: none;
  transition: top 0.2s ease-in-out;
  transform-origin: top right;
  display: ${p => (p.menuType === 'secondary' ? 'none' : 'inline-block')};
`;

const MainTitle = styled.div`
  color: #ccc;
`;

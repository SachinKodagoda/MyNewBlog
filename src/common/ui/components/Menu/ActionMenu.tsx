import { useRouter } from 'next/router';
import styled from 'styled-components';

import { colors, misc } from '@theme/baseTheme';

type TQueryData = {
  name: string;
  value: string;
};

export type TMenuItem = {
  name: string;
  data?: TQueryData[];
  icon?: JSX.Element;
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
};

function ActionMenu({
  brand = '',
  collapsed = false,
  collapsedWidth = '70px',
  marginTop = '0px',
  menuItems,
  selected,
  setSelected,
  type = 'primary',
  width = '200px',
}: TProps): JSX.Element | null {
  const selectedArr = menuItems.map(a => a.name);
  const top = `${misc.menuHeight * (selectedArr.indexOf(selected) >= 0 ? selectedArr.indexOf(selected) : 0)}px`;
  const router = useRouter();
  return (
    <Container style={{ width: collapsed ? collapsedWidth : width }} marginTop={marginTop} type={type}>
      {brand.trim().length > 0 && <Logo>{brand}</Logo>}
      <MenuItemCtr>
        <MenuItemBackground style={{ top }} type={type} />
        {menuItems.map((a, i) => {
          return (
            <MenuItem
              type='button'
              className={`${selected === a?.name ? 'active' : ''}`}
              onClick={() => {
                const query = a?.data ? a.data.map(v => `&${v.name}=${v.value}`).join('&') : '';
                router.push(`?menu=${a.name}${query}`, undefined, { shallow: true });
                setSelected(a);
              }}
              key={`menu-${i + 1}`}>
              {a?.icon}
              {!collapsed && a.name}
            </MenuItem>
          );
        })}
        <MenuArrow style={{ top }} />
      </MenuItemCtr>
    </Container>
  );
}

export default ActionMenu;

const Container = styled.div<{ marginTop: string; type: string }>`
  height: calc(100vh - ${({ marginTop }) => marginTop});
  background: var(--xui-${({ type }) => type}-sidebar-background);
  color: var(--xui-${({ type }) => type}-sidebar-foreground);
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

const MenuItemBackground = styled.span<{ type: string }>`
  content: '';
  position: absolute;
  right: 0;
  height: ${misc.menuHeight}px;
  width: 100%;
  background: var(--xui-${({ type }) => type}-sidebar-active-background);
  pointer-events: none;
  transition: top 0.2s ease-in-out;
  transform-origin: top right;
`;

const Logo = styled.div``;

const MenuItem = styled.button`
  text-transform: uppercase;
  cursor: pointer;
  width: 100%;
  height: ${misc.menuHeight}px;
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
    color: var(--xui-${({ type }) => type}-sidebar-active-foreground);
    font-weight: 600;
  }
`;

const MenuArrow = styled.span`
  content: '';
  position: absolute;
  right: -1px;
  height: 0;
  width: 0;
  border: 30px solid transparent;
  border-right: 10px solid ${colors.white};
  pointer-events: none;
  transition: top 0.2s ease-in-out;
  transform-origin: top right;
`;

import EmptyFullPage from '@layouts/common/EmptyFullPage';
import Analytics from '@layouts/menu/Analytics';
import Arts from '@layouts/menu/Arts';
import LeftMenu from '@layouts/menu/LeftMenu';
import Market from '@layouts/menu/Market';
import Orders from '@layouts/menu/Orders';
import Settings from '@layouts/menu/Settings';
import Support from '@layouts/menu/Support';
import Users from '@layouts/menu/Users';
import { TMenuItem } from '@ts/common';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

function Index(): JSX.Element {
  const menuItemsArr: TMenuItem[] = [
    'profile',
    'arts',
    'orders',
    'users',
    'analytics',
    'market',
    'support',
    'settings',
  ];
  const [selectedItem, setSelectedItem] = useState<TMenuItem>('profile');
  const [init, setInit] = useState(true);
  const router = useRouter();

  useEffect(() => {
    setInit(false);
  }, []);

  useEffect(() => {
    if (router.query.menu) {
      setSelectedItem(`${router.query.menu}` as TMenuItem);
    }
  }, [router.query.menu]);

  const getRightMenu = (): JSX.Element => {
    switch (selectedItem) {
      case 'arts':
        return <Arts />;
      case 'settings':
        return <Settings />;
      case 'users':
        return <Users />;
      case 'analytics':
        return <Analytics />;
      case 'market':
        return <Market />;
      case 'support':
        return <Support />;
      case 'orders':
        return <Orders />;
      default:
        return <div />;
    }
  };

  if (init) return <EmptyFullPage />;

  return (
    <Container>
      <LeftMenu selectedItem={selectedItem} menuItemsArr={menuItemsArr} setSelectedItem={setSelectedItem} />
      <div className='rightMenu'>{getRightMenu()}</div>
    </Container>
  );
}

export default Index;

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  height: 100vh;

  .rightMenu {
    flex-grow: 1;
    padding: 20px;
    display: flex;
    align-items: flex-start;
    height: 100vh;
    width: 100%;
    overflow-y: scroll;
  }
`;

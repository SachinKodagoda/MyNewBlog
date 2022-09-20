import AuthCheck from '@layouts/common/AuthCheck';
import EmptyFullPage from '@layouts/common/EmptyFullPage';
import Analytics from '@layouts/menu/Analytics';
import Booking from '@layouts/menu/Booking';
import LeftMenu from '@layouts/menu/LeftMenu';
import Offers from '@layouts/menu/Offers';
import Profile from '@layouts/menu/Profile';
import Settings from '@layouts/menu/Settings';
import Support from '@layouts/menu/Support';
import { TMenuItem } from '@ts/common';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

function Index(): JSX.Element {
  const menuItemsArr: TMenuItem[] = ['profile', 'offers', 'bookings', 'analytics', 'settings'];
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
      case 'profile':
        return <Profile rType='admin' />;
      case 'offers':
        return <Offers rType='admin' />;
      case 'bookings':
        return <Booking rType='admin' />;
      case 'analytics':
        return <Analytics rType='admin' />;
      case 'support':
        return <Support rType='admin' />;
      case 'settings':
        return <Settings rType='admin' />;

      default:
        return <div />;
    }
  };

  if (init) return <EmptyFullPage />;

  return (
    <AuthCheck route='admin'>
      <Container>
        <LeftMenu
          selectedItem={selectedItem}
          menuItemsArr={menuItemsArr}
          setSelectedItem={setSelectedItem}
          rType='admin'
        />
        <div className='rightMenu'>{getRightMenu()}</div>
      </Container>
    </AuthCheck>
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

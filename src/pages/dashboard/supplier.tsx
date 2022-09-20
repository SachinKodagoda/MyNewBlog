import AuthCheck from '@layouts/common/AuthCheck';
import EmptyFullPage from '@layouts/common/EmptyFullPage';
import LeftMenu from '@layouts/menu/LeftMenu';
import Reports from '@layouts/menu/Reports';
import Stock from '@layouts/menu/Stock';
import Supplier from '@layouts/menu/Supplier';
import { TMenuItem } from '@ts/common';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

function Index(): JSX.Element {
  const menuItemsArr: TMenuItem[] = ['supplier', 'stock', 'reports'];
  const [selectedItem, setSelectedItem] = useState<TMenuItem>('supplier');
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
      case 'supplier':
        return <Supplier />;
      case 'stock':
        return <Stock />;
      case 'reports':
        return <Reports />;
      default:
        return <div />;
    }
  };

  if (init) return <EmptyFullPage />;

  return (
    <AuthCheck route='supplier'>
      <Container>
        <LeftMenu
          selectedItem={selectedItem}
          menuItemsArr={menuItemsArr}
          setSelectedItem={setSelectedItem}
          rType='supplier'
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

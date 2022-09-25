import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';
import styled from 'styled-components';

import PrimaryMenu from '@components/SideMenu/PrimaryMenu';

type TMenuItem = {
  name: string;
  route: string;
  query: string;
};
function DesignSystem(): JSX.Element {
  const menuItemsArr: TMenuItem[] = [
    {
      name: 'profile',
      query: `test=5`,
      route: `/dashboard/test`,
    },
  ];
  const [selectedItem, setSelectedItem] = useState('profile');
  const [init, setInit] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (router?.query?.menu) {
      setSelectedItem(`${router.query.menu}`);
    }
  }, [router.query.menu]);

  const getRightMenu = (): JSX.Element => {
    switch (selectedItem) {
      case 'profile':
        return <div />;
      case 'offers':
        return <div />;
      case 'bookings':
        return <div />;
      case 'analytics':
        return <div />;
      case 'support':
        return <div />;
      case 'settings':
        return <div />;

      default:
        return <div />;
    }
  };
  return (
    <Container>
      <PrimaryMenu selectedItem={selectedItem} menuItemsArr={menuItemsArr} setSelectedItem={setSelectedItem} />
      <div className='rightMenu'>{getRightMenu()}</div>
    </Container>
  );
}

export default DesignSystem;

const Container = styled.div``;

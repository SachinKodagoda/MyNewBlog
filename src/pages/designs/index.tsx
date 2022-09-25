import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';
import { BiCollection, BiExtension, BiTable } from 'react-icons/bi';
import styled from 'styled-components';

import PrimaryMenu, { TMenuItem } from '@components/Menu/ActionMenu';
import TopMenu from '@components/Menu/TopMenu';
import Buttons from '@layouts/Designs/buttons';
import Tables from '@layouts/Designs/tables';

function DesignSystem(): JSX.Element {
  const router = useRouter();
  const [selectedItem, setSelectedItem] = useState('profile');
  const menuItemsArr: TMenuItem[] = [
    {
      icon: <BiCollection />,
      name: 'Buttons',
    },
    {
      icon: <BiTable />,
      name: 'Tables',
    },
    {
      name: 'Tags',
      titleType: 'main',
    },
    {
      icon: <BiExtension />,
      name: 'Tags',
    },
  ];
  const getRightMenu = (): JSX.Element => {
    switch (selectedItem) {
      case 'buttons':
        return <Buttons />;
      case 'tables':
        return <Tables />;
      default:
        return <div />;
    }
  };
  useEffect(() => {
    if (router?.query?.menu) {
      setSelectedItem(`${router.query.menu}`);
    }
  }, [router.query.menu]);
  return (
    <>
      <TopMenu />
      <Container>
        <PrimaryMenu
          selected={selectedItem}
          menuItems={menuItemsArr}
          setSelected={val => setSelectedItem(`${val.name}`)}
          marginTop='60px'
          type='secondary'
          borderSize={1}
          width='250px'
        />

        <RightMenu>{getRightMenu()}</RightMenu>
      </Container>
    </>
  );
}

export default DesignSystem;

const Container = styled.div`
  display: flex;
`;
const RightMenu = styled.div`
  padding: 20px;
`;

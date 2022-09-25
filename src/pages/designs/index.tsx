import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';
import { BiExtension } from 'react-icons/bi';
import styled from 'styled-components';

import PrimaryMenu, { TMenuItem } from '@components/SideMenu/PrimaryMenu';
import Buttons from '@layouts/Designs/buttons';
import Tables from '@layouts/Designs/tables';

function DesignSystem(): JSX.Element {
  const router = useRouter();
  const [selectedItem, setSelectedItem] = useState('profile');
  const menuItemsArr: TMenuItem[] = [
    {
      data: [
        {
          name: 'test1',
          value: '111',
        },
        {
          name: 'test2',
          value: '222',
        },
      ],
      icon: <BiExtension />,
      name: 'buttons',
    },
    {
      data: null,
      icon: <BiExtension />,
      name: 'tables',
    },
    {
      data: null,
      icon: <BiExtension />,
      name: 'tags',
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
    <Container>
      <PrimaryMenu
        selected={selectedItem}
        menuItems={menuItemsArr}
        setSelected={val => setSelectedItem(`${val.name}`)}
      />
      <RightMenu>{getRightMenu()}</RightMenu>
    </Container>
  );
}

export default DesignSystem;

const Container = styled.div`
  display: flex;
`;
const RightMenu = styled.div`
  padding: 20px;
`;

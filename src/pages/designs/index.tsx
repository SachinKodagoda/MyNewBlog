import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';
import styled from 'styled-components';

import Colors from '@components/Menu/Colors';
import LeftMenu, { TData } from '@components/Menu/LeftMenu';
import Buttons from '@layouts/Designs/buttons';
import Cards from '@layouts/Designs/cards';
import Tables from '@layouts/Designs/tables';
import Texts from '@layouts/Designs/texts';
import { widths } from '@theme/baseTheme';

function DesignSystem(): JSX.Element {
  const router = useRouter();
  const [selectedItem, setSelectedItem] = useState('profile');
  const getRightMenu = (): JSX.Element => {
    switch (selectedItem) {
      case 'buttons':
        return <Buttons />;
      case 'tables':
        return <Tables />;
      case 'colors':
        return <Colors />;
      case 'texts':
        return <Texts />;
      case 'cards':
        return <Cards />;
      default:
        return <div />;
    }
  };
  useEffect(() => {
    if (router?.query?.menu) {
      setSelectedItem(`${router.query.menu}`);
    }
  }, [router.query.menu]);
  const menuData: TData = [
    {
      subtitles: [
        {
          name: 'Colors',
          value: 'colors',
        },
        {
          name: 'sizes',
          value: 'Sizes',
        },
      ],
      title: 'Theme',
    },
    {
      subtitles: [
        {
          name: 'Container',
          value: 'container',
        },
        {
          name: 'Grid',
          value: 'grid',
        },
        {
          name: 'Spacer',
          value: 'spacer',
        },
      ],
      title: 'Layouts',
    },
    {
      subtitles: [
        {
          name: 'Avatar',
          value: 'avatar',
        },
        {
          name: 'Button',
          value: 'buttons',
        },
        {
          name: 'Button Group',
          value: 'button_group',
        },
        {
          name: 'Card',
          value: 'cards',
        },
        {
          name: 'Pagination',
          value: 'pagination',
        },
        {
          name: 'Label',
          value: 'label',
        },
        {
          name: 'Collapse',
          value: 'collapse',
        },
        {
          name: 'Navbar',
          value: 'navbar',
        },
        {
          name: 'Badge',
          value: 'badge',
        },
        {
          name: 'Input',
          value: 'input',
        },
        {
          name: 'AutoComplete',
          value: 'auto_complete',
        },
        {
          name: 'TextArea',
          value: 'text_area',
        },
        {
          name: 'Checkbox',
          value: 'checkbox',
        },
        {
          name: 'Checkbox Group',
          value: 'checkbox_group',
        },
        {
          name: 'Radio',
          value: 'radio',
        },
        {
          name: 'Popover',
          value: 'popover',
        },
        {
          name: 'Tooltip',
          value: 'tooltip',
        },
        {
          name: 'Dropdown',
          value: 'dropdown',
        },
        {
          name: 'Progress',
          value: 'progress',
        },
        {
          name: 'Select',
          value: 'select',
        },
        {
          name: 'Modal',
          value: 'modal',
        },
        {
          name: 'Loading',
          value: 'loading',
        },
        {
          name: 'Switch',
          value: 'switch',
        },
        {
          name: 'Text',
          value: 'texts',
        },
        {
          name: 'Link',
          value: 'link',
        },
        {
          name: 'User',
          value: 'user',
        },
        {
          name: 'Image',
          value: 'image',
        },
      ],
      title: 'Components',
    },
  ];
  const styleObj = {
    padding: '20px',
  };
  if (selectedItem === 'buttons') {
    styleObj.padding = '0';
  }
  return (
    <Container>
      <LeftMenu data={menuData} />
      <RightMenu styleObj={styleObj}>{getRightMenu()}</RightMenu>
    </Container>
  );
}

export default DesignSystem;

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  margin: auto;
  max-width: ${widths.minDesktopLG};
`;

type TStyleObj = {
  padding: string;
};
const RightMenu = styled.div<{ styleObj: TStyleObj }>`
  padding: ${p => p.styleObj.padding};
  overflow-y: auto;
  flex: auto;
`;

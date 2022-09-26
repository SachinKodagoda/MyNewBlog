import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';
import styled from 'styled-components';

import LeftMenu, { TData } from '@components/Menu/LeftMenu';
import Buttons from '@layouts/Designs/buttons';
import Tables from '@layouts/Designs/tables';
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
          value: 'button',
        },
        {
          name: 'Button Group',
          value: 'button_group',
        },
        {
          name: 'Card',
          value: 'card',
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
          value: 'text',
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
  return (
    <Container>
      <LeftMenu data={menuData} />
      <RightMenu>{getRightMenu()}</RightMenu>
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
const RightMenu = styled.div`
  padding: 20px;
`;

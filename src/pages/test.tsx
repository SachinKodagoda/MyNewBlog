import { Avatar, Dropdown, Link as MenuLink, Navbar, Text } from '@nextui-org/react';

import { Layout } from '@layouts/Layout';
import { AcmeLogo } from '@svg/icons/AcmeLogo';

function Test(): JSX.Element {
  const collapseItems = [
    'Profile',
    'Dashboard',
    'Activity',
    'Analytics',
    'System',
    'Deployments',
    'My Settings',
    'Team Settings',
    'Help & Feedback',
    'Log Out',
  ];
  return (
    <Layout>
      <Navbar isBordered variant='sticky'>
        <Navbar.Toggle showIn='xs' />
        <Navbar.Brand
          css={{
            '@xs': {
              w: '12%',
            },
          }}>
          <AcmeLogo />
          <Text b color='inherit' hideIn='xs'>
            ACME
          </Text>
        </Navbar.Brand>
        <Navbar.Content enableCursorHighlight activeColor='warning' hideIn='xs' variant='highlight'>
          <Navbar.Link href='#'>Features</Navbar.Link>
          <Navbar.Link isActive href='#'>
            Customers
          </Navbar.Link>
          <Navbar.Link href='#'>Pricing</Navbar.Link>
          <Navbar.Link href='#'>Company</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content
          css={{
            '@xs': {
              jc: 'flex-end',
              w: '12%',
            },
          }}>
          <Dropdown placement='bottom-right'>
            <Navbar.Item>
              <Dropdown.Trigger>
                <Avatar
                  bordered
                  as='button'
                  color='warning'
                  size='md'
                  src='https://i.pravatar.cc/150?u=a042581f4e29026704d'
                />
              </Dropdown.Trigger>
            </Navbar.Item>
            <Dropdown.Menu
              aria-label='User menu actions'
              color='warning'
              onAction={actionKey => {
                // eslint-disable-next-line no-console
                console.log({ actionKey });
              }}>
              <Dropdown.Item key='profile' css={{ height: '$18' }}>
                <Text b color='inherit' css={{ d: 'flex' }}>
                  Signed in as
                </Text>
                <Text b color='inherit' css={{ d: 'flex' }}>
                  zoey@example.com
                </Text>
              </Dropdown.Item>
              <Dropdown.Item key='settings' withDivider>
                My Settings
              </Dropdown.Item>
              <Dropdown.Item key='team_settings'>Team Settings</Dropdown.Item>
              <Dropdown.Item key='analytics' withDivider>
                Analytics
              </Dropdown.Item>
              <Dropdown.Item key='system'>System</Dropdown.Item>
              <Dropdown.Item key='configurations'>Configurations</Dropdown.Item>
              <Dropdown.Item key='help_and_feedback' withDivider>
                Help & Feedback
              </Dropdown.Item>
              <Dropdown.Item key='logout' withDivider color='error'>
                Log Out
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Content>
        <Navbar.Collapse disableAnimation>
          {collapseItems.map((item, index) => (
            <Navbar.CollapseItem
              key={item}
              activeColor='warning'
              css={{
                color: index === collapseItems.length - 1 ? '$error' : '',
              }}
              isActive={index === 2}>
              <MenuLink
                color='inherit'
                css={{
                  minWidth: '100%',
                }}
                href='#'>
                {item}
              </MenuLink>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
      </Navbar>
    </Layout>
  );
}

export default Test;

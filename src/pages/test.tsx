import { useState } from 'react';

import { Avatar, Button, Dropdown, Input, Link, Link as MenuLink, Navbar, Text } from '@nextui-org/react';

import { Layout } from '@layouts/Layout';
import LoginModal from '@layouts/Login/LoginModal';
import { icons } from '@svg/Icons';
import { AcmeLogo } from '@svg/icons/AcmeLogo';
import { SearchIcon } from '@svg/icons/SearchIcon';

function Test(): JSX.Element {
  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);
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
      <>
        <Navbar variant='sticky'>
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
          <Navbar.Content enableCursorHighlight activeColor='secondary' hideIn='xs' variant='underline'>
            <Dropdown isBordered>
              <Navbar.Item>
                <Dropdown.Button
                  auto
                  light
                  css={{
                    dflex: 'center',
                    px: 0,
                    svg: { pe: 'none' },
                  }}
                  iconRight={icons.chevron}
                  ripple={false}>
                  Features
                </Dropdown.Button>
              </Navbar.Item>
              <Dropdown.Menu
                aria-label='ACME features'
                css={{
                  $$dropdownItemHeight: '70px',
                  $$dropdownMenuWidth: '340px',
                  '& .nextui-dropdown-item': {
                    // dropdown item title
                    '& .nextui-dropdown-item-content': {
                      fontWeight: '$semibold',
                      w: '100%',
                    },

                    py: '$4',

                    // dropdown item left icon
                    svg: {
                      color: '$secondary',
                      mr: '$4',
                    },
                  },
                }}>
                <Dropdown.Item
                  key='autoscaling'
                  showFullDescription
                  description='ACME scales apps to meet user demand, automagically, based on load.'
                  icon={icons.scale}>
                  Autoscaling
                </Dropdown.Item>
                <Dropdown.Item
                  key='usage_metrics'
                  showFullDescription
                  description='Real-time metrics to debug issues. Slow query added? We’ll show you exactly where.'
                  icon={icons.activity}>
                  Usage Metrics
                </Dropdown.Item>
                <Dropdown.Item
                  key='production_ready'
                  showFullDescription
                  description='ACME runs on ACME, join us and others serving requests at web scale.'
                  icon={icons.flash}>
                  Production Ready
                </Dropdown.Item>
                <Dropdown.Item
                  key='99_uptime'
                  showFullDescription
                  description='Applications stay on the grid with high availability and high uptime guarantees.'
                  icon={icons.server}>
                  +99% Uptime
                </Dropdown.Item>
                <Dropdown.Item
                  key='supreme_support'
                  showFullDescription
                  description='Overcome any challenge with a supporting team ready to respond.'
                  icon={icons.user}>
                  +Supreme Support
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Navbar.Link isActive href='#'>
              Customers
            </Navbar.Link>
            <Navbar.Link href='#'>Pricing</Navbar.Link>
            <Navbar.Link href='#'>Company</Navbar.Link>
          </Navbar.Content>
          <Navbar.Content
            css={{
              '@xsMax': {
                jc: 'space-between',
                w: '100%',
              },
            }}>
            <Navbar.Item
              css={{
                '@xsMax': {
                  jc: 'center',
                  w: '100%',
                },
              }}>
              <Input
                clearable
                contentLeft={<SearchIcon fill='var(--nextui-colors-accents6)' size={16} />}
                contentLeftStyling={false}
                css={{
                  '& .nextui-input-content--left': {
                    dflex: 'center',
                    h: '100%',
                    ml: '$4',
                  },
                  '@xsMax': {
                    mw: '300px',
                  },
                  w: '100%',
                }}
                placeholder='Search...'
              />
            </Navbar.Item>
            <Dropdown placement='bottom-right'>
              <Navbar.Item>
                <Dropdown.Trigger>
                  <Avatar
                    bordered
                    as='button'
                    color='primary'
                    size='md'
                    src='https://i.pravatar.cc/150?u=a042581f4e29026704d'
                  />
                </Dropdown.Trigger>
              </Navbar.Item>
              <Dropdown.Menu
                aria-label='User menu actions'
                color='secondary'
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
          <Navbar.Content>
            <Navbar.Item>
              <Button auto onClick={handler}>
                Login
              </Button>
            </Navbar.Item>
            <Navbar.Item>
              <Button auto flat as={Link} href='#'>
                Sign Up
              </Button>
            </Navbar.Item>
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
        <LoginModal visible={visible} setVisible={setVisible} />
      </>
    </Layout>
  );
}

export default Test;

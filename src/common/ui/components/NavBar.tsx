import SelectBox from '@components/FormElements/SelectBox';
import { UserContext } from '@ctx/UserContext';
import { langOpt } from '@lib/optionLib';
import { colors, devices, widths } from '@theme/baseTheme';
import { TInputValue } from '@ts/common';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import { Link as LinkScroll } from 'react-scroll';
import styled from 'styled-components';

function NavBar(): JSX.Element {
  const router = useRouter();
  const { uData, signOut } = useContext(UserContext);
  const { asPath, locale, pathname } = router;
  const [selected, setSelected] = useState(null);
  const toggleLanguage = (val: TInputValue) => {
    switch (val) {
      case 'en':
        router.push(pathname, asPath, { locale: 'en' });
        break;
      case 'si':
        router.push(pathname, asPath, { locale: 'si' });
        break;
      default:
        break;
    }
  };
  return (
    <Container>
      <MiddleCtr>
        <Logo
          data-cy='navbar-logo'
          aria-label='Davinci Logo'
          onClick={() => {
            router.push('/');
          }}
          onKeyPress={() => {
            router.push('/');
          }}
          role='button'
          tabIndex={0}
        >
          TWIN-SHIELD
        </Logo>
        <MCtr>
          <Menu>
            <MenuItem>
              <LinkScroll to='BookNow' smooth offset={-65} isDynamic>
                BookNow
              </LinkScroll>
            </MenuItem>
            {/* <MenuItem>
            <LinkScroll to='Rooms' smooth offset={-65} isDynamic>
              Rooms
            </LinkScroll>
          </MenuItem>
          <MenuItem>
            <LinkScroll to='Conference' smooth offset={-65} isDynamic>
              Conference
            </LinkScroll>
          </MenuItem> */}
            <MenuItem>
              <LinkScroll to='Restaurant' smooth offset={-65} isDynamic>
                Restaurant
              </LinkScroll>
            </MenuItem>
            <MenuItem>
              <LinkScroll to='Features' smooth offset={-65} isDynamic>
                Gym & Pool
              </LinkScroll>
            </MenuItem>
            <MenuItem>
              <LinkScroll to='Events' smooth offset={-65} isDynamic>
                Events
              </LinkScroll>
            </MenuItem>
            <MenuItem>
              <LinkScroll to='Offers' smooth offset={-65} isDynamic>
                Offers
              </LinkScroll>
            </MenuItem>
            <MenuItem>
              <LinkScroll to='Contacts' smooth offset={-65} isDynamic>
                Contacts
              </LinkScroll>
            </MenuItem>
            <LangBar>
              <SelectBox
                style={{
                  color: colors.black,
                  background: 'transparent',
                  border: 'none',
                  width: '30px',
                  menuBackground: colors.white,
                  menuColor: colors.black,
                  hoverBackground: colors.white,
                  hoverColor: colors.black,
                  activeBackground: colors.white,
                  activeColor: colors.black,
                  disableColor: colors.gray2,
                  borderRadius: '3px',
                  dropDownColor: colors.black,
                  separator: false,
                  separatorMargin: 8,
                  separatorColor: colors.gray2,
                  indicatorContainerBackground: 'transparent',
                }}
                separatorSpace={0}
                indicatorSpace={0}
                valueContainerMargin={2}
                separatePlaceHolder={false}
                options={langOpt}
                onChange={selected => {
                  toggleLanguage(selected.value || null);
                }}
                selectedValue={locale || 'en'}
                placeholder=''
                id='language-toggle'
              />
            </LangBar>
          </Menu>
          <LoginBtn
            data-cy={uData?.email ? 'navbar-logout' : 'navbar-login'}
            onClick={() => {
              if (uData?.email) {
                signOut(false);
              } else {
                router.push('/login');
              }
            }}
          >
            {uData?.email ? 'LogOut' : 'Login'}
          </LoginBtn>
        </MCtr>
        {/* <Cross menuOpened={menuOpened} clickHandler={setMenuOpened} /> */}
      </MiddleCtr>
    </Container>
  );
}

export default NavBar;

const Container = styled.div`
  height: 60px;
  width: 100%;
  background: ${colors.black};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  border-bottom: 2px solid ${colors.royalGold};
  position: fixed;
  box-shadow: 0px -2px 10px ${colors.transparent_black5};
`;

const MiddleCtr = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 0 1 ${widths.min4K}px;
  padding: 0 16px;
  gap: 16px;
`;

const Menu = styled.div`
  display: none;
  @media ${devices.minDesktopSM} {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
  }
`;

const MenuItem = styled.div`
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 0.75em;
  cursor: pointer;
  color: ${colors.gray4};
  font-weight: 900;
  font-family: 'Roboto', sans-serif;
  position: relative;
  &::after {
    content: '';
    width: 100%;
    height: 2px;
    background: ${colors.gray5};
    border-radius: 10px;
    position: absolute;
    left: 0;
    bottom: -4px;
  }
`;

const Logo = styled.div`
  align-items: center;
  cursor: pointer;
  color: ${colors.white};
  font-weight: bolder;
  font-weight: 900;
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  position: relative;
  line-height: 1.2em;
  &:first-letter {
    font-size: 1.3em;
    font-style: italic;
    color: ${colors.royalGold};
  }
`;

const LangBar = styled.div`
  padding: 0 20px;
  border-radius: 50px;
  background: ${colors.themeRed};
  font-family: Roboto, sans-serif;
  font-weight: 900;
`;

const LoginBtn = styled.div`
  color: ${colors.black};
  background: ${colors.royalGold};
  cursor: pointer;
  padding: 6px 15px;
  border-radius: 50px;
  font-weight: 600;
  text-transform: uppercase;
`;

const MCtr = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

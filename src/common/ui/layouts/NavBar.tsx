import SelectBox from '@components/FormElements/SelectBox';
import { DavinciLogo } from '@svg/Logo';
import { WhatsAppLogo } from '@svg/Whatsapp';
import { colors, devices, widths } from '@theme/baseTheme';
import { TInputValue } from '@ts/common';
import { Translations } from '@util/localize';
import { useRouter } from 'next/router';
import styled from 'styled-components';

type TProps = {
  menuItemsVisible?: boolean;
  border?: boolean;
};
function NavBar({ border = false, menuItemsVisible = true }: TProps): JSX.Element {
  const t = Translations();
  const router = useRouter();
  const { asPath, locale, pathname } = router;
  const ToggleLanguage = (val: TInputValue) => {
    switch (val) {
      case 'en':
        router.push(pathname, asPath, { locale: 'en' });
        break;
      case 'de':
        router.push(pathname, asPath, { locale: 'de' });
        break;
      default:
        break;
    }
  };
  return (
    <Container border={border}>
      <div className='middleContainer'>
        <div
          aria-label='Davinci Logo'
          className='title'
          onClick={() => {
            router.push('/');
          }}
          onKeyPress={() => {
            router.push('/');
          }}
          role='button'
          tabIndex={0}
        >
          <DavinciLogo />
        </div>
        <div className='menu'>
          {menuItemsVisible ? (
            <>
              <div className='menuItem'>{t.howItWorks}</div>
              <div className='menuItem'>{t.gallery}</div>
              <div className='menuItem'>{t.prices}</div>
              <div className='menuItem'>{t.shipping}</div>
            </>
          ) : (
            <div className='menuItem whatsapp'>
              WhatsApp Support
              <WhatsAppLogo />
            </div>
          )}

          <div className='langBar'>
            <SelectBox
              style={{
                color: `${colors.white}`,
                background: 'transparent',
                border: 'none',
                width: '30px',
                menuBackground: `${colors.white}`,
                menuColor: `${colors.black}`,
                hoverBackground: `${colors.black}`,
                hoverColor: `${colors.white}`,
                activeBackground: `${colors.black}`,
                activeColor: `${colors.white}`,
                disableColor: '#ebecf0',
                borderRadius: '3px',
                dropDownColor: `${colors.dark_gray}`,
                separator: false,
                separatorMargin: 8,
                separatorColor: `${colors.gray2}`,
              }}
              separatorSpace={0}
              indicatorSpace={0}
              valueContainerMargin={2}
              separatePlaceHolder={false}
              options={[
                { label: 'EN', value: 'en' },
                { label: 'DE', value: 'de' },
              ]}
              onChange={selected => {
                ToggleLanguage(selected.value || null);
              }}
              selectedValue={locale || 'en'}
              placeholder=''
              id='language-toggle'
            />
          </div>
        </div>
        {/* <Cross menuOpened={menuOpened} clickHandler={setMenuOpened} /> */}
      </div>
    </Container>
  );
}

export default NavBar;

const Container = styled.div<{ border?: boolean }>`
  height: 60px;
  width: 100%;
  background: ${colors.navbarBackground};
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid ${colors.black};
  box-shadow: 0px 2px 10px 3px rgba(0, 0, 0, 0.1);
  z-index: 1;
  position: relative;

  .middleContainer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 0 1 ${widths.minDesktopLG}px;
    padding: 0 16px;
    gap: 16px;
  }

  .title {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .menu {
    display: none;
    @media ${devices.minDesktopSM} {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 16px;
    }
  }

  .menuItem {
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 0.75rem;
    cursor: pointer;
  }

  .whatsapp {
    color: ${colors.dark_green};
    text-transform: capitalize;
  }

  .langBar {
    padding: 0 20px;
    border-radius: 50px;
    background: ${colors.black};
  }
`;

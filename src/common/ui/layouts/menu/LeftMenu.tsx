import LetterImg from '@components/Thumbnails/LetterImg';
import { UserContext } from '@ctx/UserContext';
import { Log, MenuIcons, ZoomIn } from '@svg/common';
import { colors, misc } from '@theme/baseTheme';
import { TMenuItem, TRoute } from '@ts/common';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react';
import { useCookies } from 'react-cookie';
import styled from 'styled-components';

type TProps = {
  menuItemsArr: TMenuItem[];
  selectedItem: TMenuItem;
  setSelectedItem: React.Dispatch<React.SetStateAction<TMenuItem>>;
  rType: TRoute;
};
function LeftMenu({ menuItemsArr, selectedItem, setSelectedItem, rType }: TProps): JSX.Element | null {
  const { signOut } = useContext(UserContext);
  const [cookies] = useCookies(['uData']);
  const [smallMenu, setSmallMenu] = useState(false);
  const top = `${misc.menuHeight * (menuItemsArr.indexOf(selectedItem) || 0)}px`;
  const router = useRouter();

  return (
    <Container style={{ width: smallMenu ? '70px' : '200px' }}>
      <div className='profileCover' style={{ paddingBottom: smallMenu ? '0' : '16px' }}>
        {cookies?.uData?.photoURL ? (
          <div className='profileImgCtr'>
            <Image
              src={cookies?.uData?.photoURL}
              alt='user'
              width={smallMenu ? '56px' : '80px'}
              height={smallMenu ? '56px' : '80px'}
              className='profileImg'
            />
          </div>
        ) : (
          <LetterImg
            text={cookies?.uData?.photoURL || ''}
            size={smallMenu ? '56px' : '80px'}
            fontSize='3rem'
            background={colors.gray6}
          />
        )}
      </div>
      {!smallMenu && <div className='profileName'>{cookies?.uData?.displayName}</div>}
      {!smallMenu && cookies?.uData?.type && <div className='type'>({cookies?.uData?.type})</div>}
      <div className='separator' />
      <div className='menuCover'>
        <span className='backgroundSelection' style={{ top }} />
        {menuItemsArr.map((item, i) => {
          return (
            <button
              type='button'
              className={`${selectedItem === item ? 'menuItem active' : 'menuItem'}`}
              onClick={() => {
                const query = item === 'offers' ? '&page=1&limit=8&orderBy=id&order=asc' : '';
                router.push(`/dashboard/${rType}?menu=${item}${query}`, undefined, { shallow: true });
                setSelectedItem(item);
              }}
              key={`menu-${i + 1}`}
            >
              <MenuIcons type={item} />
              {!smallMenu && item}
            </button>
          );
        })}
        <span className='topArrow' style={{ top }} />
      </div>
      <div className='bottomContainer'>
        <div className='separator' />
        <button data-cy='dashboard-logout' type='button' className='logoutCtr' onClick={() => signOut(true)}>
          {smallMenu ? <Log /> : <div className='logoutText'>Log out</div>}
        </button>
        <div className='separator' />
        <button type='button' className='zoomCtr' onClick={() => setSmallMenu(val => !val)}>
          {smallMenu ? <ZoomIn /> : <div className='zoomOutText'>Small Menu</div>}
        </button>
      </div>
    </Container>
  );
}

export default LeftMenu;

const Container = styled.div`
  height: 100vh;
  background: ${colors.black};
  color: ${colors.white};
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  flex: none;

  .profileImg {
    border-radius: 50%;
  }

  .profileImgCtr {
    border: 2px solid ${colors.white};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }

  .profileCover {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px 0;
  }
  .profileName {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .type {
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    font-weight: 900;
  }

  .separator {
    height: 2px;
    background: ${colors.gray6};
    border-radius: 4px;
    width: 80%;
    margin: 16px auto;
  }

  .menuCover {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
  }

  .topArrow {
    content: '';
    position: absolute;
    right: -1px;
    height: 0;
    width: 0;
    border: 30px solid transparent;
    border-right: 10px solid ${colors.white};
    pointer-events: none;
    transition: top 0.2s ease-in-out;
    transform-origin: top right;
  }

  .backgroundSelection {
    content: '';
    position: absolute;
    right: 0;
    height: ${misc.menuHeight}px;
    width: 100%;
    background: ${colors.royalGold};
    pointer-events: none;
    transition: top 0.2s ease-in-out;
    transform-origin: top right;
  }

  .menuItem {
    text-transform: uppercase;
    cursor: pointer;
    width: 100%;
    height: ${misc.menuHeight}px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0 20px;
    color: ${colors.white};
    pointer-events: auto;
    position: relative;
    z-index: 1;
    font-weight: 400;
    gap: 8px;
    > svg {
      flex: none;
    }
  }
  .active {
    color: ${colors.black};
    font-weight: 600;
  }

  .bottomContainer {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: column;
    flex-grow: 1;
    padding: 16px 0;
  }

  .zoomCtr {
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    color: ${colors.white};
    > svg {
      cursor: pointer;
    }
  }

  .logoutText {
    font-weight: 600px;
    text-transform: uppercase;
  }

  .zoomOutText {
    font-weight: 600px;
    text-transform: uppercase;
    cursor: pointer;
  }

  .logoutCtr {
    color: ${colors.white};
    cursor: pointer;
  }
`;

import Button from '@components/Buttons/Button';
import ExpressHeader from '@components/Other/ExpressHeader';
import Modal from '@components/Other/Modal';
import { CartContext } from '@ctx/CartContext';
import NavBar from '@layouts/NavBar';
import Cart from '@layouts/steps/Cart';
import Quantity from '@layouts/steps/Quantity';
import Size from '@layouts/steps/Size';
import Type from '@layouts/steps/Type';
import Upload from '@layouts/steps/Upload';
import { colors, devices, widths } from '@theme/baseTheme';
import { TTab } from '@ts/common';
import { Translations } from '@util/localize';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';

function Design(): JSX.Element {
  const { selectedTab, setSelectedTab } = useContext(CartContext);
  const t = Translations();
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (router?.query?.tab && `${router.query.tab}`.trim().length > 0) {
      setSelectedTab(`${router.query.tab}` as TTab);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);

  const getTabBody = () => {
    switch (selectedTab) {
      case 'type':
        return <Type />;
      case 'quantity':
        return <Quantity />;
      case 'size':
        return <Size />;
      case 'upload':
        return <Upload />;
      case 'cart':
        return <Cart />;
      default:
        return <Quantity />;
    }
  };

  return (
    <>
      <NavBar menuItemsVisible={false} border />
      <ExpressHeader />
      <Container>
        <div className='tabHeader'>
          <button
            type='button'
            className={`${selectedTab === 'type' ? 'tabHeaderItem active' : 'tabHeaderItem'}`}
            onClick={() => {
              router.push('/design/type', undefined, { shallow: true });
              setSelectedTab('type');
            }}
          >
            {t.express_type}
          </button>
          <button
            type='button'
            className={`${selectedTab === 'quantity' ? 'tabHeaderItem active' : 'tabHeaderItem'}`}
            onClick={() => {
              router.push('/design/quantity', undefined, { shallow: true });
              setSelectedTab('quantity');
            }}
          >
            {t.quantity}
          </button>
          <button
            type='button'
            className={`${selectedTab === 'size' ? 'tabHeaderItem active' : 'tabHeaderItem'}`}
            onClick={() => {
              router.push('/design/size', undefined, { shallow: true });
              setSelectedTab('size');
            }}
          >
            {t.size}
          </button>
          <button
            type='button'
            className={`${selectedTab === 'upload' ? 'tabHeaderItem active' : 'tabHeaderItem'}`}
            onClick={() => {
              router.push('/design/upload', undefined, { shallow: true });
              setSelectedTab('upload');
            }}
          >
            {t.upload}
          </button>
          <button
            type='button'
            className={`${selectedTab === 'cart' ? 'tabHeaderItem active' : 'tabHeaderItem'}`}
            onClick={() => {
              router.push('/design/cart', undefined, { shallow: true });
              setSelectedTab('cart');
            }}
          >
            {t.shippingCart}
          </button>
        </div>
        <div className='tabBody'>{getTabBody()}</div>
      </Container>
      <Modal
        onClickOutside={() => {
          setShowModal(false);
        }}
        modalOpen={showModal}
      >
        <ModalContent>
          Still working on a prototype
          <br />
          Coming live soon!
          <br />
          <br />
          <Button
            type='normal'
            text='OK'
            isDisabled={false}
            onClickHandler={(): void => {
              setShowModal(false);
            }}
          />
        </ModalContent>
      </Modal>
    </>
  );
}

export default Design;

const ModalContent = styled.div`
  padding: 30px;
  min-width: 280px;
  min-height: 280px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  text-align: center;
  flex-direction: column;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: ${widths.minDesktopLG}px;
  padding: 0 16px;
  margin: auto;

  .tabHeader {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 32px;
    row-gap: 8px;
    width: 100%;
    flex-wrap: wrap;
    margin: 32px 0 32px;

    @media ${devices.minTablet} {
      border-bottom: 2px solid ${colors.dark_gray};
    }
  }

  .tabHeaderItem {
    cursor: pointer;
    text-transform: uppercase;
    color: ${colors.dark_gray};
    padding-bottom: 8px;
  }

  .active {
    color: ${colors.black};
    font-weight: 500;
    border-bottom: 2px solid ${colors.black};
    outline: none;
    outline-offset: 0;
    margin-bottom: -2px;
  }

  .tabBody {
    width: 100vw;
  }
`;

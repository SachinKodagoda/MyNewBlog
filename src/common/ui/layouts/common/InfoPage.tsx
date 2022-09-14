import Button from '@components/Buttons/Button';
import workspace from '@images/workspace.svg';
import { devices } from '@theme/baseTheme';
import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

type TProps = {
  message1: string;
  message2?: string;
  btnTxt: string;
  onClick: () => void;
};
function InfoPage({ btnTxt, message1 = '', message2 = '', onClick }: TProps): JSX.Element {
  return (
    <Container>
      <div className='imageCover'>
        <Image src={workspace} alt='workspace' />
      </div>
      {message1.trim().length > 0 && <div className='message1'>{message1}</div>}
      {message2.trim().length > 0 && <div className='message2'>{message2}</div>}
      <div className='btnCtr'>
        <Button type='normal' isDisabled={false} text={btnTxt} onClickHandler={onClick} />
      </div>
    </Container>
  );
}

export default InfoPage;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 4px;
  width: 100vw;
  height: 100vh;

  .imageCover {
    width: calc(100% - 32px);
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    @media ${devices.minDesktopSM} {
      width: 400px;
    }
  }

  .message1 {
    font-size: 24px;
    margin: 10px 8px;
    text-align: center;
    font-weight: 500;
  }
  .message2 {
    font-size: 20px;
    margin: 0 8px 10px;
    text-align: center;
    font-weight: 400;
  }

  .btnCtr {
    width: 200px;
    @media ${devices.minDesktopSM} {
      width: 300px;
    }
  }
`;

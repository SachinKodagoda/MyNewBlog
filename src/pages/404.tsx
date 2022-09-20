import Button from '@components/Buttons/Button';
import error from '@images/error_404.svg';
import { devices } from '@theme/baseTheme';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';

function ErrorPage404(): JSX.Element {
  const router = useRouter();
  return (
    <Container>
      <div className='imageCover'>
        <Image src={error} alt='workspace' />
      </div>
      <div className='message'>This page could not be found.</div>
      <div className='btnCtr'>
        <Button
          type='normal'
          isDisabled={false}
          text='GO HOME'
          onClickHandler={() => {
            router.push('/');
          }}
        />
      </div>
    </Container>
  );
}

export default ErrorPage404;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 16px;
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

  .message {
    font-size: 1.5rem;
    padding: 1em 0.5em;
    margin-top: 1em;
    text-align: center;
    font-weight: 600;
  }

  .btnCtr {
    width: 200px;
    @media ${devices.minDesktopSM} {
      width: 300px;
    }
  }
`;

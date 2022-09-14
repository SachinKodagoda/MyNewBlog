import Loader from '@components/Loaders/CircularLoader';
import { UserContext } from '@ctx/UserContext';
import AuthCheck from '@layouts/common/AuthCheck';
import google from '@public/images/google.svg';
import workspace from '@public/images/workspace.svg';
import { colors } from '@theme/baseTheme';
import Image from 'next/image';
import React, { useContext } from 'react';
import styled from 'styled-components';

function Login(): JSX.Element {
  const { loading, signIn } = useContext(UserContext);
  return (
    <AuthCheck route='login'>
      <Container>
        <div className='imageCover'>
          <Image src={workspace} alt='workspace' />
        </div>
        <div className='welcome'>
          Welcome to
          <b>Davinci-Design.online</b>
        </div>
        <button
          onClick={() => {
            signIn();
          }}
          className='loginBtn'
          type='button'
        >
          <div className='googleIconCover'>
            <Image src={google} alt='googleImg' />
          </div>
          Login
        </button>
        <Loader show={loading} />
      </Container>
    </AuthCheck>
  );
}

export default Login;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  .loaderCover {
    height: 50px;
  }
  .loginBtn {
    color: ${colors.black};
    cursor: pointer;
    border: 1px solid ${colors.black};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 60px;
    border-radius: 50px;
    font-size: 1.5rem;
    font-weight: 600;
    background: ${colors.white};
    margin-bottom: 1rem;
  }

  .googleIconCover {
    width: 40px;
    height: 40px;
    margin-right: 8px;
    position: relative;
  }

  .welcome {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 0.5ch;
    @include minDesktopSM {
      font-size: 2rem;
    }
  }

  .imageCover {
    width: calc(100% - 32px);
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
    @include minDesktopSM {
      width: 400px;
    }
  }
`;

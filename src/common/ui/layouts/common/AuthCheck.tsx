import { UserContext } from '@ctx/UserContext';
import EmptyFullPage from '@layouts/common/EmptyFullPage';
import ErrorPages from '@layouts/common/ErrorPages';
import InfoPage from '@layouts/common/InfoPage';
import WaitingPage from '@layouts/common/WaitingPage';
import { TUserCategory } from '@ts/common';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';

type TProps = {
  children: React.ReactElement;
  route: TUserCategory | 'info' | 'login' | 'home';
};
function AuthCheck({ children, route = 'pro' }: TProps): JSX.Element {
  const { isCookieAvailable, loading, signIn } = useContext(UserContext);
  const [cookies] = useCookies(['uData']);
  const [init, setInit] = useState(true);
  const router = useRouter();
  const uType = cookies?.uData?.type;

  useEffect(() => {
    setInit(false);
  }, []);

  if (init) {
    return <EmptyFullPage />; // For all pages wait until page get initialized
  }

  if (route !== 'login' && loading) {
    return <WaitingPage />; // login has separate waiting page so loading for other pages
  }

  if (route === 'login') {
    if (isCookieAvailable && !!uType && uType === 'admin') {
      router.push(`/user`);
    } else if (isCookieAvailable && uType === null) {
      return (
        <InfoPage
          btnTxt='Try Again'
          message1='Your account will be supervised soon!'
          message2='Try to login later'
          onClick={() => {
            signIn();
          }}
        />
      );
    } else {
      return children;
    }
  }

  if (isCookieAvailable && route === uType) {
    return children;
  }
  return <ErrorPages btnTxt='Login' message='Authentication Failed. Try to sign in' url='/login' />;
}

export default AuthCheck;

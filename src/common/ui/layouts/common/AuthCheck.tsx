import { UserContext } from '@ctx/UserContext';
import ErrorPages from '@layouts/common/ErrorPages';
import { TRoute } from '@ts/common';
import React, { useContext } from 'react';

type TProps = {
  children: React.ReactElement;
  route: TRoute;
};
function AuthCheck({ children, route }: TProps): JSX.Element {
  const { uData } = useContext(UserContext);
  if (
    (route === 'admin' && !!uData && uData.role === 'admin') ||
    (route === 'supplier' && !!uData && uData.role === 'supplier')
  ) {
    return children;
  }
  return <ErrorPages btnTxt='Login' message='Authentication Failed. Try to sign in' url='/login' />;
}

export default AuthCheck;

import { TUserLoginSchema } from '@schemas/userSchema';
import { TUData } from '@ts/common';
import { useRouter } from 'next/router';
import React, { useEffect, useMemo, useState } from 'react';
import { useCookies } from 'react-cookie';
import toast from 'react-hot-toast';

type TProps = {
  children: JSX.Element;
};

// 🔥🔥🔥 Init Functions 🔥🔥🔥
interface IContextFn {
  signOut: (navigate: boolean) => void;
  signIn: (data: TUserLoginSchema) => void;
  userRoutes: (path: string) => void;
}

const initFn: IContextFn = {
  signOut: navigate => null,
  signIn: () => null,
  userRoutes: () => null,
};

// 🔥🔥🔥 Init Values 🔥🔥🔥
interface IContextVal {
  loading: boolean;
  domain: string | undefined;
  uData: TUData | null;
}

const initVal: IContextVal = {
  loading: false,
  domain: process.env.ENV_DOMAIN,
  uData: null,
};

interface IContext extends IContextFn, IContextVal {}
export const UserContext = React.createContext<IContext>({ ...initFn, ...initVal });
// ----------------------------------------
export function UserContextProvider({ children }: TProps): React.ReactElement {
  const [loading, setLoading] = useState(initVal.loading);
  const [cookies, setCookie, removeCookie] = useCookies(['uData']);
  const [uData, setUData] = useState(initVal.uData);
  const router = useRouter();
  const domain = process.env.ENV === 'dev' ? process.env.ENV_DOMAIN : process.env.PROD_DOMAIN;

  useEffect(() => {
    if (cookies && cookies?.uData && cookies?.uData?.email) {
      setUData(cookies?.uData);
    }
  }, [cookies]);

  const userRoutes = (path: string) => {
    router.push(path);
  };

  const signIn = async (data: TUserLoginSchema) => {
    setLoading(true);
    fetch(`/api/dashboard?type=user_login`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `${process.env.JWT}`,
      },
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          toast.error(res?.message || 'Something Went Wrong. Try again!');
        } else {
          const userData = { ...cookies?.uData, role: res.data.role, email: res.data.email, id: res.data.id };
          setCookie('uData', JSON.stringify(userData), { path: '/' });
          if (res.data.role === 'user') {
            userRoutes('/');
          } else if (res.data.role === 'admin') {
            userRoutes('/dashboard/admin');
          } else if (res.data.role === 'supplier') {
            userRoutes('/dashboard/supplier');
          }
        }
        setLoading(false);
      })
      .catch(res => {
        toast.error(res?.message || 'Something Went Wrong. Try again!');
        setLoading(false);
      });
  };

  const signOut = async (navigate: boolean) => {
    setLoading(false);
    removeCookie('uData', { path: '/' });
    setUData(initVal.uData);
    if (navigate) {
      userRoutes('/login');
    }
  };

  // ----------------------------------------
  // 🔥🔥🔥 Ctx Functions 🔥🔥🔥
  const contextFns = {
    userRoutes,
    signOut,
    signIn,
  };

  // 🔥🔥🔥 Ctx Values 🔥🔥🔥
  const ctxValues1 = useMemo(
    () => ({
      domain,
    }),
    [domain]
  );

  const ctxValues2 = useMemo(
    () => ({
      loading,
    }),
    [loading]
  );

  const ctxValues3 = useMemo(
    () => ({
      uData,
    }),
    [uData]
  );

  return (
    <UserContext.Provider
      value={{
        ...ctxValues1,
        ...ctxValues2,
        ...ctxValues3,
        ...contextFns,
      }}>
      {children}
    </UserContext.Provider>
  );
}

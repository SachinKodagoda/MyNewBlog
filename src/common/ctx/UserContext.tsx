import {
  auth,
  getUserWithUserId,
  registerUser,
  signInWithGoogle,
  signOutWithGoogle,
  updateUserType,
} from '@lib/firebase';
import { TUserCategory } from '@ts/common';
import { onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'next/router';
import React, { useEffect, useMemo, useState } from 'react';
import { useCookies } from 'react-cookie';
import toast from 'react-hot-toast';

type TProps = {
  children: JSX.Element;
};

interface IContext {
  loading: boolean;
  isCookieAvailable: boolean;
  signOut: () => void;
  signIn: () => void;
  userRoutes: (path: string) => void;
  registerGoogleUser: (username: string, pass: string) => Promise<void | null>;
  setUserType: (type: TUserCategory) => Promise<void | null>;
  domain: string | undefined;
}

const initContext: IContext = {
  loading: false,
  isCookieAvailable: false,
  signOut: () => null,
  signIn: () => null,
  userRoutes: () => null,
  registerGoogleUser: async () => null,
  setUserType: async () => null,
  domain: process.env.ENV_DOMAIN,
};

export const UserContext = React.createContext<IContext>(initContext);

export function UserContextProvider({ children }: TProps): React.ReactElement {
  const [loading, setLoading] = useState(initContext.loading);
  const [cookies, setCookie, removeCookie] = useCookies(['uData']);
  const [isCookieAvailable, setIsCookieAvailable] = useState(false);
  const router = useRouter();
  const domain = process.env.ENV === 'dev' ? process.env.ENV_DOMAIN : process.env.PROD_DOMAIN;

  useEffect(() => {
    if (cookies && !!cookies?.uData && !!cookies?.uData?.uid) {
      setIsCookieAvailable(true); // UID set up complete
    }
  }, [cookies]);

  // Register User to Firebase -->
  const registerGoogleUser = async (username: string, pass: string) => {
    setLoading(true);
    const tempUserData = { ...cookies?.uData, username, pass };
    const isOkay = await registerUser(tempUserData);
    if (isOkay) {
      router.push('/login');
    } else {
      toast.error('Something went wrong');
    }
    setLoading(false);
  };

  const userRoutes = (path: string) => {
    router.push(path);
  };

  // Initialize UserData -->
  const setUserDataFromGoogle = async () => {
    onAuthStateChanged(auth, async user => {
      if (!user) {
        removeCookie('uData', { path: '/' });
        return;
      }
      const response = await getUserWithUserId(user.uid);
      if (response.errorCode === 0) {
        setCookie('uData', JSON.stringify(response.data), { path: '/' });
      } else if (response.errorCode === 1) {
        toast.error(response.errorMsg);
      } else if (response.errorCode === 2) {
        setCookie(
          'uData',
          JSON.stringify({
            ...response.data,
            uid: user.uid,
            photoURL: user.photoURL,
            email: user.email,
            displayName: user.displayName,
          }),
          { path: '/' }
        );
        router.push('/register');
      }
    });
  };

  // Google Sign In -->
  const signIn = async () => {
    setLoading(true);
    const status = await signInWithGoogle();
    if (status) {
      try {
        await setUserDataFromGoogle();
      } catch (error) {
        toast.error('Error in sign in. Try again');
      }
    } else {
      toast.error('Error in sign in. Try again');
    }
    setLoading(false);
  };

  // Google Sign Out -->
  const signOut = async () => {
    setLoading(true);
    const status = await signOutWithGoogle();
    if (status) {
      removeCookie('uData', { path: '/' });
      setIsCookieAvailable(false);
      router.push('/login');
    }
    setLoading(false);
  };

  // Set User Type -->
  const setUserType = async (type: TUserCategory) => {
    setLoading(true);
    if (`${cookies?.uData?.uid}`.trim().length > 0 && type !== 'admin') {
      const response = await updateUserType(cookies?.uData?.uid, type);
      if (response) {
        const userData = { ...cookies?.uData, type };
        setCookie('uData', JSON.stringify(userData), { path: '/' });
        if (type === 'tutor') {
          router.push('/success?from=info&to=tutor');
        }
        if (type === 'pro') {
          router.push('/success?from=info&to=pro');
        }
        if (type === 'student') {
          router.push('/success?from=info&to=student');
        }
      } else {
        toast.error('Something went wrong');
      }
    } else {
      toast.error('Something went wrong');
    }
    setLoading(false);
  };

  const contextValue = useMemo(
    () => ({
      loading,
      isCookieAvailable,
      signOut,
      signIn,
      userRoutes,
      registerGoogleUser,
      setUserType,
      domain,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [loading, isCookieAvailable]
  );

  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
}

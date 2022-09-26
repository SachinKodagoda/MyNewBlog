/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import { ThemeProvider as DarkLightThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Router } from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { Toaster } from 'react-hot-toast';

import { UserContextProvider } from '@ctx/UserContext';
import '@styles/globals.css';

NProgress.configure({ showSpinner: false });
Router.events.on('routeChangeStart', () => {
  NProgress.start();
});

Router.events.on('routeChangeComplete', () => {
  NProgress.done();
});

Router.events.on('routeChangeError', () => {
  NProgress.done();
});

function MyApp({ Component, pageProps }: AppProps): React.ReactElement {
  return (
    <>
      <Head>
        <meta charSet='UTF-8' />
        <title>{process.env.APP_NAME}</title>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='author' content='Duminda Kodagoda' />
        <meta name='keywords' content='Davinci Arts' />
        <meta name='description' content='Art for everyone' />
        <meta name='theme-color' content='#000' />
        <meta name='apple-mobile-web-app-status-bar-style' content='#000' />
      </Head>
      <DarkLightThemeProvider>
        <UserContextProvider>
          <>
            <Component {...pageProps} />
            <Toaster position='bottom-right' />
          </>
        </UserContextProvider>
      </DarkLightThemeProvider>
    </>
  );
}
export default MyApp;

/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import { NextUIProvider } from '@nextui-org/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';

// import '@styles/globals.css';

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
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </>
  );
}
export default MyApp;

import './style.css';
import '@fontsource/open-sans';

import { CacheProvider, EmotionCache } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { Fragment } from 'react';

import MainLayout from '../components/layout/main-layout';
import createEmotionCache from '../helpers/createEmotionCache';
import theme from '../helpers/theme';
import PageHeaders from '../components/misc/page-headers';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <PageHeaders
        title='IoT Engineer Maxime Clement'
        description='Presentation of Maxime Clement, Internet of Things (IoT) Engineer, focused on cloud technologies. Portfolio Home Page FullStack Backend Frontend IoT'
        page=''
        imageUrl='image?url=%2Fimages%2Fhome%2Fmax_pict.jpg&w=1920&q=80'
      />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ThemeProvider>
    </CacheProvider>
  );
}

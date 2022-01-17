import { CacheProvider, EmotionCache } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { Fragment } from 'react';
import MainLayout from '../components/main-layout';

import createEmotionCache from '../src/createEmotionCache';
import theme from '../src/theme';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

function metaTags() {
  return (
    <Fragment>
      <meta name='viewport' content='initial-scale=1, width=device-width' />
      <meta
        name='description'
        content='Hello ! I am Maxime Clement an Engineer specialized in IoT solutions from writing fullstack applications to the firmware of embedded devices that I sometimes design !'
      />
      <meta name='robots' content='index, follow' />

      <meta property='og:title' content='Maxime Clement IoT' />
      <meta
        property='og:image'
        content='//https://media-exp1.licdn.com/dms/image/C4E03AQE9_bJfgLo0pQ/profile-displayphoto-shrink_800_800/0/1563533808553?e=1648080000&v=beta&t=wjbSV3122pV5jOEvCEdcNp7zTqpY-Yu9nRXcu2_ywpQ'
      />
      <meta
        property='og:description'
        content='Hello ! I am Maxime Clement an Engineer specialized in IoT solutions !'
      />
      <meta property='og:url' content='//www.maximeclement.com' />
    </Fragment>
  );
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Maxime Clement IoT</title>
        {metaTags()}
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ThemeProvider>
    </CacheProvider>
  );
}

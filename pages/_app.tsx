import '@mantine/core/styles.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';
import { appWithTranslation } from 'next-i18next';
import { theme } from '../theme';
import Header from '@/components/Header/header';
import Footer from '@/components/footer/Footer';

function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider theme={theme}>
      <Head>
        <title>Chronotys</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        <link rel="shortcut icon" href="/favicon1.svg" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </MantineProvider>
  );
}

export default appWithTranslation(App);

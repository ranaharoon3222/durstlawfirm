('use client;');

import React, { useEffect } from 'react';
import Footer from '@/components/footer/Footer';
import '@/styles/globals.css';
import localFont from 'next/font/local';
import Header from '@/commons/Header';
import NextNProgress from 'nextjs-progressbar';

const calluna = localFont({
  src: '../../public/fonts/Calluna-Regular.woff2',
  variable: '--calluna',
});

export default function App({ Component, pageProps }) {
  useEffect(() => {
    import('preline');
  }, []);

  return (
    <>
      <div className={calluna.variable}>
        <NextNProgress
          color='#E54A35'
          startPosition={0.3}
          stopDelayMs={200}
          height={4}
          showOnShallow={true}
        />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}

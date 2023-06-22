('use client;');

import React, { useEffect } from 'react';
import Footer from '@/components/footer/Footer';
import '@/styles/globals.css';
import localFont from 'next/font/local';
import Header from '@/commons/Header';

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
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}

import React, { FC } from 'react';
import { AppProps } from 'next/app';
import '../client/styles/globals.css';

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default App;

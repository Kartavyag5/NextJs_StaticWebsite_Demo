import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { MDXProvider } from '@mdx-js/react';
import React, { useEffect } from 'react';
import '../styles/global.scss';

import MDXComponents from '../components/mdx';
import Navbar from '../components/navbar';

function MyApp({ Component, pageProps }) {
  const theme = extendTheme({
    colors: {
      brand: '#ff851b',
      link: '#1890ff',
      project: '#0275d8',
      blog: 'tomato',
      textColor: 'black',
      bgColor: 'white'
    },
    fonts: {
      body: 'Titillium Web'
    },
    breakpoints: {
      xs: '0px',
      sm: '320px',
      sm2: '575px',
      md: '769px',
      lg: '992px',
      xl: '1200px'
    }
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <MDXProvider components={MDXComponents}>
        <Navbar {...pageProps} />
        <Component {...pageProps} />
      </MDXProvider>
    </ChakraProvider>
  );
}
export default MyApp;

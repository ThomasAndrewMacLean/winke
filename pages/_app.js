import React, { useEffect } from 'react';
import '../styles/style.css';
import { ThemeProvider } from 'styled-components';

import { theme } from '../styles/theme';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    const setResizeVariables = () => {
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    window.addEventListener('resize', setResizeVariables);
    setResizeVariables();
    document.body.style.fontFamily = `Barlow, sans-serif`;
  }, []);
  return (
    // <PictureContext.Provider value={pics}>
    //   <TranslationContext.Provider value={translations || []}>
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
    //   </TranslationContext.Provider>{' '}
    // </PictureContext.Provider>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//     const url =
//       'https://europe-west1-thomasmaclean.cloudfunctions.net/getDataAirtable';
//     const dataFromAirtableJson = await fetch(url, {
//       method: 'POST',
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ airtableApp: process.env.AIRTABLE_APP }),
//     });
//     const dataFromAirtable = await dataFromAirtableJson.json();

//     // calls page's `getInitialProps` and fills `appProps.pageProps`
//     const appProps = await App.getInitialProps(appContext);

//     return {
//       ...appProps,
//       ...dataFromAirtable,
//     };

// };

export default MyApp;

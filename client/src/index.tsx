import React from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';

import App from './App';

import theme from './style/theme';
import { GlobalStyle } from './style/globalStyle';

const rootEl = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </ThemeProvider>
  </React.StrictMode>,
  rootEl
);

import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './Styles/theme';
import { GlobalStyle } from './Styles/global-style';

import { Repositories } from './Pages/Repositories';
import { RepositoryContextProvider } from './Context/RepositoryContext/index';
import { SpinnerContainer } from './Components/Spinner';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <RepositoryContextProvider>
        <SpinnerContainer />
        <Repositories />
      </RepositoryContextProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
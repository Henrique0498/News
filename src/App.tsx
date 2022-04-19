import React from 'react';
import { ThemeProvider } from 'styled-components'

import GlobalStyle from './styles/global'
import theme from './styles/theme'

import Home from './templates/Home';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Home/>
        <GlobalStyle />
      </div>
    </ThemeProvider>
  );
}

export default App;

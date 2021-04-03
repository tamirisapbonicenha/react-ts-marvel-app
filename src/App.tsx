import React from 'react';
import { ThemeProvider, Container } from '@material-ui/core';
import theme from './theme';
import { Header } from './components';
import { RenderRoutes } from './routes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Container maxWidth="lg">
        <RenderRoutes />
      </Container>
    </ThemeProvider>
  );
}

export default App;

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react';
import App from './App';
import globalTheme from './configs/globalTheme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <ChakraProvider theme={globalTheme}>
    <ColorModeProvider
      options={{
        initialColorMode: 'light',
        useSystemColorMode: false
      }}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ColorModeProvider>
  </ChakraProvider>
  // </React.StrictMode>,
);

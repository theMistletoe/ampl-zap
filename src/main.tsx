import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import '@aws-amplify/ui-react/styles.css';
import { ThemeProvider } from '@aws-amplify/ui-react';

export const myTheme = {
  name: 'my-theme',
  tokens: {
    colors: {
      font: {
        primary: { value: 'red' },
      },
    },
  },
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={myTheme} nonce="rAnd0m">
      <App />
    </ThemeProvider>
  </StrictMode>,
)

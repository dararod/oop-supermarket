import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './components/App';

import './index.css';
import { BasketContextProvider } from './context/BasketContext';

const root = ReactDOM.createRoot(document.getElementById('root') as Element);

root.render(
  <React.StrictMode>
    <BasketContextProvider>
      <App />
    </BasketContextProvider>
  </React.StrictMode>
);

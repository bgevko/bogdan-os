import React from 'react';
import ReactDOM from 'react-dom/client';

import App from '@/app';
import '@/globals.css';

ReactDOM.createRoot(document.querySelector('#root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

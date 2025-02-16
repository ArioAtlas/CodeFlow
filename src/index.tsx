import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HashRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
    <App />
  </HashRouter>
);

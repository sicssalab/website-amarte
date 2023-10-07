import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import StoreProvider from "./store/StoreProvider";
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from "react-router-dom";
const helmetContext = {};

ReactDOM.hydrate(
  <HelmetProvider context={helmetContext}>
    <StoreProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StoreProvider>
  </HelmetProvider>
  ,document.getElementById('root')
);

import React from 'react'
import ReactDOM from 'react-dom/client'
import { NextUIProvider } from '@nextui-org/react'
import App from './App.jsx'
import './index.css'
import { HashRouter as Router } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <HelmetProvider>
    <NextUIProvider>
      <Router>
        <App />
      </Router>
    </NextUIProvider>
  </HelmetProvider>
  // </React.StrictMode>
);

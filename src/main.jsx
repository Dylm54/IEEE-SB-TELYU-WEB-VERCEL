import React from 'react'
import ReactDOM from 'react-dom/client'
import { NextUIProvider } from '@nextui-org/react'
import App from './App.jsx'
import './index.css'
import { HashRouter as Router } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
    <NextUIProvider>
      <Router>
        <App />
      </Router>
    </NextUIProvider>
  // </React.StrictMode>
);

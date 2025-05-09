import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import AppContextProvider from './context/AppContext.jsx'; // Import the provider component

const rootElement = document.getElementById('root');

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <BrowserRouter>
        <AppContextProvider>
          <App />
        </AppContextProvider>
      </BrowserRouter>
    </StrictMode>
  );
} else {
  console.error("No root element found. Please ensure there's a <div id='root'></div> in your index.html.");
}

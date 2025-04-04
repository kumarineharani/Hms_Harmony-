import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { AppContext } from './context/AppContext.jsx';

const rootElement = document.getElementById('root');

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <BrowserRouter>
        <AppContext>
            <App />
        </AppContext>

      </BrowserRouter>
    </StrictMode>
  );
} else {
  console.error("No root element found. Please ensure there's a <div id='root'></div> in your index.html.");
}

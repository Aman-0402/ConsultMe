import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import './index.css'
import App from './App.jsx'

import "./styles/reset.css";
import "./styles/variables.css";
import "./styles/animations.css";
import "./styles/utilities.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/ConsultMe">
      <App />
    </BrowserRouter>
  </StrictMode>
);

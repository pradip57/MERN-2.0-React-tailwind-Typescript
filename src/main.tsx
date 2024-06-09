// src/main.tsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LandingPage from './pages/landing.page';


const htmlRoot: HTMLElement = document.getElementById('root') as HTMLElement;

const RootElem = ReactDOM.createRoot(htmlRoot);

RootElem.render(
  <React.StrictMode>
    <LandingPage />
  </React.StrictMode>
);

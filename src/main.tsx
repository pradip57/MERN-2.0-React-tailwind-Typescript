// src/main.tsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LandingPage1 from './pages/landing/landing.page1';
// import LandingPage from './pages/landing/landing.page';


const htmlRoot: HTMLElement = document.getElementById('root') as HTMLElement;

const RootElem = ReactDOM.createRoot(htmlRoot);

RootElem.render(
  <React.StrictMode>
    {/* <LandingPage name="Pradip" email="dellpidarp67@gmail.com"></LandingPage> */}
    {/* <LandingPage  /> */}
    <LandingPage1></LandingPage1>
  </React.StrictMode>
);

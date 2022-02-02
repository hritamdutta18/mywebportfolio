import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import App from './App';
import '../node_modules/normalize.css'
import { hydrate, render } from "react-dom"


const APP= (
  <React.StrictMode>    
    <BrowserRouter>
      <App />
    </BrowserRouter>    
  </React.StrictMode>
);
 
const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) 
  hydrate(APP, rootElement);
else 
  render(APP, rootElement);
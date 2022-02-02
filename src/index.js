import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import '../node_modules/normalize.css'
import { hydrate, render } from "react-dom"

const APP= ( 
  <BrowserRouter>
    <App />
  </BrowserRouter>   
);
 
const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) 
  hydrate(APP, rootElement);
else 
  render(APP, rootElement);
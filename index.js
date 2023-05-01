import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import About from './components/aboutus.js'
import { BrowserRouter, Routes, Route } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}>
        <Route index element={<App />} />
          <Route path="/about" element={<About />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);    
import React from 'react';
import './globalFonts.css';
import GlobalStyles from './globalStyles';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home';

function App() {
  return (
    <div>
      <GlobalStyles/>
      <Home/>
    </div>
  );
}

export default App;

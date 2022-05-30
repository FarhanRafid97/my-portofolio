import React, { useEffect, useState } from 'react';

import backgroundIcon from './backgroundIcon';
import './App.css';
import './bgIcon.css';

import Background from './Background';
import Home from './components/Home/Home';
import Biodata from './components/biodata/Biodata';
const App = () => {
  return (
    <>
      <div className="app">
        <Background />
        <Biodata />
        <Home />
      </div>
    </>
  );
};

export default App;

import React from 'react';
import './App.css';

import Main from './app/Main'
import { BrowserRouter as HashRouter } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <HashRouter>
          <Main />
        </HashRouter>
    </div>
  );
}

export default App;

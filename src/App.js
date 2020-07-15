import React from 'react';
import './App.css';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home';


function App() {
  return (
    <Router>
      <div className="">
        <h1 style={{textAlign: 'center'}}>Routing Kata</h1>
        <Home />
      </div>
    </Router>
  );
}

export default App;

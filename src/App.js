import React from 'react';
import './App.css';

import Home from './components/Home';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Topics from './components/Topics';


function App() {
  return (
      <div className="">
        <Router>
          <Route path="/" exact component={Home} />
          <Route path="/topics" component={Topics} />
        </Router>
      </div>
  );
}

export default App;

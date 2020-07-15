import React from 'react';
import './App.css';

import Home from './components/Home';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Topics from './components/Topics';
import Topic from './components/Topic';


function App() {
  return (
      <div className="">
        <Router>
          <Route path="/" exact component={Home} />
          <Route path="/topics" exact component={Topics} />
          <Route path="/topics/:id" component={Topic}/>
        </Router>
      </div>
  );
}

export default App;

import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Routing Kata</h1>
      <ol>
        <li>Install react-router-dom</li>
        <li>Create Home Component add a simple title and two links 1.Home 2.Topics</li>
        <li>Create 2 Components Topics and Topic</li>
        <li>Links in Home component should take you to Topics</li>
        <li>In Topics add 3 list elements each one with a different topic name and use a Switch (router) to handle the route</li>
        <li>Add Topic as a sub component for Topics and add a paragraph that receives the topic id and shows it to the screen </li>
        <li>All link interactions have to use routing. and be sure that the pages don't reload everytime you click a link (there's a function in Router to prevent that) </li>
      </ol>
    </div>
  );
}

export default App;

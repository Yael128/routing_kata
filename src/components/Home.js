import React from 'react';
import {Link} from 'react-router-dom';

function Home() {
    return (
        <div>
            <h1>Homie</h1>
            <Link to="/home" >
              <li>Home</li>
            </Link>
            <Link to="/topics" >
              <li>Topics</li>
            </Link>        
        </div>
    );
}

export default Home;
import React from 'react';
import {Link} from 'react-router-dom';

function Home() {
    return (
        <div>
            <h1>Homie</h1>
            <Link>
              <li>Home</li>
            </Link>
            <Link>
              <li>Topics</li>
            </Link>
            
        </div>
    );
}

export default Home;
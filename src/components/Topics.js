import React from 'react';
import { Link } from 'react-router-dom';

function Topics() {
    return (
        <div>
            <h1>Topics</h1>
            <ul style={{width: '150px'}}>
                <Link to="/topics/movies"><li>Movies</li></Link>
                <Link to="/topics/music"><li>Music</li></Link>
                <Link to="/topics/games"><li>Video Games</li></Link>
            </ul>
        </div>
    );
}

export default Topics;
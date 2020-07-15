import React from 'react';

function Topic({match}) {
    console.log(match)
    return (
        <div>
            <p>{match.params.id}</p>
        </div>
    );
}

export default Topic;
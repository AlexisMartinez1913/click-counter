import React from 'react';
import '../styles/Counter.css';

function Counter({ numberClick }) {


    return (
        <div className='counter'>
            {numberClick}
        </div>
    )
}

export default Counter;

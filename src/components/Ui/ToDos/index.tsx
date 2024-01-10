import React from 'react';
import './style.scss';

interface State {
    state: object;
}

const ToDos: React.FC<State> = ({ state }) => {
    return (
        <div className='todo2'>
            <input type="checkbox" />
            <p>{state.title}</p>
        </div>
    )
}

export default ToDos;
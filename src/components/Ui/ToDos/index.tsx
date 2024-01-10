import React from 'react';
import './style.scss';

interface State {
    title: string;
}

const ToDos: React.FC<{ state: State }> = ({ state: { title } }) => {
    return (
        <div className='todo2'>
            <input type="checkbox" />
            <p>{title}</p>
        </div>
    )
}

export default ToDos;
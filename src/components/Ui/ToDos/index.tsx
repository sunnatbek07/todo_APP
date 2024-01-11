import React from 'react';
import './style.scss';

interface ToDoProps {
    state: { title: string; completed: boolean };
    onToggle: () => void;
}

const ToDos: React.FC<ToDoProps> = ({ state, onToggle }) => {
    return (
        <div className='todo-item'>
            <input
                type='checkbox'
                checked={state.completed}
                onChange={onToggle}
            />
            <span style={{ textDecoration: state.completed ? 'line-through' : 'none' }} title={state.title}>
                {state.title.length > 50 ? state.title.substring(0, 50) + "..." : state.title}
            </span>
        </div>
    );
}

export default ToDos;

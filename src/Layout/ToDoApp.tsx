import React, { useEffect, useState } from 'react';
import InputBtn from '../components/Ui/Input';
import ToDos from '../components/Ui/ToDos';
import './style.scss';

interface ToDo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

const ToDoApp: React.FC = () => {
    const [todos, setTodos] = useState<ToDo[]>([]);

    useEffect(() => {
        const storedTodos = localStorage.getItem('todos');
        storedTodos ? setTodos(JSON.parse(storedTodos)) : null;

    }, [])

    const addTodo = (newTitle: string) => {
        const updatedTodos = [{ userId: 1, id: todos.length + 1, title: newTitle, completed: false }, ...todos];
        setTodos(updatedTodos);

        localStorage.setItem('todos', JSON.stringify(updatedTodos));
    };

    const toggleTodo = (id: number) => {
        const updatedTodos = todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(updatedTodos);
        localStorage.setItem('todos', JSON.stringify(updatedTodos));
    };
    return (
        <>
            <section>
                <div className='todo'>
                    <div className='header'>
                        <h2>To Do App</h2>
                        <InputBtn onAdd={addTodo} />
                    </div>
                    {
                        todos.length > 0 ?
                            <div className='wrapper'>
                                {
                                    todos?.map((todo) => {
                                        return <ToDos key={todo.id} state={todo} onToggle={() => toggleTodo(todo.id)} />
                                    })
                                }
                            </div> :
                            <div className='text-4xl text-[#3F72AF] font-semibold text-center my-5'>
                                You don't have tasks!
                            </div>
                    }
                </div>
            </section>
        </>
    )
}

export default ToDoApp;
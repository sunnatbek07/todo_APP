import React, { useEffect, useState } from 'react';
import InputBtn from '../components/Ui/Input';
import ToDos from '../components/Ui/ToDos';
import './style.scss';
import useTodoApi from '../service/todos/useTodos';

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
        if (storedTodos) {
            setTodos(JSON.parse(storedTodos));
        } else {
            useTodoApi.getAll().then((res) => {
                setTodos(res.data);
            })
        }
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
                    <div className='wrapper'>
                        {
                            todos?.map((todo) => {
                                return <ToDos key={todo.id} state={todo} onToggle={() => toggleTodo(todo.id)} />
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default ToDoApp;
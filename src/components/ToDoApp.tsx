import React, { useEffect, useState } from 'react';
import InputBtn from './Ui/Input';
import ToDos from './Ui/ToDos';
import './style.scss';
import useTodoApi from './../service/todos/useTodos';

interface ToDo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

const ToDoApp: React.FC = () => {
    const [todos, setTodos] = useState<ToDo[]>([]);

    useEffect(() => {
        useTodoApi.getAll().then((res) => {
            setTodos(res.data);
        })
    }, [])
    return (
        <>
            <section>
                <div className='todo'>
                    <div className='header'>
                        <h2>To Do App</h2>
                        <InputBtn />
                    </div>
                    <div className='wrapper'>
                        {
                            todos?.map((todo) => {
                                return <ToDos key={todo.id} state={todo} />
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default ToDoApp;
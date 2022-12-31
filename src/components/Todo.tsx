import { PlusCircle } from 'phosphor-react'

import Clipboard from '../assets/Clipboard.svg';

import styles from './Todo.module.scss';
import { TodoList } from './TodoList';
// import { TodoList } from './TodoList';

import { useState } from 'react';

interface Todo {
    text: string;
    state: 'complete' | 'pending';
}

export function Main() {

    const [todos, setTodos] = useState<Todo[]>([
        {
            text: 'Lorem ipsum dolor sit amet consectet mollitia aliquam error illo ipsum. Beatae, nobis! Iure asperiores hic praesentium.',
            state: 'complete'
        },
        {
            text: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
            state: 'pending'
        }

    ]);
    const [todoText, setTodoText] = useState('');

    async function handleCreateNewTodo() {

        const todoCreate: Todo = {
            text: todoText,
            state: 'pending'
        }

        setTodos([
            ...todos,
            todoCreate
        ])

        setTodoText('');
    }

    // console.log(todos)

    return (
        <>
            <div className={styles.createTodo}>
                <input
                    type="text"
                    placeholder='Adicione uma nova tarefa'
                    value={todoText}
                    onChange={event => setTodoText(event.target.value)}
                />

                <button title='Criar' onClick={handleCreateNewTodo} >
                    Criar
                    <PlusCircle size={20} />
                </button>
            </div>

            <div className={styles.listTodo}>

                <div className={styles.infoTodo}>
                    <p className={styles.textOne} >Tarefas criadas <span> {todos.length} </span> </p>
                    <p className={styles.textTwo} >Concluídas <span> 2 de 5</span> </p>
                </div>

                {
                    todos.length != 0 ?
                        <div className={styles.todoList}>
                            <ul>
                                {todos.map(todo => (
                                    <TodoList
                                        key={todo.text}
                                        text={todo.text}
                                        state={todo.state}
                                    />
                                ))}
                            </ul>
                        </div>
                        :
                        <div className={styles.todoListEmpty}>
                            <div className={styles.todoListEmptyContent}>
                                <div className={styles.divImg}>
                                    <img src={Clipboard} alt="" />
                                </div>
                                <p>
                                    Você ainda não tem tarefas cadastradas
                                    <span>Crie tarefas e organize seus itens a fazer</span>
                                </p>
                            </div>
                        </div>
                }


            </div>

        </>
    )
}
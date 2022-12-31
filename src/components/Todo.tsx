import { PlusCircle } from 'phosphor-react'

import Clipboard from '../assets/Clipboard.svg';

import styles from './Todo.module.scss';
import { TodoList } from './TodoList';

import { useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

interface Todo {
    id: string;
    text: string;
    state: 'complete' | 'pending';
}

export function Main() {

    const [todos, setTodos] = useState<Todo[]>([
        {
            id: uuidv4(),
            text: 'Lorem ipsum dolor sit amet consectet mollitia aliquam error illo ipsum. Beatae, nobis! Iure asperiores hic praesentium.',
            state: 'complete'
        },
        {
            id: uuidv4(),
            text: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
            state: 'pending'
        },
        {
            id: uuidv4(),
            text: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
            state: 'complete'
        }

    ]);
    const [todoText, setTodoText] = useState('');

    let todosComplete = todos.filter(todo => todo.state == 'complete')

    async function handleCreateNewTodo() {

        if(todoText != '') {
            const todoCreate: Todo = {
                id: uuidv4(),
                text: todoText,
                state: 'pending'
            }
    
            setTodos([
                ...todos,
                todoCreate
            ])
    
            setTodoText('');
        }  else {
            alert("A todo deve conter um texto!")
        }

        
    }

    function checkTodo(id: string, state: string) {
        const todoCheck = todos.filter(todo => {
            if( todo.id === id && state == 'complete' ){
                todo.state = 'pending';

            } else if( todo.id === id && state == 'pending' ){
                todo.state = 'complete';

            }
            return todo
        })
     
        setTodos(todoCheck);
    }

    function deleteTodo(id: string) {
        const todoDelete = todos.filter(todo => {
            // Retornando as todo que tenham um id diferente(desigual) da todo selecionada
            return todo.id !== id
        })

        // console.log(todoDelete);
        setTodos(todoDelete);

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
                    <p className={styles.textTwo} >Concluídas <span> {todosComplete.length} de {todos.length}</span> </p>
                </div>

                {
                    todos.length != 0 ?
                        <div className={styles.todoList}>
                            <ul>
                                {todos.map(todo => (
                                    <TodoList
                                        key={todo.id}
                                        id={todo.id}
                                        text={todo.text}
                                        state={todo.state}
                                        onCheckTodo={checkTodo}
                                        onDeleteTodo={deleteTodo}
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
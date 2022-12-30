import { PlusCircle } from 'phosphor-react'


import styles from './Todo.module.scss';


export function Main() {
    return (
        <>
            <div className={styles.createTodo}>
                <input
                    type="text"
                    placeholder='Adicione uma nova tarefa'
                />

                <button title='Criar'>
                    Criar
                    <PlusCircle size={20} />
                </button>
            </div>

            <div className={styles.listTodo}>

                <div className={styles.infoTodo}>
                    <p className={styles.textOne} >Tarefas criadas <span> 0 </span> </p>
                    <p className={styles.textTwo} >Concluídas <span> 2 de 5</span> </p>
                </div>

                <ul>
                    <li>
                        <button>complete</button>
                        Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
                        <button>Delete</button>
                    </li>
                    <li>
                        <button>complete</button>
                        Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
                        <button>Delete</button>
                    </li>
                    <li>
                        <button>complete</button>
                        Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
                        <button>Delete</button>
                    </li>
                    <li>
                        <button>complete</button>
                        Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
                        <button>Delete</button>
                    </li>
                </ul>

            </div>

        </>
    )
}
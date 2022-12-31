import { Trash } from 'phosphor-react';
import { Circle } from 'phosphor-react';
import { CheckCircle } from 'phosphor-react';

import styles from './TodoList.module.scss';

interface Todo {
    text: string;
    state: 'complete' | 'pending';
}

export function TodoList({ text, state }: Todo) {

    return (
        <>
            <li>
                <button className={state == 'complete' ? styles.checkButton : styles.circleButton }>
                    {state == 'complete' ? <CheckCircle weight="fill" /> : <Circle />} 
                </button>

                <p>{text}</p>
                
                <button className={styles.trashButton}><Trash /></button>
            </li>


            {/* <li>
                <button className={styles.checkButton}><CheckCircle weight="fill" /></button>
                <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>

                <button className={styles.trashButton}><Trash /></button>
            </li>
            <li>
                <button className={styles.circleButton}><Circle /></button>
                <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>

                <button className={styles.trashButton}><Trash /></button>
            </li>
            <li>
                <button className={styles.checkButton}><CheckCircle weight="fill" /></button>
                <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>

                <button className={styles.trashButton}><Trash /></button>
            </li> */}
        </>

    )
}
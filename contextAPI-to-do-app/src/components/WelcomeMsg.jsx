import styles from './WelcomeMsg.module.css'
import { ToDoItemsContext } from '../store/todoitems-store'
import { useContext } from 'react'

const WelcomeMsg = () => {
    // const contextObj = useContext(ToDoItemsContext)
    // const toDoItems = contextObj.todoItemss
    const {todoItemss} = useContext(ToDoItemsContext)
    return todoItemss.length === 0 && <p className={styles.welcomeMsg}>Enjoy your day😉</p>
}

export default WelcomeMsg
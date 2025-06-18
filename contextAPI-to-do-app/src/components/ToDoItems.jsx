import ToDoItem from "./ToDoItem"
import styles from "./ToDoItems.module.css"
import { ToDoItemsContext } from "../store/todoitems-store"
import { useContext } from "react"

const ToDoItems = () => {
    const {todoItemss} = useContext(ToDoItemsContext)
    return <>
    <div className={styles.itemsContainer}>
        {todoItemss.map((val) => {
            return <ToDoItem key={val.name} todoName={val.name} todoDate={val.dueDate}/>
        })}
    </div>
    </>
}
export default ToDoItems
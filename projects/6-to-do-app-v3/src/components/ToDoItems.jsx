import ToDoItem from "./ToDoItem"
import styles from "./ToDoItems.module.css"

const ToDoItems = ({toDoItems}) => {
    return <>
    <div className={styles.itemsContainer}>
        {toDoItems.map((val) => {
            return <>
                <ToDoItem todoName={val.name} todoDate={val.dueDate}/>
            </>
        })}
    </div>
    </>
}
export default ToDoItems
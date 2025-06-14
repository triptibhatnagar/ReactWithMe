import ToDoItem from "./ToDoItem"
import styles from "./ToDoItems.module.css"

const ToDoItems = ({toDoItems, onDeleteClick}) => {
    return <>
    <div className={styles.itemsContainer}>
        {toDoItems.map((val) => {
            return <ToDoItem key={val.name} todoName={val.name} todoDate={val.dueDate} onDeleteClick={onDeleteClick}/>
        })}
    </div>
    </>
}
export default ToDoItems
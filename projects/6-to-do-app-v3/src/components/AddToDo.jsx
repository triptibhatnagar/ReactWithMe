import { useState } from "react"
import styles from "./AddToDo.module.css"

function AddToDo({handleNewItem}) {
    const [todoName, setToDoName] = useState()
    const [todoDate, setToDoDate] = useState()

    const handleNameChange= (e) => {
        setToDoName(e.target.value)
    }
    const handleDateChange= (e) => {
        setToDoDate(e.target.value)
    }
    const handleAddBtnClicked = () => {
        handleNewItem(todoName, todoDate)
        setToDoName("")
        setToDoDate("")
    }
    return <>
    <div className="container text-center">
        <div className="row todo-row">
            <div className="col-6">
            <input className={styles.inputContainer} type="text" placeholder="Enter ToDo here" value={todoName} onChange={handleNameChange}/>
            </div>
            <div className="col-3">
            <input className={styles.inputContainer} type="date" value={todoDate} onChange={handleDateChange}/>
            </div>
            <div className="col-2">
            <button type="button" className="btn btn-success todo-btn" onClick={handleAddBtnClicked}>Add</button>
            </div>
        </div>
    </div>
    </>
}
export default AddToDo
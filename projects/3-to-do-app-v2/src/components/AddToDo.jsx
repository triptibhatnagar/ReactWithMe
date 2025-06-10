import styles from "./AddToDo.module.css"

function AddToDo() {
    return <>
    <div className="container text-center">
        <div className="row todo-row">
            <div className="col-6">
            <input className={styles.inputContainer} type="text" placeholder="Enter ToDo here"/>
            </div>
            <div className="col-3">
            <input className={styles.inputContainer} type="date"/>
            </div>
            <div className="col-2">
            <button type="button" className="btn btn-success todo-btn">Add</button>
            </div>
        </div>
    </div>
    </>
}
export default AddToDo
import { RiDeleteBin5Line } from "react-icons/ri";


function ToDoItem({todoName, todoDate,onDeleteClick}) {
    return <>
        <div className="container">
            <div className="row todo-row">
                <div className="col-6 ">{todoName}</div>
                <div className="col-3 ">{todoDate}</div>
                <div className="col-2 ">
                <button type="button" className="btn btn-danger todo-btn" onClick={() => onDeleteClick(todoName)}><RiDeleteBin5Line /></button>
                </div>
            </div>
        </div>
    </>
}
export default ToDoItem
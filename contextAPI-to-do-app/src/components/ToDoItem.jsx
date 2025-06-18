import { useContext } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { ToDoItemsContext } from "../store/todoitems-store";


function ToDoItem({todoName, todoDate}) {
    const {deleteItem} = useContext(ToDoItemsContext)
    return <>
        <div className="container">
            <div className="row todo-row">
                <div className="col-6 ">{todoName}</div>
                <div className="col-3 ">{todoDate}</div>
                <div className="col-2 ">
                <button type="button" className="btn btn-danger todo-btn" onClick={() => deleteItem(todoName)}><RiDeleteBin5Line /></button>
                </div>
            </div>
        </div>
    </>
}
export default ToDoItem
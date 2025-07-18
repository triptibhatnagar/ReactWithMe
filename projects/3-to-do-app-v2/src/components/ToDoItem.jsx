function ToDoItem({todoName, todoDate}) {
    return <>
        <div className="container">
            <div className="row todo-row">
                <div className="col-6 ">{todoName}</div>
                <div className="col-3 ">{todoDate}</div>
                <div className="col-2 ">
                <button type="button" className="btn btn-danger todo-btn">Delete</button>
                </div>
            </div>
        </div>
    </>
}
export default ToDoItem
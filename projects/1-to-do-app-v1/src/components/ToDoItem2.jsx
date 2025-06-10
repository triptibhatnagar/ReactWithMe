function ToDoItem2() {
    let todoName = 'Go to College'
    let todoDate = '4/10/2023'

    return <>
        <div className="container">
            <div className="row todo-row">
                <div className="col-6">Go to College</div>
                <div className="col-3">4/10/2023</div>
                <div className="col-2">
                <button type="button" className="btn btn-danger todo-btn">Delete</button>
                </div>
            </div>
        </div>
    </>
}
export default ToDoItem2
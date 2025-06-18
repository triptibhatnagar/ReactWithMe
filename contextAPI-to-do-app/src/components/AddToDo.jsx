import { useRef, useContext } from "react";
import styles from "./AddToDo.module.css";
// import { BiMessageAdd } from 'react-icons/bi'
import { MdAddCircleOutline } from "react-icons/md";
import { ToDoItemsContext } from "../store/todoitems-store";

function AddToDo({ handleNewItem }) {
  const {addNewItem} = useContext(ToDoItemsContext)
  // const [todoName, setToDoName] = useState("");
  // const [todoDate, setToDoDate] = useState("");
  const todoNameElem = useRef() 
  const todoDateElem = useRef() 

  // const handleNameChange = (e) => {
  //   setToDoName(e.target.value);
  //   noOfUpdates.current += 1;
  // };
  // const handleDateChange = (e) => {
  //   setToDoDate(e.target.value);
  //   console.log(`NO of updates are ${noOfUpdates.current}`)
  // };
  const handleAddBtnClicked = (e) => {
    //   console.log(e)
      e.preventDefault()
      let todoName = todoNameElem.current.value
      let dueDate = todoDateElem.current.value
      console.log(`${todoName} due on: ${dueDate}`)
      addNewItem(todoName, dueDate);
      todoNameElem.current.value = ""
      todoDateElem.current.value = ""
      // setToDoName("");
      // setToDoDate("");
  };
  return (
    <>
      <div className="container text-center">
        {/* <div className="row todo-row">
            <div className="col-6">
            <input className={styles.inputContainer} type="text" placeholder="Enter ToDo here" value={todoName} onChange={handleNameChange}/>
            </div>
            <div className="col-3">
            <input className={styles.inputContainer} type="date" value={todoDate} onChange={handleDateChange}/>
            </div>
            <div className="col-2">
            <button type="button" className="btn btn-success todo-btn" onClick={handleAddBtnClicked}><MdAddCircleOutline/></button>
            
            </div>
        </div> */}
        <form className="row todo-row" onSubmit={handleAddBtnClicked}>
          <div className="col-6">
            <input
              className={styles.inputContainer}
              type="text"
              placeholder="Enter ToDo here"
              // value={todoName}
              // onChange={handleNameChange}
              ref={todoNameElem}
            />
          </div>
          <div className="col-3">
            <input
              className={styles.inputContainer}
              type="date"
              // value={todoDate}
              // onChange={handleDateChange}
              ref={todoDateElem}
            />
          </div>
          <div className="col-2">
            <button 
              className="btn btn-success todo-btn"
            //   onClick={handleAddBtnClicked}
            //   onSubmit={handleAddBtnClicked}
            >
              <MdAddCircleOutline />
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
export default AddToDo;

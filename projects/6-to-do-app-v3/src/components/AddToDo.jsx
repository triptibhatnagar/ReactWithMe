import { useState } from "react";
import styles from "./AddToDo.module.css";
// import { BiMessageAdd } from 'react-icons/bi'
import { MdAddCircleOutline } from "react-icons/md";

function AddToDo({ handleNewItem }) {
  const [todoName, setToDoName] = useState("");
  const [todoDate, setToDoDate] = useState("");

  const handleNameChange = (e) => {
    setToDoName(e.target.value);
  };
  const handleDateChange = (e) => {
    setToDoDate(e.target.value);
  };
  const handleAddBtnClicked = (e) => {
    //   console.log(e)
      e.preventDefault()
      handleNewItem(todoName, todoDate);
      setToDoName("");
      setToDoDate("");
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
              value={todoName}
              onChange={handleNameChange}
            />
          </div>
          <div className="col-3">
            <input
              className={styles.inputContainer}
              type="date"
              value={todoDate}
              onChange={handleDateChange}
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

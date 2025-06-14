import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import "./App.css"
import ToDoItems from "./components/ToDoItems";
import { useState } from "react";
import WelcomeMsg from "./components/WelcomeMsg";

function App() {
  const toDoItems = [{
    name: "Buy Milk",
    dueDate: "15.06.2025"
  },
  {
    name: "Don't Forget to smile",
    dueDate: "Daily"
  }]

  let [todoItem, setToDoItem] = useState(toDoItems)
  // let [todoItem, setToDoItem] = useState([])
  
  let handleNewItem = (itemName, itemDate) => {
    // console.log(itemName, itemDate)
    const newToDoItems = [...todoItem, {name: itemName, dueDate: itemDate}]
    setToDoItem(newToDoItems)
  }

  let handleDeleteItem = (itemName) => {//deleting by name
    // using filter
    const newToDoItems = todoItem.filter((val) => val.name != itemName)
    setToDoItem(newToDoItems)
    // console.log(`Item deleted ${itemName}`)
  }
  return (
  <center className="todo-container">
    <AppName/>
    <AddToDo handleNewItem={handleNewItem}/>
    {todoItem.length === 0 && <WelcomeMsg/>}
    <ToDoItems toDoItems={todoItem} onDeleteClick={handleDeleteItem}/>
    
  </center>
  )

  // </center> bcoz i want evrything in center
}
export default App
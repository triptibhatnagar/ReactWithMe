import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import "./App.css"
import ToDoItems from "./components/ToDoItems";
import { useState } from "react";
import WelcomeMsg from "./components/WelcomeMsg";
import { ToDoItemsContext } from "./store/todoitems-store";

function App() {
  const toDoItems = []

  let [todoItem, setToDoItem] = useState(toDoItems)
  // let [todoItem, setToDoItem] = useState([])
  
  let addNewItem = (itemName, itemDate) => {
    // console.log(itemName, itemDate)
    // const newToDoItems = [...todoItem, {name: itemName, dueDate: itemDate}]
    // setToDoItem(newToDoItems)

    // setting new value based on current value
    setToDoItem((currVal) => {
      return [...currVal, {name: itemName, dueDate: itemDate}]
    })
  }

  let deleteItem = (itemName) => {//deleting by name
    // using filter
    const newToDoItems = todoItem.filter((val) => val.name != itemName)
    setToDoItem(newToDoItems)
    // console.log(`Item deleted ${itemName}`)
  }

  // const defaultToDoItem = [{name: "Buy Ghee", dueDate: "Today"}]

  return (
    <ToDoItemsContext.Provider value={{
      todoItemss: todoItem,
      addNewItem: addNewItem,
      deleteItem: deleteItem
    }}>
      {/* // </center> bcoz i want evrything in center */}
      <center className="todo-container">
        <AppName/>
        <AddToDo/>
        <WelcomeMsg/>
        <ToDoItems/>
      </center>
    </ToDoItemsContext.Provider>
  )
}
export default App
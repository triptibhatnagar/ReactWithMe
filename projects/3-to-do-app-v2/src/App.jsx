import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import "./App.css"
import ToDoItems from "./components/ToDoItems";

function App() {
  const toDoItems = [{
    name: "Buy Milk",
    dueDate: "15.06.2025"
  },
  {
    name: "Don't Forget to smile",
    dueDate: "Daily"
  },
]
  return (
  <center className="todo-container">
    <AppName/>
    <AddToDo/>
    <ToDoItems toDoItems={toDoItems}/>
    
  </center>
  )

  // </center> bcoz i want evrything in center
}
export default App
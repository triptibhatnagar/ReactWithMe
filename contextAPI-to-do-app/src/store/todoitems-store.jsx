import { createContext } from "react"

export const ToDoItemsContext = createContext({
      todoItemss: [],
      addNewItem: () => {},
      deleteItem: () => {}
    }) // context object with initial value []


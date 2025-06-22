import { createContext } from "react"

export const DataContext = createContext()

const UserContext = ({children}) => {
    const username = "heyylo"
    // console.log(props.children)
  return (
    <div>
      {/* <h1>This is usercontext</h1> */}
      <DataContext.Provider value={username}>
        {children}
      </DataContext.Provider>
    </div>
  )
}

export default UserContext

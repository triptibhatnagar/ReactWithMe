import React from 'react'
import { useState } from 'react'

const App = () => {
  const [uname, setUname] = useState("")
  const submitHandler = (e) => {
    e.preventDefault()
    console.log(uname,"your form is submitted")
    setUname("")
  }
  return (
    <div>
      <form onSubmit={(e) => submitHandler(e)}>
        <input 
        type="text" 
        className="bg-zinc-700 m-5 p-2 w-1/3 rounded-md"
        placeholder='Enter your name'
        // value={"dsgfgs"} - can't type further
        // value={""} - can't type further
        // value={uname}
        // onChange={() => {
        //   console.log("heyyyy you wrote something")
        // }}
        value={uname}
        onChange={(e) => {
          // console.log(e.target.value)
          setUname(e.target.value)
        }}
        />
        <button className='bg-blue-500 p-1 rounded-md px-2'>Submit</button>
      </form>
    </div>
  )
}

export default App
import React from 'react'
import { useState } from 'react'

const App = () => {
  const [a, setA] = useState(10)
  const changeA = () => {
    setA(12)
  }

  // using functions in set -> means changing value based on its previous state
  const [cnt, setCnt] = useState(10)
  const incCnt = () => {
    setCnt((cnt) => cnt+1)
  }
  const decCnt = () => {
    setCnt((cnt) => cnt-1)
  }

  // making counter
  return (
    // <div>
    //   <h1>Value of A : {a}</h1>
    //   <button onClick={changeA}>Change A</button>
    // </div>
    <div>
      <h2>Counter: {cnt}</h2>
      <button onClick={incCnt}>Increment</button>
      <button onClick={decCnt}>Decrement</button>
    </div>
  )
}

export default App
